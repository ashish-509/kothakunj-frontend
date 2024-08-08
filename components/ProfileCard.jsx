import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from "../lib/ThemeContext";

const ProfileCard = ({
  name,
  category,
  photo,
  description,
  reviews,
  reviewAuthor,
  rating,
}) => {
  const { theme } = useTheme();

  return (
    <div className={`pb-11 pt-11 ${theme === 'dark' ? 'bg-black text-white' : 'bg-custom-gray text-black'}`}>
      <div className="max-w-md mx-auto p-6 rounded-lg">
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
            {photo ? (
              <img
                src={photo}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <span>Photo</span>
            )}
          </div>
        </div>
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold mb-1">{name}</h2>
          <p className="text-lg text-green-500">{category}</p>
        </div>
        <div className="mb-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Description</h3>
          <p className="text-center">{description}</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Reviews</h3>
          <div className="flex justify-center items-center mb-2">
            {Array.from({ length: 5 }, (_, index) => (
              <span
                key={index}
                className={`text-yellow-400 ${
                  index < rating ? 'text-yellow-400' : 'text-gray-500'
                }`}
              >
                {index < rating ? '★' : '☆'}
              </span>
            ))}
          </div>
          <p className="text-center">
            <span className="text-white-800 font-bold">{reviewAuthor}</span>
            {' -- '}
            {reviews}
          </p>
        </div>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  photo: PropTypes.string,
  description: PropTypes.string.isRequired,
  reviews: PropTypes.string.isRequired,
  reviewAuthor: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default ProfileCard;
