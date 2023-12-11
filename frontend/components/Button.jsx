import React from 'react'

import Image from 'next/image'

const Button = ({ title, className, imgSrc, imgAlt, imgWidth, imgHeight }) => {
  return (
    <div className={className}>
      {title}
      <Image 
        src={imgSrc}   
        alt={imgAlt}   
        width={imgWidth} 
        height={imgHeight} 
      />
    </div>
  )
}

export default Button