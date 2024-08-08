import React, { useState } from "react";
import { useTheme } from "../lib/ThemeContext";
import axios from "axios";

const Contact = () => {
	const { theme } = useTheme();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [responseMessage, setResponseMessage] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setResponseMessage("");
		console.log(formData);
		try {
			const response = await axios.post(
				"http://localhost:5000/api/v1/mail/send",
				formData
			);
			setResponseMessage(response.data.message);
		} catch (error) {
			setResponseMessage("Failed to send email. Please try again later.");
		}
		setIsSubmitting(false);
	};

	return (
		<div
		className={`flex justify-center items-center min-h-screen ${
			theme === "dark"
				? "bg-gray-800 text-white"
				: "bg-gray-100 text-gray-700"
		}`}
		>
		<div
		className={`bg-white p-4 md:p-6 rounded-md shadow-md w-[62%] h-[89%] flex flex-col md:flex-row ${
			theme === "dark" ? "dark:bg-gray-700 dark:text-white" : ""
		}`}
		>
		<div className="md:w-1/2 p-4 md:p-6">
		<h2
		className={`text-2xl font-semibold mb-4 md:mb-8 ${
			theme === "dark" ? "dark:text-gray-200" : ""
		}`}
		>
		Contact Information
		</h2>
		<p className={`mb-2 ${theme === "dark" ? "dark:text-gray-300" : ""}`}>
		<i className="fas fa-phone-alt mr-2"></i>+977-9843041090
		</p>
		<p className={`mb-2 ${theme === "dark" ? "dark:text-gray-300" : ""}`}>
		<i className="fas fa-envelope mr-2"></i>queries4kothakunj@gmail.com
		</p>
		<p className={`mb-4 ${theme === "dark" ? "dark:text-gray-300" : ""}`}>
		<i className="fas fa-map-marker-alt mr-2"></i>Thapathali, Kathmandu
		</p>
		<h2
		className={`text-2xl font-semibold mb-4 md:mb-8 ${
			theme === "dark" ? "dark:text-gray-200" : ""
		}`}
		>
		Contact Us
		</h2>
		<form className="space-y-4" onSubmit={handleSubmit}>
		<div>
		<input
		type="text"
		name="name"
		placeholder="Your Name"
		className={`w-full px-3 py-3 border border-gray-300 rounded ${
			theme === "dark" ? "dark:bg-gray-600 dark:text-white" : ""
		}`}
		value={formData.name}
		onChange={handleChange}
		required
		/>
		</div>
		<div>
		<input
		type="email"
		name="email"
		placeholder="Email Address"
		className={`w-full px-3 py-3 border border-gray-300 rounded ${
			theme === "dark" ? "dark:bg-gray-600 dark:text-white" : ""
		}`}
		value={formData.email}
		onChange={handleChange}
		required
		/>
		</div>
		<div>
		<textarea
		name="message"
		placeholder="Your Message"
		className={`w-full px-3 py-3 border border-gray-300 rounded ${
			theme === "dark" ? "dark:bg-gray-600 dark:text-white" : ""
		}`}
		value={formData.message}
		onChange={handleChange}
		required
		></textarea>
		</div>
		<button
		type="submit"
		className={`w-40 px-3 py-3 ${
			theme === "dark"
				? "bg-gray-600 hover:bg-gray-700"
				: "bg-orange-500 hover:bg-orange-900"
		} text-white rounded`}
		disabled={isSubmitting}
		>
		{isSubmitting ? "Submitting..." : "Submit"}
		</button>
		</form>
		{responseMessage && (
			<p className="mt-4 text-center">{responseMessage}</p>
		)}
		</div>

		{/*this throws an adblock error, while it can be safely ignored, it ticks me off*/}
		<div className="md:w-1/2 p-4 md:p-6 flex items-center justify-center">
		<iframe 
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7019.470358356373!2d85.31681920394591!3d27.69377307874068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19ae08c068d9%3A0x475bed1f66d060c!2sIOE%2C%20Thapathali%20Campus!5e0!3m2!1sen!2snp!4v1723097866820!5m2!1sen!2snp" 
		width="600" 
		height="450"
		allowFullScreen
		loading="lazy"
		referrerPolicy="no-referrer-when-downgrade">
		</iframe>

		</div>
		</div>
		</div>
	);
};

export default Contact;
