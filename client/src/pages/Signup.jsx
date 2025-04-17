import { useState } from "react";
import signupImg from "../assets/images/signup.gif";
import avatar from "../assets/images/avatar-icon.png";
import { Link, useNavigate } from "react-router-dom";
import uploadImageToCloudinary from "../utils/uploadCloudinary.js";
import { BASE_URL } from "../config.js";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

const Signup = () => {
	const [selectedFile, setSelectedFile] = useState(null);
	const [previewURL, setPreviewURL] = useState("");
	const [loading, setIsLoading] = useState(false);

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		photo: selectedFile,
		gender: "",
		role: "patient",
	});

	const navigate = useNavigate();

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleFileInputChange = async (e) => {
		const file = e.target.files[0];

		const data = await uploadImageToCloudinary(file);

		setPreviewURL(data.url);
		setSelectedFile(data.url);
		setFormData({ ...formData, photo: data.url });
	};

	const submitHandler = async (e) => {
		e.preventDefault();

		setIsLoading(true);

		try {
			const res = await fetch(`${BASE_URL}/auth/register`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const { msg } = await res.json();

			if (!res.ok) {
				throw new Error(msg);
			}

			setIsLoading(false);
			toast.success(msg);
			navigate("/login");
		} catch (error) {
			toast.error(error.message);
			setIsLoading(false);
		}
	};

	return (
		<section className="px-5 xl:px-0">
			<div className="max-w-[1170px] mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 ">
					<div className="hidden lg:block bg-blue-600 rounded-l-lg">
						<figure className="rounded-l-lg">
							<img
								src={signupImg}
								alt=""
								className="w-full rounded-l-lg "
							/>
						</figure>
					</div>
					<div className="rounded-l-lg lg:pl-16 py-10">
						<h3 className="text-gray-900 text-[22px] leading-9 font-bold mb-10">
							Create an{" "}
							<span className="text-blue-600">account</span>
						</h3>
						<form onSubmit={submitHandler}>
							<div className="mb-5">
								<input
									type="text"
									name="name"
									placeholder="Full Name"
									value={formData.name}
									onChange={handleInputChange}
									className="w-full pr-4  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-blue-600 text-[22px] leading-7 text-gray-900 placeholder:text-gray-600 cursor-pointer"
									required
								/>
							</div>
							<div className="mb-5">
								<input
									type="email"
									name="email"
									placeholder="Enter your email"
									value={formData.email}
									onChange={handleInputChange}
									className="w-full pr-4  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-blue-600 text-[22px] leading-7 text-gray-900 placeholder:text-gray-600 cursor-pointer"
									required
								/>
							</div>
							<div className="mb-5">
								<input
									type="password"
									name="password"
									placeholder="Password"
									value={formData.password}
									onChange={handleInputChange}
									className="w-full pr-4  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-blue-600 text-[22px] leading-7 text-gray-900 placeholder:text-gray-600 cursor-pointer"
									required
								/>
								<div className="mt-5 flex items-center justify-between">
									<label
										htmlFor=""
										className="text-gray-900 font-bold text-[16px] leading-7"
									>
										Are you a:
										<select
											name="role"
											onChange={handleInputChange}
											className="text-gray-600 font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
										>
											<option value="patient">
												Patient
											</option>
											<option value="doctor">
												Doctor
											</option>
										</select>
									</label>
									<label
										htmlFor=""
										className="text-gray-900 font-bold text-[16px] leading-7"
									>
										Gender:
										<select
											value={formData.gender}
											onChange={handleInputChange}
											name="gender"
											className="text-gray-600 font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
										>
											<option value="">Select</option>
											<option value="male">Male</option>
											<option value="female">
												Female
											</option>
											<option value="other">Other</option>
										</select>
									</label>
								</div>
							</div>
							<div className="mb-5 flex items-center gap-3">
								{selectedFile && (
									<figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-blue-600 flex items-center justify-center">
										<img
											src={previewURL}
											alt=""
											className="w-full rounded-full"
										/>
									</figure>
								)}
								<div className="relative w-[160px] h-[50px]">
									<input
										type="file"
										name="photo"
										onChange={handleFileInputChange}
										id="customFile"
										accept=".jpg, .png"
										className="ansolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
									/>
									<label
										htmlFor="customFile"
										className="absolute top-0 left-0 w-full h-full flex items-center px-[17%] py-[12%] leading-6 overflow-hidden bg-[#0066ff46] text-gray-900 font-semibold rounded-lg truncate cursor-pointer"
									>
										Upload Photo
									</label>
								</div>
							</div>
							<div className="mt-7">
								<button
									disabled={loading}
									type="submit"
									className="w-full bg-blue-600 text-white text-[18px] leading-[30px] rounded-lg cursor-pointer px-4 py-3"
								>
									{loading ? (
										<HashLoader size={35} color="#ffffff" />
									) : (
										"Sign Up"
									)}
								</button>
							</div>
							<p className="mt-5 text-gray-600 text-center">
								Already have an account?
								<Link
									to="/login"
									className="text-blue-600 font-medium ml-1"
								>
									Sign Up
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Signup;
