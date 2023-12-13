import React from 'react'

import Image from 'next/image';

// Component
import { FeatureItem, Button } from '.';

// Data 
import featureData from '@/lib/featureData';

const Feature = () => {
  const { features, loading, error } = featureData();

  
  // Used slice to display the last 4 items
  const headerFeatures = features.slice(-4);
  
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Error fetching data:
        {error && error.message} 
      </p>
    );
  }

  return (
    <section className='bg-section-background flex flex-col items-center'>
      <span className='text-gray-3 text-[15px] mb-4 mt-24'>as seen in</span>
      
      <div id="indicators-carousel" className="relative w-full">
        <div className="flex items-center justify-around relative h-18 mb-12 overflow-hidden rounded-lg md:h-96">
          <div className="flex items-center justify-center">
            <img src='/Artboard3 1.svg' width={100} height={50} alt='eco-stylist' />
          </div>
          <div className="flex items-center justify-center">
            <img src='/Artboard6 1.svg' width={100} height={50} alt='canadian living' />
          </div>
          <div className="flex items-center justify-center">
            <img src='/Artboard4 1.svg' width={100} height={50} alt='jillina harris' />
          </div>
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
            <button type="button" className="w-3 h-3 rounded-full bg-slate-300" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" className="w-3 h-3 rounded-full bg-slate-900" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" className="w-3 h-3 rounded-full bg-slate-300" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        </div>
      </div>

      <div className='flex flex-col items-center'>
        <h1 className='text-blue text-[26px] w-[330px] text-center mt-[42px]'>Loungewear you can be proud of.</h1>
        <div className='flex flex-col'>
          <Image 
            src='/image 58.jfif'
            width={303}
            height={453}
            alt='Girl'
            className='mt-[25px] mb-[7px]'
          />
          <span className='text-[13px] text-gray text-center'>White Robe</span>
        </div>  
        <div className='text-center mt-10'>
          {headerFeatures.map((feature) => (
            <div>
              <FeatureItem 
                key={feature.id}
                feature={feature}
                style='mb-10'
                style2='w-[244px] text-gray text-[14px]'
                style3='flex flex-col justify-center items-center'
              />
              <div class="border-t border-slate-200 my-4 mb-10 w-[334px]"></div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Button
          title='Customize Your Outfit' 
          className={`flex justify-around bg-blue text-white text-center pt-4 pb-5 px-14 rounded-md mt-2`}
          imgSrc='/Vector.svg'
          imgAlt='Custom arrow'
          imgWidth={23}
          imgHeight={23}
        />
        <span className='flex justify-center items-center gap-3 pt-2 pb-[43px]'>
          <img src='/stars.svg' width={60} height={9.683} alt='stars' />
          <p className='text-[12px] text-gray-2 leading-5'>
            One of 500+ 5 Star Reviews Online
          </p>
        </span>
      </div>
    </section>
  )
}

export default Feature