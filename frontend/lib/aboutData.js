// React imports
import { useEffect, useState } from "react";

// API
import { fetchAbout } from "@/pages/api/api";

const aboutData = () => {
  const [abouts, setAbouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchAbout();
        setAbouts(result.data[0].attributes)
      } catch (error) {
        console.error('Error fetching:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { abouts, loading, error };
};

export default aboutData;