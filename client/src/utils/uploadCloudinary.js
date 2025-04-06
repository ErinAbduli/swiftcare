const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET;
const cloudName = import.meta.env.VITE_CLOUD_NAME;

const uploadImageToCloudinary = async (file) => {
	const uploadData = new FormData();

	uploadData.append("file", file);
	uploadData.append("upload_preset", "doctor-booking-system");

	try {
		console.log(uploadData);
		const res = await fetch(
			`https://api.cloudinary.com/v1_1/erinabduli/image/upload`,
			{
				method: "post",
				body: uploadData,
			}
		);

		const data = await res.json();
		return data;
	} catch (error) {
		console.error("Error uploading image to Cloudinary:", error);
		throw new Error("Image upload failed");
	}
};

export default uploadImageToCloudinary;
