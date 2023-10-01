import express from "express";
const router = express.Router();
import {
  getConferences,
  createConference,
} from "../controllers/conferenceController.js";

router.route("/").get(getConferences).post(createConference);

export default router;
