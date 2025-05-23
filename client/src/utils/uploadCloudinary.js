const uploadImageToCloudinary = async (file) => {
	const uploadData = new FormData();

	uploadData.append("file", file);
	uploadData.append("upload_preset", `${import.meta.env.VITE_UPLOAD_PRESET}`);
	try {
		console.log(uploadData);
		const res = await fetch(
			`https://api.cloudinary.com/v1_1/${
				import.meta.env.VITE_CLOUD_NAME
			}/image/upload`,
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
