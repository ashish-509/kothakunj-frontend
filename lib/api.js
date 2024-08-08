import axios from "axios";

const URL = "http://localhost:5000/api/v1/";

const postAPI = async (endpoint, postData, headers = { "Content-Type": "application/json" }) =>
{
	
	try
	{
		const response = await axios.post(`${URL}${endpoint}`, postData, 
		{
			headers: headers ,
			withCredentials: true,
		});
		const { statusCode, data, message } = response.data;
		console.log(message);
		if(statusCode === 200)
		{
			return data;
		}
		else
		{
			throw new Error(`Failed to post to ${endpoint} with status code ${statusCode} and message:\n\t\t${message}`);
		}
	}
	catch(error)
	{
		throw error;
	}
}
export {postAPI};
