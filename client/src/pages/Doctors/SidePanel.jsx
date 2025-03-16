import React from "react";

const SidePanel = () => {
	return (
		<div className="shadow-xl p-3 lg:p-5 rounded-md">
			<div className="flex items-center justify-between">
				<p className="text__para mt-0 font-semibold">
					Appointment Price
				</p>
				<span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-gray-900 font-bold">
					&#36;150
				</span>
			</div>
			<div className="mt-[30px]">
				<p className="text__para mt-0 font-semibold text-gray-900">
					Available Time Slots:
				</p>
				<ul className="mt-3">
					<li className="flex items-center justify-between mb-2">
						<p className="text-[15px] leading-6 text-gray-600 font-semibold">
							Sunday
						</p>
						<p className="text-[15px] leading-6 text-gray-600 font-semibold">
							16:00 - 21:30
						</p>
					</li>
					<li className="flex items-center justify-between mb-2">
						<p className="text-[15px] leading-6 text-gray-600 font-semibold">
							Tuesday
						</p>
						<p className="text-[15px] leading-6 text-gray-600 font-semibold">
							13:30 - 18:00
						</p>
					</li>
					<li className="flex items-center justify-between mb-2">
						<p className="text-[15px] leading-6 text-gray-600 font-semibold">
							Wednesday
						</p>
						<p className="text-[15px] leading-6 text-gray-600 font-semibold">
							16:00 - 21:30
						</p>
					</li>
				</ul>
			</div>
			<button className="btn px-2 w-full rounded-md">
				Book Appointment
			</button>
		</div>
	);
};

export default SidePanel;
