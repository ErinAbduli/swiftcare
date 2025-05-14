import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authContext } from "../context/AuthContext.jsx";
import HashLoader from "react-spinners/HashLoader";

const Login = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const [loading, setIsLoading] = useState(false);

	const navigate = useNavigate();
	const { dispatch } = useContext(authContext);

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const submitHandler = async (e) => {
		e.preventDefault();

		setIsLoading(true);

		try {
			const res = await fetch(
				`${import.meta.env.VITE_BASE_URL}/auth/login`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				}
			);

			const response = await res.json();

			if (!res.ok) {
				throw new Error(response);
			}

			dispatch({
				type: "LOGIN_SUCCESS",
				payload: {
					user: response.data[0],
					role: response.role,
					token: response.token,
				},
			});

			console.log(response, "response");

			setIsLoading(false);
			toast.success(response.msg);
			navigate("/");
		} catch (error) {
			toast.error(error.message);
			setIsLoading(false);
		}
	};

	return (
		<section className="px-5 lg:px-0">
			<div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
				<h3 className="text-gray-900 text-[22px] leading-9 font-bold mb-10">
					Hello! <span className="text-blue-600">Welcome</span> Back
				</h3>
				<form className="py-4 md:py-0" onSubmit={submitHandler}>
					<div className="mb-5">
						<input
							type="email"
							name="email"
							placeholder="Enter your Email"
							value={formData.email}
							onChange={handleInputChange}
							className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-blue-600 text-[22px] leading-7 text-gray-900 placeholder:text-gray-600 cursor-pointer"
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
							className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-blue-600 text-[22px] leading-7 text-gray-900 placeholder:text-gray-600  cursor-pointer"
							required
						/>
					</div>
					<div className="mt-7">
						<button
							type="submit"
							className="w-full bg-blue-600 text-white text-[18px] leading-[30px] rounded-lg cursor-pointer px-4 py-3"
						>
							{loading ? (
								<HashLoader size={25} color="#fff" />
							) : (
								"Login"
							)}
						</button>
					</div>
					<p className="mt-5 text-gray-600 text-center">
						Don't have an account?{" "}
						<Link
							to="/register"
							className="text-blue-600 font-medium ml-1"
						>
							Register
						</Link>
					</p>
				</form>
			</div>
		</section>
	);
};

export default Login;
