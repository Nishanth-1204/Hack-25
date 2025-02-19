const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");
require("dotenv").config();

// Load Google API credentials from JSON file
const KEYFILEPATH = path.join(__dirname, "hackxelerate-11c1ccff412a.json");
const SCOPES = ["https://www.googleapis.com/auth/drive.file"];

const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: SCOPES,
});

const drive = google.drive({ version: "v3", auth });

const uploadToGoogleDrive = async (file) => {
  try {
    const response = await drive.files.create({
      requestBody: {
        name: file.originalname,
        mimeType: file.mimetype,
        parents: [
          "https://drive.google.com/drive/folders/1nMCMiKoDpAcCzGKm8U2L9_qZgHDn3LdK",
        ], // Replace with your Google Drive Folder ID
      },
      media: {
        mimeType: file.mimetype,
        body: fs.createReadStream(file.path),
      },
    });

    return `https://drive.google.com/file/d/${response.data.id}/view`; // Return the file URL
  } catch (error) {
    console.error("Error uploading to Google Drive:", error);
    return null;
  }
};

module.exports = uploadToGoogleDrive;
