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

		if(statusCode === 200 || statusCode === 201)
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

const getAPI = async (endpoint) =>
{
    try
	{
        const response = await axios.get(`${URL}${endpoint}`, 
		{
			withCredentials: true,
			headers: 
			{
				'Content-Type': 'application/json'
			}
		});
		const { statusCode, data, message } = response.data;
		if(statusCode === 200 || statusCode === 201)
		{
			return data;
		}
		else
		{
			throw new Error(`Failed to get from ${endpoint} with status code ${statusCode} and message:\n\t\t${message}`);
		}
    }
	catch(error)
	{
        throw error;
    }
}

export {postAPI, getAPI};
