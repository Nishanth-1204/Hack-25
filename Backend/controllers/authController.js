import { google } from "googleapis";
import catchAsync from "../utils/catchAsync.js";
import multer from "multer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import Registration from "../models/registrationModel.js";
import { generateUID } from "../utils/generateUID.js";
import AppError from "../utils/appError.js";

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, "../public/pdf");
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uid = generateUID();
    req.uid = uid;
    const extension = path.extname(file.originalname);
    const filename = `user-${uid}${extension}`;
    cb(null, filename);
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new AppError("Not a PDF! Please upload only PDF files.", 400), false);
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

const auth = new google.auth.GoogleAuth({
  scopes: ["https://www.googleapis.com/auth/drive.file"],
});

const drive = google.drive({ version: "v3", auth });
const folderId = process.env.GOOGLE_FOLDERID;

const uploadAbstractToDrive = async (filePath, fileName) => {
  try {
    // Upload file to Google Drive
    const response = await drive.files.create({
      resource: {
        name: fileName,
        parents: [folderId],
      },
      media: {
        mimeType: "application/pdf",
        body: fs.createReadStream(filePath),
      },
    });

    // Set file permissions
    await drive.permissions.create({
      fileId: response.data.id,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });

    // Generate and return file link
    const fileLink = `https://drive.google.com/file/d/${response.data.id}/view?usp=sharing`;
    return fileLink;
  } catch (error) {
    console.error("Drive Upload Error:", error);
    throw new Error("Failed to upload file to Google Drive.");
  }
};

const registration = catchAsync(async (req, res, next) => {
  if (!req.file) {
    return res.status(400).json({ message: "Please upload a PDF file." });
  }

  // Upload file to Google Drive
  const abstractLink = await uploadAbstractToDrive(
    req.file.path,
    `abstract-${req.uid}.pdf`
  );

  // Create registration entry
  const register = await Registration.create({
    teamName: req.body.teamName,
    uid: req.uid,
    teamMembers: JSON.parse(req.body.teamMembers),
    abstract: abstractLink,
  }).catch((error) => {
    console.error("Registration Error:", error);
    throw new Error("Failed to create registration entry.");
  });

  return res.status(200).json({
    status: "success",
    data: register,
  });
});

export default { registration, uploadAbstract: upload.single("abstract") };
