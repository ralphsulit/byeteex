// React Imports
import React from 'react';

// Next imports
import Image from 'next/image';

// Custom imports
import svgIcon from '../public/icon.svg';
import config from '@/pages/config';

import { Images, FeatureItem } from '.';
import { featureStyles, imageContainerStyles } from '@/assets/customStyles';

// Data
import imageData from '@/lib/imageData';
import featureData from '@/lib/featureData';



const Header = () => {
  const { images, loading: imageLoading, error: imageError } = imageData();

  const { features, loading: featureLoading, error: featureError } = featureData();

  if (imageLoading || featureLoading) {
    return <p>Loading...</p>;
  }

  if (imageError || featureError) {
    return (
      <p>
        Error fetching data: {imageError && imageError.message} 
        {featureError && featureError.message}
      </p>
    );
  }

  return (
    <>
      <span className='bg-[#f9f0e5] text-[#565656] text-xs w-full text-center h-9 flex items-center justify-center '>
        <span className='hidden md:block mr-2'>CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)<span className='mx-2'>|</span></span>
        FREE SHIPPING on orders {`>`} $200
        <span className='hidden md:block ml-2'><span className='mx-2'>|</span>easy 45 day return window.</span>
      </span>

      <header className='flex items-center justify-center flex-col md:flex-row'> 
        <div className='heading-container flex flex-col items-center'>
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
        </div>
        <div className="image-container flex mt-5 px-6 md:order-2">
          <span className={imageContainerStyles[3]}></span>
          {/* Created an Image Component to apply separate styles for each image 
          and to render images fetched from the API.  */}
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
        <div className='subheading-container mt-6'>
          {features.map((feature) => (
            <FeatureItem
              key={feature.id}
              feature={feature} 
              className={`text-gray ${featureStyles[0]}`}
            />
          ))}
        </div>
      </header>

    </>
  );
};

export default Header;
