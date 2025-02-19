const express = require("express");
const multer = require("multer");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/login", authController.login);
router.post("/signup", authController.singup);

router
  .route("/registration")
  .get(authController.getAllRegistration)
  .post(authController.uploadAbstract, authController.registration);

router.route("/").get(userController.getAllUsers);

module.exports = router;
