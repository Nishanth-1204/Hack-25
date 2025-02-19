const multer = require("multer");
const User = require("../models/userModel");
const Registation = require("../models/registrationModel");
const CatchAsync = require("../utils/CatchAsync");
const AppError = require("../utils/appError");
const generateUID = require("../utils/generateUID");
const jwt = require("jsonwebtoken");
const uploadToGoogleDrive = require("../utils/googleDriveUploader");

const uid = generateUID();

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/pdf/users");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `user-${uid}.${ext}`);
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new AppError("Not a PDF! Please upload only PDF files", 400), false);
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

exports.uploadAbstract = upload.single("abstract");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.singup = CatchAsync(async (req, res, next) => {
  const user = await User.create({
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    phoneNumber: req.body.phoneNumber,
  });

  const token = signToken(user._id);

  res.status(200).json({
    status: "success",
    token,
    data: user,
  });
});

exports.login = CatchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("Please provide email and password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (user && !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }

  const token = signToken(user._id);

  res.status(200).json({
    status: "success",
    token,
  });
});

exports.registration = CatchAsync(async (req, res, next) => {
  const { teamName, teamMembers } = req.body;

  const fileUrl = uploadToGoogleDrive(req.file);

  if (!fileUrl) {
    return next(new AppError("Error uploading file to Google Drive", 500));
  }

  const Registration = await Registation.create({
    teamName,
    uid,
    teamMembers: JSON.parse(teamMembers),
    abstract: req.file.filename,
  }).catch((err) => console.log(err));

  res.status(200).json({
    status: "success",
    data: Registration,
  });
});

exports.getAllRegistration = CatchAsync(async (req, res, next) => {
  const Registration = await Registation.find({});

  res.status(200).json({
    status: "success",
    data: Registration,
  });
});
