import React from "react";
import { formatDate } from "../../utils/formatDate";

const Appointments = ({ appointments }) => {
	console.log(appointments);
	return (
		<table className="w-full  text-left text-sm text-gray-500">
			<thead className="text-xs text-gray-700 uppercase bg-gray-50">
				<tr>
					<th scope="col" className="px-6 py-3">
						Name
					</th>
					<th scope="col" className="px-6 py-3">
						Gender
					</th>
					<th scope="col" className="px-6 py-3">
						Payment
					</th>
					<th scope="col" className="px-6 py-3">
						Price
					</th>
					<th scope="col" className="px-6 py-3">
						Booked On
					</th>
				</tr>
			</thead>
			<tbody>
				{appointments.map((appointment) => (
					<tr key={appointment?._id}>
						<th
							scope="row"
							className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
						>
							<img
								src={appointment.user.photo}
								className="w-10 h-10 rounded-full"
								alt=""
							/>
							<div className="pl-3">
								<div className="text-base font-semibold">
									{appointment.user.name}
								</div>
								<div className="text-normal text-gray-500">
									{appointment.user.email}
								</div>
							</div>
						</th>
						<td className="px-6 py-4">{appointment.user.gender}</td>
						<td className="px-6 py-4">
							{appointment.isPaid ? (
								<div className="flex items-center">
									<div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
									<span>Paid</span>
								</div>
							) : (
								<div className="flex items-center">
									<div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
									<span>Not Paid</span>
								</div>
							)}
						</td>
						<td className="px-6 py-4">{appointment.ticketPrice}</td>
						<td className="px-6 py-4">
							{formatDate(appointment.createdAt)}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Appointments;
