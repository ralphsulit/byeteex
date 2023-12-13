import React from 'react'
import { ProductCard, Button } from '.'

const ProductInfo = () => {
  return (
    <div className='flex flex-col items-center justify-center py-10 px-14 bg-red'>
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

    </div>
  )
}

export default ProductInfo