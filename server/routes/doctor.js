import {
	updateDoctor,
	deleteDoctor,
	getSingleDoctor,
	getAllDoctors,
} from "../controllers/doctorController.js";
import express from "express";

const router = express.Router();

router.get("/:id", getSingleDoctor);
router.get("/", getAllDoctors);
router.put("/:id", updateDoctor);
router.delete("/:id", deleteDoctor);

export default router;
