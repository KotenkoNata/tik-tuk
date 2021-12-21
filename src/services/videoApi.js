import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://tiktok33.p.rapidapi.com";

const options = {
  method: "GET",
  url: `${BASE_URL}`,
  headers: {
    "x-rapidapi-host": "tiktok33.p.rapidapi.com",
    "x-rapidapi-key": `${API_KEY}`,
  },
};

export function fetchTrendingVideo() {
  const newOptions = {
    ...options,
    url: `${BASE_URL}/trending/feed`,
  };
  return axios.get(newOptions.url, newOptions);
}

export function getUserDetails(name) {
  const newOptions = {
    ...options,
    url: `${BASE_URL}/user/info/${name}`,
  };
  return axios.get(newOptions.url, newOptions);
}
