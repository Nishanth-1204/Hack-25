import express from "express";
import authController from "../controllers/authController.js";

const router = express.Router();

router.post(
  "/registration",
  authController.uploadAbstract,
  authController.registration
);

export default router;
