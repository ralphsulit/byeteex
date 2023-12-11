// React imports
import { useEffect, useState } from "react";

// API
import { fetchFeature } from "@/pages/api/api";

const featureData = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchFeature();
        setFeatures(result.data)
      } catch (error) {
        console.error('Error fetching:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { features, loading, error };
};

export default featureData;