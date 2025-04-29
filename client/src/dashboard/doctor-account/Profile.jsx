import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

const Profile = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		bio: "",
		gender: "",
		specialization: "",
		ticketPrice: 0,
		qualifications: [
			{ startingDate: "", endingDate: "", degree: "", university: "" },
		],
		experiences: [
			{ startingDate: "", endingDate: "", position: "", hospital: "" },
		],
		timeSlots: [{ day: "", startingTime: "", endingTime: "" }],
		about: "",
		photo: null,
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleFileInputChange = (e) => {};

	const updateProfileHandler = async (e) => {
		e.preventDefault();
	};

	const addItem = (key, newItem) => {
		setFormData((prevData) => ({
			...prevData,
			[key]: [...prevData[key], newItem],
		}));
	};

	const handleReusableInputChange = (key, index, e) => {
		const { name, value } = e.target;

		setFormData((prevFormData) => {
			const updateItems = [...prevFormData[key]];

			updateItems[index][name] = value;

			return {
				...prevFormData,
				[key]: updateItems,
			};
		});
	};

	const deleteItem = (key, index) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			[key]: prevFormData[key].filter((_, i) => i !== index),
		}));
	};

	const addQualification = (e) => {
		e.preventDefault();

		addItem("qualifications", {
			startingDate: "",
			endingDate: "",
			degree: "",
			university: "",
		});
	};

	const handleQualificationChange = (e, index) => {
		handleReusableInputChange("qualifications", index, e);
	};

	const deleteQualification = (e, index) => {
		e.preventDefault();
		deleteItem("qualifications", index);
	};

	return (
		<div>
			<h2 className="text-gray-900 font-bold text-[24px] leading-9 mb-10">
				Profile Information
			</h2>
			<form action="">
				<div className="mb-5">
					<p className="form__label">Name*</p>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleInputChange}
						placeholder="Full Name"
						className="form__input"
					/>
				</div>
				<div className="mb-5">
					<p className="form__label">Email*</p>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleInputChange}
						placeholder="Email"
						className="form__input"
						readOnly
						aria-readonly="true"
						disabled
					/>
				</div>
				<div className="mb-5">
					<p className="form__label">Phone*</p>
					<input
						type="number"
						name="phone"
						value={formData.phone}
						onChange={handleInputChange}
						placeholder="Phone Number"
						className="form__input"
					/>
				</div>
				<div className="mb-5">
					<p className="form__label">Bio*</p>
					<input
						type="text"
						name="bio"
						value={formData.bio}
						onChange={handleInputChange}
						placeholder="Your Bio"
						className="form__input"
						maxLength={100}
					/>
				</div>
				<div className="mb-5">
					<div className="grid grid-cols-3 gap-5 mb-[30px]">
						<div>
							<p className="form__label">Gender*</p>
							<select
								name="gender"
								value={formData.gender}
								onChange={handleInputChange}
								className="form__input py-3.5"
							>
								<option value="">Select</option>
								<option value="male">Male</option>
								<option value="female">Female</option>
								<option value="other">Other</option>
							</select>
						</div>
						<div>
							<p className="form__label">Specialization*</p>
							<select
								name="specialization"
								value={formData.specialization}
								onChange={handleInputChange}
								className="form__input py-3.5"
							>
								<option value="">Select</option>
								<option value="surgeon">Surgeon</option>
								<option value="neurologist">Neurologist</option>
								<option value="dermatologist">
									Dermatologist
								</option>
							</select>
						</div>
						<div>
							<p className="form__label">Ticket Price*</p>
							<input
								type="number"
								placeholder="100"
								name="ticketPrice"
								value={formData.ticketPrice}
								className="form__input"
								onChange={handleInputChange}
							/>
						</div>
					</div>
				</div>
				<div className="mb-5">
					<p className="form__label">Qualifications*</p>
					{formData.qualifications?.map((qualification, index) => (
						<div key={index}>
							<div>
								<div className="grid grid-cols-2 gap-5">
									<div>
										<p className="form__label">
											Starting Date*
										</p>
										<input
											type="date"
											name="startingDate"
											value={qualification?.startingDate}
											className="form__input"
											onChange={(e) =>
												handleQualificationChange(
													e,
													index
												)
											}
										/>
									</div>
									<div>
										<p className="form__label">
											Ending Date*
										</p>
										<input
											type="date"
											name="endingDate"
											value={qualification?.endingDate}
											className="form__input"
											onChange={(e) =>
												handleQualificationChange(
													e,
													index
												)
											}
										/>
									</div>
								</div>
								<div className="grid grid-cols-2 gap-5 mt-5">
									<div>
										<p className="form__label">Degree*</p>
										<input
											type="text"
											name="degree"
											value={qualification?.degree}
											className="form__input"
											onChange={(e) =>
												handleQualificationChange(
													e,
													index
												)
											}
										/>
									</div>
									<div>
										<p className="form__label">
											University*
										</p>
										<input
											type="text"
											name="university"
											value={qualification?.university}
											className="form__input"
											onChange={(e) =>
												handleQualificationChange(
													e,
													index
												)
											}
										/>
									</div>
								</div>
								<button
									onClick={(e) =>
										deleteQualification(e, index)
									}
									className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer"
								>
									<AiOutlineDelete />
								</button>
							</div>
						</div>
					))}
					<button
						onClick={addQualification}
						className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer"
					>
						Add Qualifications
					</button>
				</div>
				<div className="mb-5">
					<p className="form__label">Experiences*</p>
					{formData.experiences?.map((experience, index) => (
						<div key={index}>
							<div>
								<div className="grid grid-cols-2 gap-5">
									<div>
										<p className="form__label">
											Starting Date*
										</p>
										<input
											type="date"
											name="startingDate"
											value={experience?.startingDate}
											className="form__input"
										/>
									</div>
									<div>
										<p className="form__label">
											Ending Date*
										</p>
										<input
											type="date"
											name="endingDate"
											value={experience?.endingDate}
											className="form__input"
										/>
									</div>
								</div>
								<div className="grid grid-cols-2 gap-5 mt-5">
									<div>
										<p className="form__label">Position*</p>
										<input
											type="text"
											name="position"
											value={experience?.position}
											className="form__input"
										/>
									</div>
									<div>
										<p className="form__label">Hospital*</p>
										<input
											type="text"
											name="hospital"
											value={experience?.hospital}
											className="form__input"
										/>
									</div>
								</div>
								<button className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer">
									<AiOutlineDelete />
								</button>
							</div>
						</div>
					))}
					<button className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer">
						Add Expereinces
					</button>
				</div>
				<div className="mb-5">
					<p className="form__label">Time Slots*</p>
					{formData.timeSlots?.map((timeSlot, index) => (
						<div key={index}>
							<div>
								<div className="grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5">
									<div>
										<p className="form__label">Day*</p>
										<select
											name="day"
											value={timeSlot.day}
											className="form__input py-3.5"
										>
											<option value="">Select</option>
											<option value="saturday">
												Saturday
											</option>
											<option value="sunday">
												Sunday
											</option>
											<option value="monday">
												Monday
											</option>
											<option value="teusday">
												Tuesday
											</option>
											<option value="wednesday">
												Wednesday
											</option>
											<option value="thursday">
												Thursday
											</option>
											<option value="friday">
												Friday
											</option>
										</select>
									</div>
									<div>
										<p className="form__label">
											Starting Time*
										</p>
										<input
											type="time"
											name="startingTime"
											value={timeSlot?.startingTime}
											className="form__input"
										/>
									</div>
									<div>
										<p className="form__label">
											Ending Time*
										</p>
										<input
											type="time"
											name="endingTime"
											value={timeSlot?.endingTime}
											className="form__input"
										/>
									</div>
									<div className="flex items-center">
										<button className="bg-red-600 p-2 rounded-full text-white text-[18px] cursor-pointer mt-6">
											<AiOutlineDelete />
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
					<button className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer">
						Add Time Slot
					</button>
				</div>
				<div className="mb-5">
					<p className="form__label">About*</p>
					<textarea
						name="about"
						rows={5}
						value={formData?.about}
						placeholder="Write about you..."
						onChange={handleInputChange}
						className="form__input"
					></textarea>
				</div>
				<div className="mb-5 flex items-center gap-3">
					{formData?.photo && (
						<figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-blue-600 flex items-center justify-center">
							<img
								src={formData?.photo}
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
						type="submit"
						onClick={updateProfileHandler}
						className="bg-blue-600 text-white text-[18px] leading-[30px] w-full py-3 px-4 rounded-lg"
					>
						Update Profile
					</button>
				</div>
			</form>
		</div>
	);
};

export default Profile;
