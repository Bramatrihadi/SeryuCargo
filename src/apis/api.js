import axios from "axios";

const apiKey = import.meta.env.VITE_APP_APIKEY;
const token = import.meta.env.VITE_APP_TOKEN;
const baseUrl = import.meta.env.VITE_APP_BASEURL;
const baseUrlV4 = import.meta.env.VITE_APP_BASEURLV4;

// Now Playing Card
export const getNowPlay = async () => {
  const movie = await axios.get(
    `${baseUrl}/movie/now_playing?page=1&api_key=${apiKey}`
  );
  return movie.data.results;
};

// Top Rated Card
export const getTopRated = async () => {
  const topMovie = await axios.get(
    `${baseUrl}/movie/top_rated?page=1&api_key=${apiKey}`
  );
  return topMovie.data.results;
};

// Authentication
export const getRequestToken = async () => {
  try {
    const response = await axios.post(`${baseUrlV4}/auth/request_token`, null, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const getAccessToken = async (token, requestToken) => {
  try {
    const response = await axios.post(`${baseUrlV4}/auth/access_token`, { request_token: requestToken }, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

export const loginWithSessionId = async (sessionId) => {
  try {
    const response = await axios.post(`${baseUrlV4}/auth/session`, { session_id: sessionId });

    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};
    

