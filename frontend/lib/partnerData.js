// React imports
import { useEffect, useState } from 'react';

// API
import { fetchPartner } from '@/pages/api/api';

const partnerData = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchPartner();
        setPartners(result.data)
      } catch (error) {
        console.error('Error fetching:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { partners, loading, error };
};

export default partnerData;