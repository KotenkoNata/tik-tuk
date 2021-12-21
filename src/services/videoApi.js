import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const { BASE_URL } = process.env;
const { URL_HEADER } = process.env;

const options = {
  method: "GET",
  url: `${BASE_URL}`,
  headers: {
    "x-rapidapi-host": `${URL_HEADER}`,
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
