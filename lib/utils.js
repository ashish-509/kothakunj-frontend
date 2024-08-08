const getAuthToken = () =>
{
	if (typeof window !== "undefined" && typeof localStorage !== "undefined")
	{
		return localStorage.getItem("authToken");
	}
	return null;
};

const setAuthToken = (token) =>
{	
	if (typeof window !== "undefined" && typeof localStorage !== "undefined")
	{
		localStorage.setItem("authToken", token);
	}
};

const clearAuthToken = () => 
{
	if (typeof window !== "undefined" && typeof localStorage !== "undefined")
	{
		localStorage.removeItem("authToken");
	}
};

export { getAuthToken, setAuthToken, clearAuthToken }
