import { useContext, useState } from "react";
import { authContext } from "../../context/AuthContext";
import MyBookings from "./MyBookings";
import Profile from "./Profile";
import useFetchData from "../../hooks/useFetchData";
import Loading from "../../components/Loader/Loading.jsx";
import Error from "../../components/Error/Error.jsx";
const MyAccount = () => {
	const { dispatch } = useContext(authContext);
	const [tab, setTab] = useState("bookings");

	const {
		data: userData,
		loading,
		error,
	} = useFetchData(`${import.meta.env.VITE_BASE_URL}/users/profile/me`);

	const handleLogout = () => {
		dispatch({ type: "LOGOUT" });
	};

	return (
		<section>
			<div className="max-w-[1170px] px-5 mx-auto">
				{loading && !error && <Loading />}

				{error && !loading && <Error msg={error} />}

				{!loading && !error && (
					<div className="grid md:grid-cols-3 gap-10">
						<div className="pb-[50px] px-[30px] rounded-md">
							<div className="flex items-center justify-center">
								<figure className="w-[10px] h-[10px] rounded-full overflow-hidden border-2 border-solid border-blue-600">
									<img
										src={userData.photo}
										alt=""
										className="w-full h-full rounded-full"
									/>
								</figure>
							</div>
							<div className="text-center mt-4">
								<h3 className="text-[18px] leading-[30px] text-gray-900 font-bold">
									{userData.name}
								</h3>
								<p className="text-gray-600 text-[15px] leading-6 font-medium">
									{userData.email}
								</p>
								<p className="text-gray-600 text-[15px] leading-6 font-medium">
									Blood Type:{" "}
									<span className="ml-2 text-gray-900 text-[22px] leading-8">
										{userData.bloodType}
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
								<button
									onClick={() => setTab("bookings")}
									className={` ${
										tab === "bookings" &&
										"bg-blue-600 text-white font-normal"
									} p-2 mr-5 px-5 rounded-md text-gray-900 font-semibold text-[16px] leading-7 border border-solid border-blue-600 cursor-pointer`}
								>
									My Bookings
								</button>
								<button
									onClick={() => setTab("settings")}
									className={` ${
										tab === "settings" &&
										"bg-blue-600 text-white font-normal"
									} p-2 mr-5 px-5 rounded-md text-gray-900 font-semibold text-[16px] leading-7 border border-solid border-blue-600 cursor-pointer`}
								>
									Profile Settings
								</button>
							</div>
							{tab === "bookings" ? (
								<MyBookings />
							) : (
								<Profile user={userData} />
							)}
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default MyAccount;
