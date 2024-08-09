import React from "react";
import Logo from "../public/static/Images/logo.png";
import { useTheme } from "../lib/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={`py-10 pl-24 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-blue-400 text-white'}`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-10 md:space-y-0">
        <div className="w-full md:w-1/3">
          <h3 className="text-xl mb-6">Contact Us</h3>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className={`p-3 rounded border ${theme === 'dark' ? 'border-gray-700 text-white' : 'border-gray-300'} focus:outline-none focus:border-blue-500`}
            />
            <input
              type="email"
              placeholder="Email Address"
              className={`p-3 rounded border ${theme === 'dark' ? 'border-gray-700 text-white' : 'border-gray-300'} focus:outline-none focus:border-blue-500`}
            />
            <textarea
              placeholder="Your Message"
              className={`p-3 rounded border ${theme === 'dark' ? 'border-gray-700 text-white' : 'border-gray-300'} focus:outline-none focus:border-blue-500`}
              rows="4"
            ></textarea>
            <button
              type="submit"
              className={`w-40 px-3 py-3 ${theme === "dark" ? 'bg-gray-600 hover:bg-gray-700' : 'bg-gray-800 hover:bg-orange-900'} text-white rounded`}
            >
              Send
            </button>
          </form>
        </div>

        <div className="w-full pl-44 md:w-1/3">
          <h3 className="text-xl mb-6">Sitemap</h3>
          <nav>
            <a href="#home" className="block mb-2 hover:underline">
              Home
            </a>Show
            <a href="#pages" className="block mb-2 hover:underline">
              About Us
            </a>
            <a href="#news" className="block mb-2 hover:underline">
              Contact Us
            </a>
            <a href="#sitemap" className="block mb-2 hover:underline">
              Search
            </a>
            <a href="#login" className="block mb-2 hover:underline">
              Login
            </a>
            <a href="#register" className="block mb-2 hover:underline">
              Register
            </a>
          </nav>
        </div>

        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
          <div className="flex flex-col items-center md:items-start">
            <img src={Logo.src} alt="Logo" className="w-24 h-auto mb-4" />
            <p className={`text-md mb-2 ${theme === 'dark' ? 'text-white' : 'text-white'} text-center md:text-left`}>
              Thapathali, Kathmandu
            </p>
            <p className={`text-md mb-2 ${theme === 'dark' ? 'text-white' : 'text-white'} text-center md:text-left`}>
              Phone: 9800000000
            </p>
            <p className={`text-md mb-2 ${theme === 'dark' ? 'text-white' : 'text-white'} text-center md:text-left`}>
              Email:{" "}
              <a
                href="mailto:support_kothakunj@gmail.com"
                className="hover:underline"
              >
                queries4kothakunj@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className={`text-center mt-10 border-t pt-6 ${theme === 'dark' ? 'border-gray-700 text-white' : 'border-gray-300 text-black'}`}>
        <p className="text-md pb-3">© Copyright 2024 All Rights Reserved</p>
        <p className="text-md">Designed by : Jatin</p>
        <p className="text-md">Developed by : Ashish & Mukesh</p>
      </div>
    </footer>
  );
}
