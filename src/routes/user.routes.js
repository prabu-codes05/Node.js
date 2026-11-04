import usercontroller from "../controllers/user.controller.js";
import express from 'express';

const router = express.Router();
router.get("/", usercontroller.getAllUsers);
export default router;