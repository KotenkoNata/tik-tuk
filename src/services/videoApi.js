import axios from "axios";
import { setupCache } from "axios-cache-adapter";
import localforage from "localforage";

const {
  REACT_APP_TIK_TUK_API_KEY: headerApiKey,
  REACT_APP_TIK_TUK_API_BASE_URL: baseUrl,
  REACT_APP_TIK_TUK_API_URL_HEADER: hostHeader,
  NODE_ENV: nodeEnvironment,
} = process.env;

function isEmptyObject(data) {
  return !Array.isArray(data) && typeof data === "object" && Object.keys(data).length === 0;
}

function isEmptyArray(data) {
  return Array.isArray(data) && data.length === 0;
}

function isMissingCache(data) {
  return !data || isEmptyObject(data) || isEmptyArray(data);
}

const videoApi = axios.create({
  adapter: setupCache({
    maxAge: 24 * 60 * 60 * 1000,
    clearOnError: true,
    debug: nodeEnvironment === "development",
    store: localforage.createInstance({
      driver: [localforage.INDEXEDDB, localforage.LOCALSTORAGE],
      name: "video-api-store",
    }),
    invalidate: async cacheConfig => {
      const { store, uuid } = cacheConfig;
      const cachedValue = await store.getItem(uuid);
      if (isMissingCache(cachedValue?.data?.data)) {
        await store.removeItem(uuid);
      }
    },
  }).adapter,
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
