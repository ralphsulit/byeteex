// Next imports
import Image from 'next/image';

// Custom imports
import svgIcon from '../public/icon.svg';
import config from '@/pages/config';

import { Images, FeatureItem, Button, ReviewCard, Loader } from '.';
import { featureStyles, imageContainerStyles } from '@/assets/customStyles';

// Data
import imageData from '@/lib/imageData';
import featureData from '@/lib/featureData';
import reviewData from '@/lib/reviewData';

const Header = () => {
  const { reviews, loading: reviewLoading, error: reviewError } = reviewData();
  const { images, loading: imageLoading, error: imageError } = imageData();
  const { features, loading: featureLoading, error: featureError } = featureData();

  // Used slice to display the first three items
  const headerFeatures = features.slice(0, 3);

  return (
    <Loader loading={imageLoading || featureLoading || reviewLoading} error={imageError || featureError || reviewError}>
      <span className='bg-[#f9f0e5] text-[#565656] text-xs w-full text-center h-9 flex items-center justify-center '>
        <span className='hidden md:block mr-2'>CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)<span className='mx-2'>|</span></span>
        FREE SHIPPING on orders {`>`} $200
        <span className='hidden md:block ml-2'><span className='mx-2'>|</span>easy 45 day return window.</span>
      </span>

      <header className='flex items-center justify-center flex-col'> 
        {/* Header Heading Container */}
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

        {/* Header Image Container */}
        <div className="image-container w-80 flex mt-5 px-6 md:order-2">
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

        {/* Header Subheading Container*/}
        <div className='subheading-container mt-6'>
          {headerFeatures.map((feature) => (
            <FeatureItem
              key={feature.id}
              feature={feature} 
              style={`text-gray ${featureStyles[0]}`}
              style2='pb-[20px]'
            />
          ))}
          <Button
            title='Customize Your Outfit' 
            className={`flex justify-around bg-blue text-white text-center pt-4 pb-5 px-14 rounded-md mt-2`}
            imgSrc='/Vector.svg'
            imgAlt='Custom arrow'
            imgWidth={23}
            imgHeight={23}
          />
        </div>

        {/* Header Review Card Container */}
        <div className='review-card-container my-6 mb-[-74px] bg-white'>
          {reviews.map((review) => (
            <ReviewCard 
              key={review.id}
              review={review}
              span='One of 500+ 5 Star Reviews Online'
            />
          ))}
        </div>
      </header>
    </Loader>
  );
};

export default Header;
