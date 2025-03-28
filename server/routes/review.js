import {
	getAllReviews,
	createReview,
} from "../controllers/reviewController.js";
import express from "express";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router({ mergeParams: true });

router.get("/", getAllReviews);
router.post("/", authenticate, restrict(["patient"]), createReview);

export default router;
