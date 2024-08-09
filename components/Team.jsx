import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ashish from '../public/static/Images/TeamsImages/Ashish.jpg';
import Mukesh from '../public/static/Images/TeamsImages/Mukesh.jpg';
import Jatin from  '../public/static/Images/TeamsImages/Jatin.jpg';
import { useTheme } from "../lib/ThemeContext";

const teamMembers = 
	[
		{
			name: 'Ashish Kandel',
			intro: 'Back-End Developer',
			photo: Ashish.src
		},
		{
			name: 'Mukesh Bhatta',
			intro: 'Data-Base Developer',
			photo: Mukesh.src
		},
		{
			name: 'Jatin Raut',
			intro: 'Front-End Developer',
			photo: Jatin.src
		}
	];

function NextArrow(props) {
	const { onClick } = props;
	const { theme } = useTheme();

	return (
		<div
		className={`absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer z-10 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
		onClick={onClick}
		>
		<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		className="w-8 h-8"
		>
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
		</svg>
		</div>
	);
}

function PrevArrow(props) {
	const { onClick } = props;
	const { theme } = useTheme();

	return (
		<div
		className={`absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer z-10 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
		onClick={onClick}
		>
		<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		className="w-8 h-8"
		>
		<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
		</svg>
		</div>
	);
}

export default function Team() {
	const { theme } = useTheme();

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		arrows: true,
	};

	return (
		<div className={`flex justify-center items-center min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-purple-100'}`}>
		<div className="w-3/5">
		<h2 className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-blue-600'} text-center mb-4`}>TEAM</h2>
		<Slider {...settings}>
		{teamMembers.map((member, index) => (
			<div key={index} className="flex flex-col items-center">
			<div className="flex flex-col items-center">
			<img
			src={member.photo}
			alt={member.name}
			className="w-96 h-96 rounded-full mb-6"
			/>
			<div className={`text-center ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
			<p className="text-2xl font-semibold mb-4">{member.name}</p>
			<p className="text-lg">{member.intro}</p>
			</div>
			</div>
			</div>
		))}
		</Slider>
		</div>
		</div>
	);
}
