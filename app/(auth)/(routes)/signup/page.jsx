"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    axios
      .post("https://kothakunj-backend-1.onrender.com/register", {
        first_name: formData.firstName,
        last_name: formData.lastName,
        phone: formData.phone,
        address: formData.address,
        email: formData.email,
        password: formData.password,
      })
      .then((response) => {
        console.log("User registered successfully:", response.data);
        // Handle successful registration (e.g., redirect or display success message)
      })
      .catch((error) => {
        console.error("There was an error registering the user!", error);
        // Handle registration error (e.g., display error message)
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-purple-100 text-black">
      <div className="bg-white p-6 rounded-md shadow-md w-3/5 h-5/6">
        <h2 className="text-2xl font-semibold mb-8">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-8 mb-6">
            <div className="col-span-1">
              <label className="block text-gray-700 mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-3 border border-gray-300 rounded text-black"
                placeholder="First Name"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700 mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-3 border border-gray-300 rounded text-black"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mb-6">
            <div className="col-span-1">
              <label className="block text-gray-700 mb-2">Mobile</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-3 border border-gray-300 rounded text-black"
                placeholder="Mobile"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700 mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3 py-3 border border-gray-300 rounded text-black"
                placeholder="Address"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-3 border border-gray-300 rounded text-black"
              placeholder="Email"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 mb-6">
            <div className="col-span-1">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-3 border border-gray-300 rounded text-black"
                placeholder="Password"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-3 border border-gray-300 rounded text-black"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}
          <div className="mt-8">
            <button
              type="submit"
              className="w-40 bg-orange-500 text-white py-3 rounded hover:bg-orange-600"
            >
              Register
            </button>
          </div>
        </form>
        <p className="text-center text-gray-700 mt-6">
          Already have an account?{" "}
          <Link href="/#login" className="text-blue-500">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
