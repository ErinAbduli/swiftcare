import React from "react";
import { formatDate } from "../../utils/formatDate.js";

const DoctorAbout = ({ doctor }) => {
	return (
		<div>
			<div>
				<h3 className="text-[20px] leading-[30px] text-gray-900 font-semibold flex items-center gap-2">
					About of
					<span className="text-cyan-500 font-bold text-[24px] leading-9">
						{doctor?.name}
					</span>
				</h3>
				<p className="text__para">{doctor?.about}</p>
			</div>
			<div className="mt-12">
				<h3 className="text-[20px] leading-[30px] text-gray-900 font-semibold">
					Education
				</h3>
				<ul className="pt-4 md:p-5">
					{doctor?.qualifications?.map((qualification, index) => (
						<li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
							<div>
								<span className="text-cyan-500 text-[15px] leading-6 font-semibold">
									{`${formatDate(
										qualification?.startingDate
									)} - ${formatDate(
										qualification?.endingDate
									)}`}
								</span>
								<p className="text-[14px] leading-5 font-medium text-gray-900">
									{qualification?.degree}
								</p>
							</div>
							<p className="text-[14px] leading-5 font-medium text-gray-900">
								{qualification?.university}
							</p>
						</li>
					))}
				</ul>
			</div>
			<div className="mt-12">
				<h3 className="text-[20px] leading-[30px] text-gray-900 font-semibold">
					Experience
				</h3>
				<ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
					{doctor?.experiences?.map((experience, index) => (
						<li className="p-4 rounded bg-[#fff9ea]">
							<span className="text-yellow-500 text-[15px] leading-6 font-semibold">
								{`${formatDate(
									experience?.startingDate
								)} - ${formatDate(experience?.endingDate)}`}
							</span>
							<p className="text-[16px] leading-5 font-medium text-gray-900">
								{experience?.position}
							</p>
							<p className="text-[14px] leading-5 font-medium text-gray-900">
								{experience?.hospital}
							</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default DoctorAbout;
