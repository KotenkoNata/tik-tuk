import { useEffect, useState } from "react";
import Logger from "js-logger";
import { getUserDetails } from "../../services/videoApi";

const useUserDetails = name => {
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState("");

  useEffect(() => {
    async function innerFunction() {
      try {
        const response = await getUserDetails(name);
        setUserDetails(() => response.data);
      } catch (error) {
        setLoadingError(error.message);
      } finally {
        setLoading(false);
      }
    }

    Logger.trace(innerFunction());
  }, [name]);

  return [userDetails, loading, loadingError];
};

export default useUserDetails;
