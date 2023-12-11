import React from 'react'

const Images = ({ url, alt, className}) => {
  return (
    <img
      src={url}
      alt={alt}
      className={className}
    />
  )
}

export default Images