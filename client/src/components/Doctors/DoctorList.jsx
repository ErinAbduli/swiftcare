import React from "react";
import DoctorCard from "./DoctorCard";
import useFetchData from "../../hooks/useFetchData.jsx";
import Loader from "../Loader/Loading.jsx";
import Error from "../Error/Error.jsx";

const DoctorList = () => {
	const {
		data: doctors,
		loading,
		error,
	} = useFetchData(`${import.meta.env.VITE_BASE_URL}/doctors`);

	return (
		<>
			{loading && <Loader />}
			{error && <Error />}
			{!loading && !error && (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
					{doctors.map((doctor) => (
						<DoctorCard key={doctor._id} doctor={doctor} />
					))}
				</div>
			)}
		</>
	);
};

export default DoctorList;
