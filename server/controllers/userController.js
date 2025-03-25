import User from "../models/UserSchema.js";

export const updateUser = async (req, res) => {
	const id = req.params.id;
	try {
		const updatedUser = await User.findByIdAndUpdate(
			id,
			{ $set: req.body },
			{ new: true }
		);

		res.status(200).json({
			success: true,
			msg: "User updated successfully",
			data: updatedUser,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			msg: "Could not update the user",
		});
	}
};

export const deleteUser = async (req, res) => {
	const id = req.params.id;
	try {
		await User.findByIdAndDelete(id);

		res.status(200).json({
			success: true,
			msg: "User deleted successfully",
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			msg: "Could not delete the user",
		});
	}
};

export const getSingleUser = async (req, res) => {
	const id = req.params.id;
	try {
		const user = await User.findById(id).select("-password");

		res.status(200).json({
			success: true,
			msg: "User found",
			data: user,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			msg: "Could not find the user",
		});
	}
};

export const getAllUsers = async (req, res) => {
	try {
		const users = await User.find({}).select("-password");

		res.status(200).json({
			success: true,
			msg: "Users found",
			data: users,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			msg: "Could not find the users",
		});
	}
};
