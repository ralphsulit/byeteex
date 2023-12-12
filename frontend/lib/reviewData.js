// React Imports
import { useEffect, useState } from 'react';

// API
import { fetchReview } from '@/pages/api/api';

const reviewData = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchReview();
        setReviews(result.data)
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { reviews, loading, error };
};

export default reviewData;
