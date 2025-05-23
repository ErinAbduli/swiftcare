import {
	updateUser,
	deleteUser,
	getSingleUser,
	getAllUsers,
	getUserProfile,
	getMyAppointments,
} from "../controllers/userController.js";
import express from "express";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/:id", authenticate, restrict(["patient"]), getSingleUser);
router.get("/", authenticate, restrict(["patient"]), getAllUsers);
router.put("/:id", authenticate, restrict(["patient"]), updateUser);
router.delete("/:id", authenticate, restrict(["patient"]), deleteUser);
router.get("/profile/me", authenticate, restrict(["patient"]), getUserProfile);
router.get(
	"/appointments/me",
	authenticate,
	restrict(["patient"]),
	getMyAppointments
);

export default router;
