import React from "react";
import { formatDate } from "../../utils/formatDate.js";

const DoctorAbout = () => {
	return (
		<div>
			<div>
				<h3 className="text-[20px] leading-[30px] text-gray-900 font-semibold flex items-center gap-2">
					About of
					<span className="text-cyan-500 font-bold text-[24px] leading-9">
						James Lee
					</span>
				</h3>
				<p className="text__para">
					Dr. James Lee is a highly skilled orthopedic surgeon with
					expertise in joint replacement, sports medicine, and spinal
					disorders. With over a decade of experience, he has
					successfully performed numerous complex orthopedic
					procedures, helping patients regain mobility and live
					pain-free lives. Dr. Lee is known for his precision in
					minimally invasive surgery, which reduces recovery time and
					enhances patient outcomes. He works closely with athletes
					and active individuals, providing rehabilitation plans and
					surgical solutions to ensure a full recovery. His commitment
					to innovation and patient care has made him one of the most
					sought-after orthopedic specialists in the region.
				</p>
			</div>
			<div className="mt-12">
				<h3 className="text-[20px] leading-[30px] text-gray-900 font-semibold">
					Education
				</h3>
				<ul className="pt-4 md:p-5">
					<li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
						<div>
							<span className="text-cyan-500 text-[15px] leading-6 font-semibold">
								{`${formatDate("07-23-2009")} - ${formatDate(
									"10-9-2011"
								)}`}
							</span>
							<p className="text-[14px] leading-5 font-medium text-gray-900">
								PhD in Orthopedic Surgery
							</p>
						</div>
						<p className="text-[14px] leading-5 font-medium text-gray-900">
							Mayo Clinic Alix School of Medicine
						</p>
					</li>
					<li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
						<div>
							<span className="text-cyan-500 text-[15px] leading-6 font-semibold">
								{`${formatDate("12-05-2011")} - ${formatDate(
									"07-21-2015"
								)}`}
							</span>
							<p className="text-[14px] leading-5 font-medium text-gray-900">
								PhD in Orthopedic Surgery
							</p>
						</div>
						<p className="text-[14px] leading-5 font-medium text-gray-900">
							Mayo Clinic Alix School of Medicine
						</p>
					</li>
				</ul>
			</div>
			<div className="mt-12">
				<h3 className="text-[20px] leading-[30px] text-gray-900 font-semibold">
					Experience
				</h3>
				<ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
					<li className="p-4 rounded bg-[#fff9ea]">
						<span className="text-yellow-500 text-[15px] leading-6 font-semibold">
							{`${formatDate("12-05-2011")} - ${formatDate(
								"07-21-2015"
							)}`}
						</span>
						<p className="text-[16px] leading-5 font-medium text-gray-900">
							Sr. Orthopedic Surgeon
						</p>
						<p className="text-[14px] leading-5 font-medium text-gray-900">
							Mayo Clinic Alix School of Medicine
						</p>
					</li>
					<li className="p-4 rounded bg-[#fff9ea]">
						<span className="text-yellow-500 text-[15px] leading-6 font-semibold">
							{`${formatDate("12-05-2011")} - ${formatDate(
								"07-21-2015"
							)}`}
						</span>
						<p className="text-[16px] leading-5 font-medium text-gray-900">
							Sr. Orthopedic Surgeon
						</p>
						<p className="text-[14px] leading-5 font-medium text-gray-900">
							Mayo Clinic Alix School of Medicine
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default DoctorAbout;
