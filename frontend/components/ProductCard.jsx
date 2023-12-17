import React from 'react'

const ProductCard = ({title, icon, description, style, style2}) => {
  return (
    <div className={`${style} flex flex-col justify-center items-center`}>
      {icon}
      <h2 className='text-blue py-2.5 text-[22px]'>{title}</h2>
      <p className={style2}>{description}</p>
    </div>
  )
}

export default ProductCard