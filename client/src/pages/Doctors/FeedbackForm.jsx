import React from "react";
import { AiFillStar } from "react-icons/ai";

const FeedbackForm = () => {
	const [rating, setRating] = React.useState(0);
	const [hover, setHover] = React.useState(0);
	const [reviewText, setReviewText] = React.useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form action="">
			<div>
				<h3 className="text-[16px] leading-6 font-semibold text-gray-900 mb-4 mt-0">
					How would you rate the overall experience?
				</h3>

				<div>
					{[...Array(5).keys()].map((_, index) => {
						index++;

						return (
							<button
								key={index}
								type="button"
								className={`${
									index <= ((rating && hover) || hover)
										? "text-yellow-500"
										: "text-gray-400"
								} cursor-pointer border-none outline-none text-[22px]`}
								onClick={() => setRating(index)}
								onMouseEnter={() => setHover(index)}
								onMouseLeave={() => setHover(rating)}
								onDoubleClick={() => {
									setRating(0);
									setHover(0);
								}}
							>
								<span>
									<AiFillStar />
								</span>
							</button>
						);
					})}
				</div>
			</div>
			<div className="mt-[30px]">
				<h3 className="text-[16px] leading-6 font-semibold text-gray-900 mb-4 mt-0">
					Share your feedback or suggestions!
				</h3>
				<textarea
					className="border border-solid border-[#0066ff34] focus:outline outline-blue-600 w-full px-4 py-3 rounded-md"
					rows="5"
					placeholder="Write your message..."
					onChange={(e) => setReviewText(e.target.value)}
				></textarea>
			</div>
			<button onClick={handleSubmit} type="submit" className="btn">
				Submit Feedback
			</button>
		</form>
	);
};

export default FeedbackForm;
