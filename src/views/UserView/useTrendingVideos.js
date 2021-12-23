import { useEffect, useState } from "react";
import Logger from "js-logger";
import { fetchTrendingVideo } from "../../services/videoApi";

const useTrendingVideos = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState("");

  useEffect(() => {
    async function innerFunction() {
      try {
        const response = await fetchTrendingVideo();
        setData(response.data);
      } catch (error) {
        setLoadingError(error.message);
      } finally {
        setLoading(false);
      }
    }

    Logger.trace(innerFunction());
  }, []);

  return [data, loading, loadingError];
};

export default useTrendingVideos;
