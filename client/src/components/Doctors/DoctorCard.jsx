import React from "react";
import starIcon from "../../assets/images/Star.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const DoctorCard = ({ doctor }) => {
	console.log(doctor);
	return (
		<div className="p-3 lg:p-5">
			<div>
				<img src={doctor.photo} className="w-full" alt="" />
			</div>
			<h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-gray-900 font-[700] mt-3 lg:mt-5">
				{doctor.name}
			</h2>
			<div className="mt-2 lg:mt-4 flex items-center justify-between">
				<span className="bg-[#ccf0f3] text-cyan-500 py-1 px-2 lg:py-2 lg:px-6 text-[12px] rounded leading-4 lg:text-[16px] lg:leading-7 font-semibold">
					{doctor.specialization}
				</span>
				<div className="flex items-center hap-[6px]">
					<span className="flex itmes-center justify-center gap-[6px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-gray-900">
						<img className="h-6 w-6" src={starIcon} alt="" />{" "}
						{doctor.avgRating}
					</span>
					<span className="flex itmes-center gap-[6px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-gray-600">
						({doctor.totalRating})
					</span>
				</div>
			</div>
			<div className="mt-[18px] lg:mt-5 flex items-center justify-between">
				<div>
					{/* <h3 className='text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-gray-900 '>
                        {doctor.totalPatients}+ patients
                    </h3> */}
					<p className="tezt-[14px] leading-6 font-[400] text-gray-600">
						At{" "}
						{doctor.experiences
							? doctor?.experiences[0]?.hospital
							: "N/A"}
					</p>
				</div>
				<Link
					to={`/doctors/${doctor._id}`}
					className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] flex items-center justify-center group hover:bg-blue-600 hover:border-none "
				>
					<BsArrowRight className="group-hover:text-white w-6 h-5" />
				</Link>
			</div>
		</div>
	);
};

export default DoctorCard;
