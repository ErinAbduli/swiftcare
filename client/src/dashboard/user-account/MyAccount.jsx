import { useContext } from "react";
import { authContext } from "../../context/AuthContext";
import userImg from "../../assets/images/doctor-img01.png";

const MyAccount = () => {
	const { dispatch } = useContext(authContext);

	const handleLogout = () => {
		dispatch({ type: "LOGOUT" });
	};

	return (
		<div className="max-w-[1170px] px-5 mx-auto">
			<div className="grid md:grid-cols-3 gap-10">
				<div className="pb-[50px] px-[30px] rounded-md">
					<div className="flex items-center justify-center">
						<figure className="w-[100px] h-[100px] rounded-full overflow-hidden border-2 border-solid border-blue-600">
							<img
								src={userImg}
								alt=""
								className="w-full h-full rounded-full"
							/>
						</figure>
					</div>
					<div className="text-center mt-4">
						<h3 className="text-[18px] leading-[30px] text-gray-900 font-bold">
							Mhibur Rahman
						</h3>
						<p className="text-gray-600 text-[15px] leading-6 font-medium">
							email@gmail.com
						</p>
						<p className="text-gray-600 text-[15px] leading-6 font-medium">
							Blood Type:{" "}
							<span className="ml-2 text-gray-900 text-[22px] leading-8">
								o+
							</span>
						</p>
					</div>
					<div className="mt-[50px] md:mt-[100px]">
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
				<div className="md:col-span-2 md:px-[30px]">
					<div>
						<button className="p-2 mr-5 px-5 rounded-md text-gray-900 font-semibold text-[16px] leading-7 border border-solid border-blue-600">
							My Bookings
						</button>
						<button className="p-2 mr-5 px-5 rounded-md text-gray-900 font-semibold text-[16px] leading-7 border border-solid border-blue-600">
							Profile Settings
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyAccount;
