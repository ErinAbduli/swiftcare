import Review from "../models/reviewSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const getAllReviews = async (req, res) => {
	try {
		const reviews = await Review.find({});
		res.status(200).json({
			success: true,
			message: "Successfully fetched all reviews",
			data: reviews,
		});
	} catch (error) {
		res.status(500).json({
			success: true,
			message: "Reviews not found: " + error.message,
		});
	}
};

export const createReview = async (req, res) => {
	if (!req.body.doctor) {
		req.body.doctor = req.params.doctorId;
	}
	if (!req.body.user) {
		req.body.user = req.userId;
	}

	const newReview = new Review(req.body);

	try {
		const savedReview = await newReview.save();

		await Doctor.findByIdAndUpdate(req.body.doctor, {
			$push: { reviews: savedReview._id },
		});

		res.status(201).json({
			success: true,
			message: "Review created successfully",
			data: savedReview,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Review could not be created: " + error.message,
		});
	}
};
