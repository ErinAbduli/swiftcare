import React from "react";
import convertTime from "../../utils/convertTime.js";
import { token } from "../../config.js";
import { toast } from "react-toastify";

const SidePanel = ({ doctorId, timeSlots, ticketPrice }) => {
	const bookingHandler = async () => {
		try {
			const res = await fetch(
				`${
					import.meta.env.VITE_BASE_URL
				}/bookings/checkout-session/${doctorId}`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				}
			);

			const data = await res.json();

			if (!res.ok) {
				throw new Error(data.msg);
			}

			if (data.session.url) {
				window.location.href = data.session.url;
			}
		} catch (error) {
			toast.error(error.message);
		}
	};

	return (
		<div className="shadow-xl p-3 lg:p-5 rounded-md">
			<div className="flex items-center justify-between">
				<p className="text__para mt-0 font-semibold">
					Appointment Price
				</p>
				<span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-gray-900 font-bold">
					&#36;{ticketPrice}
				</span>
			</div>
			<div className="mt-[30px]">
				<p className="text__para mt-0 font-semibold text-gray-900">
					Available Time Slots:
				</p>
				<ul className="mt-3">
					{timeSlots?.map((timeSlot, index) => (
						<li
							key={index}
							className="flex items-center justify-between mb-2"
						>
							<p className="text-[15px] leading-6 text-gray-600 font-semibold">
								{timeSlot?.day.charAt(0).toUpperCase() +
									timeSlot?.day.slice(1)}
							</p>
							<p className="text-[15px] leading-6 text-gray-600 font-semibold">
								{convertTime(timeSlot?.startingTime)} -{" "}
								{convertTime(timeSlot?.endingTime)}
							</p>
						</li>
					))}
				</ul>
			</div>
			<button
				onClick={bookingHandler}
				className="btn px-2 w-full rounded-md"
			>
				Book Appointment
			</button>
		</div>
	);
};

export default SidePanel;
