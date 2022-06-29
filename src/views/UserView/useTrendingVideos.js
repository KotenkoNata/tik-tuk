import { useEffect, useState } from "react";
import Logger from "js-logger";
import { getUserFeeds } from "../../services/videoApi";

const useTrendingVideos = name => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState("");

  useEffect(() => {
    async function innerFunction() {
      try {
        const response = await getUserFeeds(name);
        setData(response.data.data.aweme_list);
      } catch (error) {
        setLoadingError(error.message);
      } finally {
        setLoading(false);
      }
    }

    Logger.trace(innerFunction());
  }, [name]);

  return [data, loading, loadingError];
};

export default useTrendingVideos;
