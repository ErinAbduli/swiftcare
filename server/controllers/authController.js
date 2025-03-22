import User from "../models/userSchema.js";
import Doctor from "../models/doctorSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = (user) => {
	return jwt.sign(
		{
			id: user._id,
			role: user.role,
		},
		process.env.JWT_SECRET,
		{
			expiresIn: "30d",
		}
	);
};

export const register = async (req, res) => {
	const { email, password, name, role, photo, gender } = req.body;

	try {
		let user = null;

		if (role === "patient") {
			user = await User.findOne({ email });
		} else if (role === "doctor") {
			user = await Doctor.findOne({ email });
		}

		if (user) {
			return res.status(400).json({ msg: "User already exists" });
		}

		const salt = await bcrypt.genSalt(10);
		const hashPassword = await bcrypt.hash(password, salt);

		if (role === "patient") {
			user = new User({
				email,
				password: hashPassword,
				name,
				role,
				photo,
				gender,
			});
		}

		if (role === "doctor") {
			user = new Doctor({
				email,
				password: hashPassword,
				name,
				role,
				photo,
				gender,
			});
		}

		await user.save();

		res.status(200).json({
			success: true,
			msg: "User registered successfully",
		});
	} catch (error) {
		res.status(500).json({ success: false, msg: "Internal server error" });
	}
};

export const login = async (req, res) => {
	const { email } = req.body;
	try {
		let user = null;

		const patient = await User.findOne({ email });
		const doctor = await Doctor.findOne({ email });

		if (patient) {
			user = patient;
		} else if (doctor) {
			user = doctor;
		}

		if (!user) {
			return res.status(404).json({ msg: "User does not exist" });
		}

		const isPasswordMatch = await bcrypt.compare(
			req.body.password,
			user.password
		);

		if (!isPasswordMatch) {
			return res
				.status(400)
				.json({ status: false, msg: "Invalid credentials" });
		}

		const token = generateToken(user);

		const { password, role, appointments, ...rest } = user._doc;

		res.status(200).json({
			success: true,
			message: "User logged in successfully",
			token,
			data: [rest],
			role,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			msg: "failed to Login",
			error: error.message,
		});
	}
};
