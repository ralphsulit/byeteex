import React from 'react'
import { ProductCard, Button, ReviewCard, Loader } from '.'
import reviewData from '@/lib/reviewData';

const ProductInfo = () => {
    const { reviews, loading: reviewLoading, error: reviewError } = reviewData();

  return (
    <Loader>
      <div className='flex flex-col items-center justify-center py-10 bg-red'>
        <h1 className='text-blue text-[26px]'>Comfort made easy</h1>
        <div>
          <ProductCard
            title='You Save'
            icon={<img src='./eco-store.svg' height={51} width={51} />}
            description='Browse our store and find something you love.'
            style='bg-[#F0EEEF] py-10 px-10 rounded-lg mt-[23px] w-72'
            style2='text-center text-gray'
          />
        </div>

        <Button
          title='Customize Your Outfit' 
          className={`flex justify-around bg-blue text-white text-center pt-4 pb-5 px-14 rounded-md mt-10 w-80`}
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

        <h1 className='text-blue text-[26px]'>What are our fans saying?</h1>
        <p className='text-center text-gray leading-[23px] tracking-[0.45px] text-[15px] w-[23rem] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh luctus.</p>

        <div className='grid grid-cols-4 gap-1 px-2 mt-10 md:grid-cols-6 lg:grid-cols-11'>
          {[...Array(22)].map((_, index) => (
            <div key={index} className={`${index >= 8 ? 'hidden md:block' : ''}  ${index >= 12 ? 'md:hidden lg:block' : ''}`}>
              <img className="w-full" src='./img/img3.png' alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className='review-card-container my-6 bg-white'>
          {reviews.map((review) => (
            <ReviewCard 
              key={review.id}
              review={review}
              span='One of 500+ 5 Star Reviews Online'
              description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales.'
            />
          ))}
        </div>
        <div>
          <Button
            title='Customize Your Outfit' 
            className={`flex justify-around bg-blue text-white text-center pt-4 pb-5 px-14 rounded-md mt-4 w-80`}
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

      </div>
    </Loader>
  )
}

export default ProductInfo