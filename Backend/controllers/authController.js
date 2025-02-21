import { google } from "googleapis";
import catchAsync from "../utils/catchAsync.js";
import multer from "multer";
import Registration from "../models/registrationModel.js";
import { generateUID } from "../utils/generateUID.js";
import AppError from "../utils/appError.js";

// Configure Google Drive API authentication
const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS),
  scopes: ["https://www.googleapis.com/auth/drive.file"],
});

const drive = google.drive({ version: "v3", auth });
const folderId = process.env.GOOGLE_FOLDERID;

// 🟢 Multer storage (memory-based to avoid disk I/O)
const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new AppError("Not a PDF! Please upload only PDF files.", 400), false);
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

// 🚀 Upload PDF directly to Google Drive from buffer
const uploadAbstractToDrive = async (fileBuffer, fileName) => {
  try {
    const response = await drive.files.create({
      resource: {
        name: fileName,
        parents: [folderId],
      },
      media: {
        mimeType: "application/pdf",
        body: Buffer.from(fileBuffer), // Upload directly from buffer
      },
    });

    // Set permissions to allow public access
    await drive.permissions.create({
      fileId: response.data.id,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });

    // Generate file link
    const fileLink = `https://drive.google.com/file/d/${response.data.id}/view?usp=sharing`;
    return fileLink;
  } catch (error) {
    console.error("Drive Upload Error:", error);
    throw new Error("Failed to upload file to Google Drive.");
  }
};

// 📝 Registration endpoint
const registration = catchAsync(async (req, res, next) => {
  if (!req.file) {
    return res.status(400).json({ message: "Please upload a PDF file." });
  }

  // Generate UID for the uploaded file
  const uid = generateUID();
  req.uid = uid;

  // Upload file to Google Drive
  const abstractLink = await uploadAbstractToDrive(
    req.file.buffer,
    `abstract-${uid}.pdf`
  );

  // Create registration entry in MongoDB
  const register = await Registration.create({
    teamName: req.body.teamName,
    uid: uid,
    teamMembers: JSON.parse(req.body.teamMembers),
    abstract: abstractLink,
  });

  return res.status(200).json({
    status: "success",
    data: register,
  });
});

export default { registration, uploadAbstract: upload.single("abstract") };
