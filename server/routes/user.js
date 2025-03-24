import {
	updateUser,
	deleteUser,
	getSingleUser,
	getAllUsers,
} from "../controllers/userController.js";
import express from "express";

const router = express.Router();

router.get("/:id", getSingleUser);
router.get("/", getAllUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
