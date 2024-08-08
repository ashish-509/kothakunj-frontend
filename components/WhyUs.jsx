import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '../lib/ThemeContext';

const features = [
  {
    icon: '🏠',
    title: 'Wide Selection of Rooms',
    description: 'Explore a diverse range of rooms available for rent, tailored to meet your needs.',
  },
  {
    icon: '🔒',
    title: 'Secure Listings',
    description: 'All our room listings are verified for security and quality, ensuring peace of mind.',
  },
  {
    icon: '🕒',
    title: '24/7 Support',
    description: 'Our support team is available around the clock to assist you with any queries or concerns.',
  },
  {
    icon: '💼',
    title: 'Professional Service',
    description: 'We provide a professional and hassle-free experience for finding and renting rooms.',
  },
];

const NextArrow = ({ onClick, isDarkMode }) => (
  <div
    className={`absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer z-10 ${
      isDarkMode ? 'text-white' : 'text-black'
    }`}
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

const PrevArrow = ({ onClick, isDarkMode }) => (
  <div
    className={`absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer z-10 ${
      isDarkMode ? 'text-white' : 'text-black'
    }`}
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

const WhyUs = () => {
  const { theme } = useTheme(); // Get the current theme from context

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow isDarkMode={theme === 'dark'} />,
    prevArrow: <PrevArrow isDarkMode={theme === 'dark'} />,
    arrows: true,
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div className="max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold mb-4 text-center">
          Why Choose Kothakunj?
        </h2>
        <p className="text-lg mb-8 text-center">
          Discover the top reasons why Kothakunj is the best choice for finding your next room to rent.
        </p>
        <Slider {...settings}>
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg shadow-md flex flex-col h-64 sm:h-80 lg:h-96 items-center justify-center">
              <div className="flex justify-center">
                <div className="flex items-center justify-center h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-yellow-500 text-white mb-4 text-5xl sm:text-6xl">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-white-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default WhyUs;
