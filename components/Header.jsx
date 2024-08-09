"use client";

import React, { useState, useRef, useEffect} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

import Logo from "../public/static/Images/logo.png";
import Rajesh_image from "../public/static/Images/Profile/RajeshHamal.jpeg";
import { useTheme } from "../lib/ThemeContext";

import ProfileCard from "./ProfileCard";
import Contact  from "./Contact";
import Featured  from "./Featured";
import Hero  from "./Hero";
import WhyUs  from "./WhyUs";
import SearchPage  from "./searchPage";
import PropertyForm  from "./PropertyForm";
import LoginPage  from "./LoginPage";


import { getAuthToken, clearAuthToken }  from "../lib/utils";

import { getAPI } from "@/lib/api";

export default function Header() {
	const { theme, toggleTheme } = useTheme();
	const [showProfile, setShowProfile] = useState(false);
	const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
	const [showLoginPage, setShowLoginPage] = useState(false);
	const [profile, setProfile] = useState(null);
	const heroRef = useRef(null);
	const contactRef = useRef(null);
	const featuredRef = useRef(null);
	const searchFormRef = useRef(null);
	const addRef = useRef(null);
	const whyUsRef = useRef(null);

	const router = useRouter();
	const logout = () => { clearAuthToken(); router.push('/'); setShowSettingsDropdown(false);}
	const toggleDarkMode = () => { toggleTheme(theme === "light" ? "dark" : "light"); setShowSettingsDropdown(false); };

	const handleBackdropClick = (e) => 
	{
		if (e.target.className.includes("fixed"))
		{
			setShowProfile(false);
		}
	};

	useEffect(() =>
	{
		console.log("hello");
		const fetchProfile = async () =>
		{
			if(showProfile)
			{
				const { user_id } = JSON.parse(localStorage.getItem("userInformation"));

				const data = await getAPI(`users/${user_id}`);	
				setProfile(data);
			}
		}
		fetchProfile();
	}, [showProfile]);

	console.log(profile);

	return (
		<>
			<header
				className={`p-4 flex justify-between items-center ${
					theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-gray-700"
				}`}
			>
				<img className="w-20 h-20" src={Logo.src} alt="Logo" />
				<nav className="space-x-6 flex items-center">
					<a
						href="#home"
						className="hover:text-orange-500 transition duration-300 ease-in-out pl-10 text-xl"
						onClick={() => heroRef.current?.scrollIntoView({ behavior: "smooth" })}
					>
						Home
					</a>
					<a
						href="#featured"
						className="hover:text-orange-500 transition duration-300 ease-in-out pl-14 text-xl"
						onClick={() => featuredRef.current?.scrollIntoView({ behavior: "smooth" })}
					>
						Featured
					</a>
					<a
						href="#contact"
						className="hover:text-orange-500 transition duration-300 ease-in-out pl-14 text-xl"
						onClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}
					>
						Contact Us
					</a>
					<a
						href="#search"
						className="hover:text-orange-500 transition duration-300 ease-in-out pl-14 text-xl"
						onClick={() => searchFormRef.current?.scrollIntoView({ behavior: "smooth" })}
					>
						Search
					</a>
					<a
						href="#add"
						className="hover:text-orange-500 transition duration-300 ease-in-out pl-10 text-xl"
						onClick={() => addRef.current?.scrollIntoView({ behavior: "smooth" })}
					>
						Add
					</a>
					<a
						href="#why-us"
						className="hover:text-orange-500 transition duration-300 ease-in-out pl-14 text-xl"
						onClick={() => whyUsRef.current?.scrollIntoView({ behavior: "smooth" })}
					>
						Why Us
					</a>
					<div className="relative">
						<button
							onClick={() => setShowSettingsDropdown(!showSettingsDropdown)}
							className="hover:text-orange-500 transition duration-300 ease-in-out pl-14 pr-14 text-xl flex items-center"
						>
							<FontAwesomeIcon icon={faCog} className="mr-2" />
							Settings
						</button>

						{showSettingsDropdown && (
							<div className="absolute mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
								{getAuthToken() ? (
									<>
										<a
											href="#profile"
											className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
											onClick={() => {setShowProfile(true); setShowSettingsDropdown(false)}}
										>
											Profile
										</a>
										<a
											href="#logout"
											className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
											onClick={logout}
										>
											Logout
										</a>
									</>
								) : (
									<a
										href="#login"
										className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
										onClick={() => {
											setShowLoginPage(true);
											setShowSettingsDropdown(false);
										}}
									>
										Login
									</a>
								)}
								<button
									onClick={toggleDarkMode}
									className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
								>
									{theme === "light" ? "Dark Mode" : "Light Mode"}
								</button>
							</div>
						)}
					</div>
				</nav>
			</header>

			<div ref={heroRef}>
				<Hero />
			</div>

			<div ref={featuredRef}>
				<Featured />
			</div>

			<div ref={contactRef}>
				<Contact />
			</div>

			<div ref={searchFormRef}>
				<SearchPage />
			</div>

			<div ref={addRef}>
				<PropertyForm />
			</div>

			<div ref={whyUsRef}>
				<WhyUs />
			</div>

			{showProfile && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
					onClick={handleBackdropClick}
				>
					<div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
						<ProfileCard
							name={profile && (profile.first_name + " " + profile.last_name) || "Rajesh Hamal"}
							category="Landlord"
							photo={Rajesh_image.src}
							description="I am an Actor in Nepali Cinema (Mahanayak)."
							reviewAuthor="Abhishek Verma"
							reviews="Rajesh dai ko ghar ma basna paunu ta bhagya ho..."
							rating={5}
							onClose={() => setShowProfile(false)}
						/>
					</div>
				</div>
			)}

			{showLoginPage && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full relative">
						<LoginPage
							onClose={() => setShowLoginPage(false)}
							onLogin={() => setShowLoginPage(false)}
						/>
					</div>
				</div>
			)}
		</>
	);
}
