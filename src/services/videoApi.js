import axios from "axios";

const {
  REACT_APP_TIK_TUK_API_KEY: headerApiKey,
  REACT_APP_TIK_TUK_API_BASE_URL: baseUrl,
  REACT_APP_TIK_TUK_API_URL_HEADER: hostHeader,
} = process.env;

const videoApi = axios.create({
  baseURL: baseUrl,
  timeout: 30_000,
  headers: {
    "x-rapidapi-host": `${hostHeader}`,
    "x-rapidapi-key": `${headerApiKey}`,
  },
});

export function fetchTrendingVideo() {
  return videoApi.get("/trending/feed");
}

export function getUserDetails(name) {
  return videoApi.get(`/user/info/${name}`);
}
