import { useState } from "react";
import { formatDate } from "../../utils/formatDate.js";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./FeedbackForm.jsx";
import avatar from "../../assets/images/avatar-icon.png";

const Feedback = ({ reviews, totalRating }) => {
	const [showFeedback, setShowFeedback] = useState(false);

	return (
		<div>
			<div className="mb-[50px]">
				<h4 className="text-[20px] leading-[30px] font-bold text-gray-900 mb-[30px]">
					All reviews ({totalRating})
				</h4>
				{reviews.map((review, index) => (
					<div
						key={index}
						className="flex justify-between gap-10 mb-[30px]"
					>
						<div className="flex gap-3">
							<figure className="w-10 h-10 rounded-full">
								<img
									className="w-full"
									src={review?.user?.photo}
									alt=""
								/>
							</figure>
							<div>
								<h5 className="text-[16px] leading-6 text-blue-600 font-bold">
									{review?.user?.name}
								</h5>
								<p className="text-[14px] leading-6 text-gray-600">
									{formatDate(review?.createdAt)}
								</p>
								<p className="text__para mt-3 font-medium text-[15px]">
									{review?.reviewText}
								</p>
							</div>
						</div>
						<div className="flex gap-1">
							{[...Array(review?.rating).keys()].map(
								(_, index) => (
									<AiFillStar key={index} color="#0067ff" />
								)
							)}
						</div>
					</div>
				))}
			</div>
			<div className="text-center">
				{!showFeedback && (
					<button
						className="btn"
						onClick={() => setShowFeedback(true)}
					>
						Give Feedback
					</button>
				)}
				{showFeedback && <FeedbackForm />}
			</div>
		</div>
	);
};

export default Feedback;
