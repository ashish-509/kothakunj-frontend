import React, { useState } from "react";
import axios from "axios";
import { useTheme } from "../lib/ThemeContext";

const SearchResults = ({ results }) => {
	const { theme } = useTheme();
	const [selectedProperty, setSelectedProperty] = useState(null);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [rating, setRating] = useState(0);
	const [comment, setComment] = useState("");
	const [reviews, setReviews] = useState([]);

	const handleToggleDetails = async (id) => {
		setSelectedProperty(selectedProperty === id ? null : id);
		if (selectedProperty !== id) {
			try {
				const response = await axios.get(
					`https://kothakunj-backend-1.onrender.com/api/v1/reviews/${id}`
				);
				setReviews(response.data);
			} catch (error) {
				console.error("Error fetching reviews:", error);
			}
		}
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % results.length);
	};

	const handlePrev = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + results.length) % results.length
		);
	};

	const handleRating = (rate) => {
		setRating(rate);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!rating || !comment) {
			alert("Please provide a rating and comment.");
			return;
		}
		try {
			const response = await axios.post(
				"https://kothakunj-backend-1.onrender.com/api/v1/reviews",
				{
					room_id: results[currentIndex].id,
					user_id: 1, // Replace with actual user ID
					rating,
					comment,
				}
			);
			console.log("Review submitted:", response.data);
			setReviews([...reviews, response.data]);
			setRating(0);
			setComment("");
		} catch (error) {
			console.error("Error submitting review:", error);
			alert("There was an error submitting your review. Please try again.");
		}
	};

	if (results.length === 0) {
		return <p>No results found.</p>;
	}

	const currentProperty = results[currentIndex];

	return (
		<div className="w-full h-1/2 p-2 pb-11">
		<div
		className={`bg-${
			theme === "dark" ? "gray-700 text-white" : "white text-gray-900"
		} p-6 rounded-lg shadow-lg w-full h-full mx-auto max-w-2xl`}
		>
		<h2 className="text-2xl font-semibold mb-6 text-center">
		Search Results
		</h2>
		<div className="relative">
		<div className="flex justify-center">
		<div
		className={`border border-gray-200 text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full ${
			theme === "dark" ? "bg-gray-600" : ""
		}`}
		>
		<img
		src={currentProperty.imageUrl}
		alt={currentProperty.name}
		className="w-full h-48 object-cover rounded-lg mb-4"
		/>
		<h3 className="text-xl font-semibold mb-2">
		{currentProperty.name}
		</h3>
		<p className="text-gray-700 mb-1">
		Price: Rs. {currentProperty.price}
		</p>
		<p className="text-gray-700 mb-1">Type: {currentProperty.type}</p>
		<p className="text-gray-700 mb-1">
		Location: {currentProperty.location}
		</p>
		<button
		onClick={() => handleToggleDetails(currentProperty.id)}
		className={`text-${
			theme === "dark" ? "yellow" : "orange"
		}-500 hover:text-${
			theme === "dark" ? "yellow" : "orange"
		}-700 focus:outline-none`}
		>
		{selectedProperty === currentProperty.id
			? "Hide Details"
			: "Show Details"}
		</button>
		{selectedProperty === currentProperty.id && (
			<div className="mt-4">
			<p className="text-gray-700 mb-1">
			Rooms: {currentProperty.rooms}
			</p>
			<p className="text-gray-700 mb-1">
			Size: {currentProperty.size}
			</p>
			<p className="text-gray-700">{currentProperty.description}</p>
			</div>
		)}
		</div>
		</div>
		<div className="mt-6 flex justify-between items-center">
		<button
		onClick={handlePrev}
		className={`bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-400 focus:outline-none ${
			theme === "dark" ? "text-black" : ""
		}`}
		>
		Prev
		</button>
		<button
		onClick={handleNext}
		className={`bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-400 focus:outline-none ${
			theme === "dark" ? "text-black" : ""
		}`}
		>
		Next
		</button>
		</div>
		<div className="mt-6">
		<div
		className={`border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full ${
			theme === "dark" ? "bg-gray-600" : ""
		}`}
		>
		<h4 className="text-lg font-semibold mb-4">Reviews</h4>
		{reviews.length > 0 ? (
			reviews.map((review) => (
				<div key={review.id} className="mb-4">
				<p className="text-gray-700">
				<strong>Rating:</strong> {review.rating} stars
				</p>
				<p className="text-gray-700">
				<strong>Comment:</strong> {review.comment}
				</p>
				</div>
			))
		) : (
			<p className="text-gray-700">No reviews yet.</p>
		)}
		<form onSubmit={handleSubmit} className="mt-4">
		<div className="mb-4">
		<label className="block text-gray-700 mb-2">Rating:</label>
		<select
		value={rating}
		onChange={(e) => setRating(e.target.value)}
		className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${
			theme === "dark"
				? "dark:bg-gray-800 dark:border-gray-600"
				: ""
		}`}
		>
		<option value="">Select Rating</option>
		{[1, 2, 3, 4, 5].map((star) => (
			<option key={star} value={star}>
			{star} Star{star > 1 && "s"}
			</option>
		))}
		</select>
		</div>
		<div className="mb-4">
		<label className="block text-gray-700 mb-2">Comment:</label>
		<textarea
		value={comment}
		onChange={(e) => setComment(e.target.value)}
		className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${
			theme === "dark"
				? "dark:bg-gray-800 dark:border-gray-600"
				: ""
		}`}
		></textarea>
		</div>
		<div>
		<button
		type="submit"
		className={`bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg transition-colors duration-300 ${
			theme === "dark"
				? "dark:bg-yellow-600 dark:hover:bg-yellow-700"
				: ""
		}`}
		>
		Submit
		</button>
		</div>
		</form>
		</div>
		</div>
		</div>
		</div>
		</div>
	);
};

export default SearchResults;
