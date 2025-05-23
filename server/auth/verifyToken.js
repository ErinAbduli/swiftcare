import jwt from "jsonwebtoken";
import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js";

export const authenticate = async (req, res, next) => {
	const authToken = req.headers.authorization;

	if (!authToken || !authToken.startsWith("Bearer")) {
		return res.status(401).json({
			success: false,
			msg: "Token not found",
		});
	}

	try {
		const token = authToken.split(" ")[1];
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		req.userId = decoded.id;
		req.role = decoded.role;

		next();
	} catch (error) {
		if (error.name === "TokenExpiredError") {
			return res.status(401).json({
				success: false,
				msg: "Token expired",
			});
		}
		return res.status(401).json({
			success: false,
			msg: "Invalid token",
		});
	}
};

export const restrict = (roles) => async (req, res, next) => {
	const userId = req.userId;
	let user;

	const patient = await User.findById(userId);
	const doctor = await Doctor.findById(userId);
	if (patient) {
		user = patient;
	}
	if (doctor) {
		user = doctor;
	}

	if (!roles.includes(user.role)) {
		return res.status(403).json({
			success: false,
			msg: "You are not allowed to access this route",
		});
	}
	next();
};
