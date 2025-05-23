import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { HashLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { token } from "../../config.js";
import { toast } from "react-toastify";

const FeedbackForm = () => {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);
	const [reviewText, setReviewText] = useState("");
	const [loading, setLoading] = useState(false);

	const { id } = useParams();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			if (!rating || !reviewText) {
				setLoading(false);
				return toast.error("Please fill all fields!");
			}
			const res = await fetch(
				`${import.meta.env.VITE_BASE_URL}/doctors/${id}/reviews`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify({
						rating,
						reviewText,
					}),
				}
			);

			const result = await res.json();

			if (!res.ok) {
				throw new Error(result.message);
			}

			setLoading(false);
			toast.success("Feedback submitted successfully!");
		} catch (error) {
			setLoading(false);
			toast.error(error.message);
		}
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
				{loading ? (
					<HashLoader size={25} color="#fff" />
				) : (
					`Submit Feedback`
				)}
			</button>
		</form>
	);
};

export default FeedbackForm;
