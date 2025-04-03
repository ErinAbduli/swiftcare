const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET;
const cloudName = import.meta.env.VITE_CLOUD_NAME;

const uploadImageToCloudinary = async (file) => {
	const uploadData = new FormData();

	uploadData.append("file", file);
	uploadData.append("upload_preset", uploadPreset);
	uploadData.append("cloud_name", cloudName);

	const res = await fetch(
		`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
		{
			method: "POST",
			body: uploadData,
		}
	);

	const data = await res.json();
	return data;
};

export default uploadImageToCloudinary;
