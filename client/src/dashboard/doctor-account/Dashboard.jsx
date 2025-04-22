import { useState } from "react";
import Loading from "../../components/Loader/Loading.jsx";
import Error from "../../components/Error/Error.jsx";
import useFetchData from "../../hooks/useFetchData.jsx";
import { BASE_URL, token } from "../../config.js";
import Tabs from "./Tabs.jsx";
import starIcon from "../../assets/images/star.png";
import DoctorAbout from "../../pages/Doctors/DoctorAbout";
import Profile from "./Profile.jsx";

const Dashboard = () => {
	const { data, loading, error } = useFetchData(
		`${BASE_URL}/doctors/profile/me`
	);

	const [tab, setTab] = useState("overview");

	return (
		<section>
			<div className="max-w-[1170px] px-5 mx-auto">
				{loading && !error && <Loading />}
				{error && !loading && <Error msg={error} />}
				{!loading && !error && (
					<div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
						<Tabs tab={tab} setTab={setTab} />
						<div className="lg:col-span-2">
							{data?.doctorData?.isApproved === "pending" && (
								<div className="flex p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg">
									<svg
										className="flex-shrink-0 w-5 h-5"
										aria-hidden="true"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z "
											clipRule="evenodd"
										></path>
									</svg>
									<span className="sr-only">Info</span>
									<div className="ml-3 text-sm font-medium">
										To get approval please complete your
										profile. We'll review manually and
										approve within 3 days
									</div>
								</div>
							)}
							<div className="mt-8">
								{tab === "overview" && (
									<div>
										<div className="flex items-center gap-4 mb-10">
											<figure className="max-w-[200px] max-h-[200px]">
												<img
													src={
														data?.doctorData?.photo
													}
													alt=""
													className="w-full"
												/>
											</figure>
											<div>
												<span className="bg-[#ccf0f3] text-irisBlueColor py-1 px-4 lg:py-2 lg:px-6 rounded text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold">
													{data?.doctorData
														?.specalization
														? data?.doctorData
																?.specalization
														: "No Specialization"}
												</span>

												<h3 className="text-[22px] leading-9 font-bold text0gray-900 mt-3">
													{data?.doctorData?.name}
												</h3>
												<div className="flex items-center gap-[6px]">
													<span className="flex items-center gap-[6px] text-gray-900 text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
														<img
															src={starIcon}
															alt=""
														/>
														4.5
													</span>
													<span className=" text-gray-500 text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
														(233)
													</span>
												</div>
												<p className="text__para font-[15px] lg:max-w-[390px] leading-6">
													Doctor Bio
												</p>
											</div>
										</div>
										<DoctorAbout doctor={data.doctorData} />
									</div>
								)}
								{tab === "appointments" && (
									<div>appointments</div>
								)}
								{tab === "profile" && <Profile />}
							</div>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default Dashboard;
