// React Imports
import { useEffect, useState } from 'react';

// API
import { fetchImage } from '@/pages/api/api';

const imageData = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchImage();
        setImages(result.data.attributes.Images.data);
      } catch (error) {
        console.error('Error fetching images:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { images, loading, error };
};

export default imageData;
