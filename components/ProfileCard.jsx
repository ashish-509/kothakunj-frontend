import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { useTheme } from "../lib/ThemeContext";

const ProfileCard = ({
  first_name,
  last_name,
  phone_number,
  address,
  email,
  photo,
}) => {
  const { theme } = useTheme();

  return (
    <div
      className={`pb-11 pt-11 ${
        theme === "dark" ? "bg-black text-white" : "bg-custom-gray text-black"
      }`}
    >
      <div className="max-w-md mx-auto p-6 rounded-lg shadow-md">
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 bg-gray-300 rounded-full overflow-hidden">
            {photo ? (
              <Image
                src={photo}
                alt={`${first_name} ${last_name} Profile Picture`}
                layout="responsive"
                width={96}
                height={96}
                className="rounded-full object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-500">No Photo</span>
              </div>
            )}
          </div>
        </div>
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold mb-1">
            {first_name} {last_name}
          </h2>
          <p className="text-lg text-green-500">{email}</p>
        </div>
        <div className="mb-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
          <p className="text-center">Phone: {phone_number}</p>
          <p className="text-center">Address: {address}</p>
        </div>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  phone_number: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  photo: PropTypes.string,
};

ProfileCard.defaultProps = {
  photo: null,
};

export async function getServerSideProps() {
  try {
    const res = await fetch(
      "https://kothakunj-backend-1.onrender.com/api/user"
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch user data: ${res.statusText}`);
    }

    const data = await res.json();

    return {
      props: {
        first_name: data.first_name || "First Name",
        last_name: data.last_name || "Last Name",
        phone_number: data.phone_number || "No Phone Number",
        address: data.address || "No Address",
        email: data.email || "No Email",
        photo: data.photo || null,
      },
    };
  } catch (error) {
    console.error("Error fetching user data:", error);

    return {
      notFound: true,
    };
  }
}

export default ProfileCard;
