import { useContext } from "react";
import { BiMenu } from "react-icons/bi";
import { authContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Tabs = ({ tab, setTab }) => {
	const { dispatch } = useContext(authContext);
	const navigate = useNavigate();

	const handleLogout = () => {
		dispatch({ type: "LOGOUT" });
		navigate("/");
	};

	return (
		<div>
			<span className="lg:hidden">
				<BiMenu className="w-6 h-6 cursor-pointer" />
			</span>
			<div className="hidden lg:flex flex-col p-[30px] bg-white shadow-2xl items-center h-max rounded-md">
				<button
					onClick={() => setTab("overview")}
					className={`${
						tab === "overview"
							? "bg-indigo-100 text-blue-600"
							: "bg-transparent text-gray-900 "
					} w-full btn mt-0 rounded-md`}
				>
					Overview
				</button>
				<button
					onClick={() => setTab("appointments")}
					className={`${
						tab === "appointments"
							? "bg-indigo-100 text-blue-600"
							: "bg-transparent text-gray-900 "
					} w-full btn mt-0 rounded-md`}
				>
					Appointments
				</button>
				<button
					onClick={() => setTab("profile")}
					className={`${
						tab === "profile"
							? "bg-indigo-100 text-blue-600"
							: "bg-transparent text-gray-900 "
					} w-full btn mt-0 rounded-md`}
				>
					Profile
				</button>
				<div className="mt-[100px] w-full">
					<button
						className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white cursor-pointer"
						onClick={handleLogout}
					>
						Logout
					</button>
					<button className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white cursor-pointer">
						Delete account
					</button>
				</div>
			</div>
		</div>
	);
};

export default Tabs;
