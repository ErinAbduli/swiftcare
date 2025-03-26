import Doctor from "../models/doctorSchema.js";

export const updateDoctor = async (req, res) => {
	const id = req.params.id;
	try {
		const updatedDoctor = await Doctor.findByIdAndUpdate(
			id,
			{ $set: req.body },
			{ new: true }
		);

		res.status(200).json({
			success: true,
			msg: "Doctor updated successfully",
			data: updatedDoctor,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			msg: "Could not update the doctor",
		});
	}
};

export const deleteDoctor = async (req, res) => {
	const id = req.params.id;
	try {
		await Doctor.findByIdAndDelete(id);

		res.status(200).json({
			success: true,
			msg: "Doctor deleted successfully",
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			msg: "Could not delete the doctor",
		});
	}
};

export const getSingleDoctor = async (req, res) => {
	const id = req.params.id;
	try {
		const doctor = await Doctor.findById(id).select("-password");

		res.status(200).json({
			success: true,
			msg: "Doctor found",
			data: doctor,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			msg: "Could not find the doctor",
		});
	}
};

export const getAllDoctors = async (req, res) => {
	try {
		const { query } = req.query;
		let doctors;

		if (query) {
			doctors = await Doctor.find({
				isApproved: "approved",
				$or: [
					{ name: { $regex: query, $options: "i" } },
					{ specialization: { $regex: query, $options: "i" } },
				],
			}).select("-password");
		} else {
			doctors = await Doctor.find({ isApproved: "approved" }).select(
				"-password"
			);
		}

		res.status(200).json({
			success: true,
			msg: "Doctors found",
			data: doctors,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			msg: "Could not find the doctors",
		});
	}
};
