// React Imports
import React, { useEffect, useState } from 'react';

// Next imports
import Image from 'next/image';

// Custom imports
import svgIcon from '../public/icon.svg';
import config from '@/pages/config';
import Images from './Images';

import { imageContainerStyles } from '@/assets/imageStyles';

// API
import { fetchImage } from '@/pages/api/productApi';

const Header = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchImage();
        console.log('Fetched images:', result.data.attributes.Images.data[0].attributes.url);
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

  if (loading) {
    return <p>Loading...</p>; // You can replace this with a loading spinner
  }

  if (error) {
    return <p>Error fetching images: {error.message}</p>;
  }

  return (
    <header className='flex items-center justify-center flex-col'> 
      <span className='bg-[#f9f0e5] text-[#565656] text-xs w-full text-center h-9 flex items-center justify-center'>
        FREE SHIPPING on orders {`>`} $200
      </span>

      <Image 
        src={svgIcon}
        alt='Byteex logo'
        width={200}
        height={35.33}
        className='mt-3.5'
      />

      <h1 className='text-blue text-2xl tracking-wide text-center mt-3.5'>
        {`Don’t`} apologize for being comfortable.
      </h1>

      <div className="image-container flex mt-5 px-6">
        <span className={imageContainerStyles[3]}></span>
        {images.map((image, i) => (
          <div key={image.id}>
            <Images 
              url={`${config.apiEndpoint}${image.attributes.url}`}
              alt={image.attributes.name}
              className={imageContainerStyles[i]}
            />
          </div>
        ))}
        <span className={imageContainerStyles[4]}></span>
      </div>
    </header>
  );
};

export default Header;
