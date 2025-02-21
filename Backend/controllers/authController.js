import { google } from "googleapis";
import catchAsync from "../utils/catchAsync.js";
import multer from "multer";
import Registration from "../models/registrationModel.js";
import { generateUID } from "../utils/generateUID.js";
import AppError from "../utils/appError.js";

// 🟢 Google Drive API authentication
const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS),
  scopes: ["https://www.googleapis.com/auth/drive.file"],
});

const drive = google.drive({ version: "v3", auth });
const folderId = process.env.GOOGLE_FOLDERID;

// 📄 Multer configuration (memory storage)
const upload = multer({
  storage: multer.memoryStorage(), // Ensure buffer is enabled
  fileFilter: (req, file, cb) => {
    file.mimetype === "application/pdf"
      ? cb(null, true)
      : cb(new AppError("Only PDF files are allowed!", 400), false);
  },
});

// 🚀 Upload PDF to Google Drive from buffer
const uploadAbstractToDrive = async (fileBuffer, fileName) => {
  try {
    const response = await drive.files.create({
      requestBody: {
        name: fileName,
        parents: [folderId],
      },
      media: {
        mimeType: "application/pdf",
        body: fileBuffer, // Use buffer directly
      },
    });

    // Set public permissions
    await drive.permissions.create({
      fileId: response.data.id,
      requestBody: { role: "reader", type: "anyone" },
    });

    // Return public file link
    return `https://drive.google.com/file/d/${response.data.id}/view?usp=sharing`;
  } catch (error) {
    console.error("🚨 Drive Upload Error:", error.message);
    throw new AppError("Failed to upload file to Google Drive.", 500);
  }
};

// 📝 Registration controller
const registration = catchAsync(async (req, res, next) => {
  if (!req.file) {
    return next(new AppError("Please upload a PDF file.", 400));
  }

  const uid = generateUID();
  req.uid = uid;

  // Upload PDF to Google Drive
  const abstractLink = await uploadAbstractToDrive(
    req.file.buffer,
    `abstract-${uid}.pdf`
  );

  // Save registration details
  const register = await Registration.create({
    teamName: req.body.teamName,
    uid: uid,
    teamMembers: JSON.parse(req.body.teamMembers),
    abstract: abstractLink,
  });

  res.status(200).json({ status: "success", data: register });
});

export default { registration, uploadAbstract: upload.single("abstract") };
