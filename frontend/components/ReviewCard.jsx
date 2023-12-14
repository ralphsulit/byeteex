import React from 'react'
import config from '@/pages/config';

const ReviewCard = ({ review, span, description }) => {
  const { Name, Avatar } = review.attributes

  return (
    <div className='border border-zinc-100 rounded-lg shadow-xl px-1 py-4'>
      <div className='flex items-center gap-x-3 pl-2'>
        <img
          src={`${config.apiEndpoint}${Avatar.data.attributes.url}`}
          alt='Avatar'
          width={39}
          height={39}
          className='rounded-full' />
        <div>
          <span className='flex text-[11px] gap-2'>
            <img src='/stars.svg' width={60} height={9.683} alt='stars' />
            <h5 className='text-gray-2'>{span}</h5>
          </span>
          <h1 className='text-gray'>{Name}</h1>
        </div>
      </div>
      <p className='text-gray text-xs leading-6 mt-2 w-80 pl-3'>{description}</p>
    </div>
  )
}

export default ReviewCard