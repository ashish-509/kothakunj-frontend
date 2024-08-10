import { useEffect, useState } from "react";

// Helper function to fetch data from the API
const fetchDataFromAPI = async (endpoint) => {
  try {
    const response = await fetch(`https://kothakunj-backend-1.onrender.com/api/v1/${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    return null;
  }
};

const ProfileCard = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      setError(null);

      try {
        // Retrieve user information from localStorage
        const storedUserInfo = localStorage.getItem("userInformation");
        console.log("Stored User Info:", storedUserInfo);

        if (storedUserInfo) {
          const { user_id } = JSON.parse(storedUserInfo);
          console.log("User ID:", user_id);

          // Make API call to fetch user data
          const data = await fetchDataFromAPI(`users/${user_id}`);
          console.log("Fetched Data:", data);

          if (data) {
            setProfile(data);
          } else {
            setError("No data returned from the API.");
          }
        } else {
          setError("No user information found in localStorage.");
        }
      } catch (error) {
        setError("Error fetching profile data.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-300 rounded-lg shadow-md p-6 text-center text-black">
      {profile ? (
        <div className="profile-details">
          <img
            src="https://www.gravatar.com/avatar?d=mp"
            alt="Default user"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h1 className="text-xl font-bold mb-4 p-4">
            Name: {profile.first_name} {profile.last_name}
          </h1>
          <p className="text-gray-700 mb-2 p-3">Email: {profile.email}</p>
          <p className="text-gray-700 mb-2 p-3">Phone: {profile.phone_number}</p>
          <p className="text-gray-700 mb-2 p-3">Address: {profile.address}</p>
        </div>
      ) : (
        <p>No profile data available.</p>
      )}
    </div>
  );
};

export default ProfileCard;
