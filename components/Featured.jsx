import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTheme } from "../lib/ThemeContext";

const Featured = () => {
	const { theme } = useTheme();
	const [rooms, setRooms] = useState([]);
	const [currentRoomIndex, setCurrentRoomIndex] = useState(0);
	const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

	useEffect(() =>
	{
		const fetchRooms = async () =>
		{
			try
			{
				const response = await axios.get("https://kothakunj-backend-1.onrender.com/api/v1/rooms");
				console.log(response.data);
				setRooms(response.data.data);
			}
			catch (error)
			{
				console.error("Error fetching rooms:", error);
			}
		};
		fetchRooms();
	}, []);



	const handlePrevClick = () =>
	{
		console.log(currentRoomIndex);
		setCurrentRoomIndex((prevIndex) => prevIndex === 0 ? rooms?.length - 1 : prevIndex - 1);
		setCurrentPhotoIndex(0);
	};

	const handleNextClick = () => {
		console.log(currentRoomIndex);
		setCurrentRoomIndex((prevIndex) =>
			prevIndex === rooms?.length - 1 ? 0 : prevIndex + 1
		);
		setCurrentPhotoIndex(0);
	};

	const handlePrevPhotoClick = () => {
		setCurrentPhotoIndex((prevIndex) =>
			prevIndex === 0
			? rooms[currentRoomIndex].gallery?.length - 1
			: prevIndex - 1
		);
	};

	const handleNextPhotoClick = () => {
		setCurrentPhotoIndex((prevIndex) =>
			prevIndex === rooms[currentRoomIndex].gallery?.length - 1
			? 0
			: prevIndex + 1
		);
	};

	if (rooms?.length === 0)
	{
		return ( <div className="flex items-center justify-center w-full h-full"> Loading... </div>);
	}

	const {
		city,
		area,
		bedrooms,
		bathrooms,
		room_size,
		kitchen_rooms,
		extra_room,
		rent,
		price_range,
		amenities,
		furnished,
		preferred_gender,
		description,
		house_front_picture,
		gallery = [],
	} = rooms[currentRoomIndex];

	return (
		<div
		className={`featured w-full h-full flex flex-col items-center justify-center p-4 ${
			theme === "dark" ? "bg-black text-white" : "bg-white text-black"
		}`}
		>
		<h2 className="text-3xl font-bold mb-6">Featured Properties</h2>
		<div
		className={`featured-item ${
			theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
		} rounded-lg shadow-lg p-6 w-full max-w-4xl`}
		>
		<div className="featured-item-details mb-4 text-center">
		<h3 className="text-2xl font-semibold mb-2">
		{city}, {area}
		</h3>
		<p className="text-lg mb-2">Description: {description}</p>
		<p className="text-lg mb-2">Bedrooms: {bedrooms}</p>
		<p className="text-lg mb-2">Bathrooms: {bathrooms}</p>
		<p className="text-lg mb-2">Room Size: {room_size} sq.ft</p>
		<p className="text-lg mb-2">Kitchen Rooms: {kitchen_rooms}</p>
		<p className="text-lg mb-2"> Extra Room: {extra_room ? "Yes" : "No"} </p>
		<p className="text-lg mb-2">Rent: Rs.{rent}</p>
		<p className="text-lg mb-2">Price Range: {price_range}</p>
		<p className="text-lg mb-2">Amenities: {amenities}</p>
		<p className="text-lg mb-2">Furnished: {furnished ? "Yes" : "No"}</p>
		<p className="text-lg mb-2">Preferred Gender: {preferred_gender}</p>
		</div>
		{/*I've temporarily disabled rendering these because they don't exist*/}
		{(0  && gallery.length > 0) ?
		(
			<div className="featured-item-photos mb-4 relative">
			<img
			src={gallery[currentPhotoIndex].src}
			alt={`Room photo ${currentPhotoIndex + 1}`}
			className="w-full h-64 object-cover rounded-md"
			/>
			<div className="photo-controls absolute inset-0 flex justify-between items-center p-4">
			<button
			onClick={handlePrevPhotoClick}
			className="bg-gray-700 text-white rounded-full p-2 opacity-75 hover:opacity-100"
			>
			&lt;
			</button>
			<button
			onClick={handleNextPhotoClick}
			className="bg-gray-700 text-white rounded-full p-2 opacity-75 hover:opacity-100"
			>
			&gt;
			</button>
			</div>
			</div>
		) : 
		(
			<div className="text-gray-500 mb-4 text-center">
			No photos available
			</div>
		)}

		<div className="featured-item-controls flex justify-between">
		<button
		onClick={handlePrevClick}
		className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
		>
		Previous Room
		</button>
		<button
		onClick={handleNextClick}
		className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
		>
		Next Room
		</button>
		</div>
		</div>
		</div>
	);
};

export default Featured;
