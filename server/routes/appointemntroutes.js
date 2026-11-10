import express from "express";
import { Bookingcontroller } from "../controllers/appointment.js";

const router=express.Router();
router("/book").post(Bookingcontroller);

export default router;