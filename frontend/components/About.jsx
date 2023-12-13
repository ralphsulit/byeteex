import React from 'react'

// Data
import config from '@/pages/config';
import aboutData from '@/lib/aboutData'

const About = () => {
  const { abouts, loading, error } = aboutData();

  const { Title, Description, Images } = abouts;

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
    <div className='flex flex-col items-center justify-center bg-[#f0eeef] py-10 px-12'>
      <h1 className='text-blue text-[26px]'>{Title}</h1>
      <div className='relative py-[75px]'>
        <img src={`${config.apiEndpoint}${Images.data[0].attributes.url}`} width={304.429} height={310}/>
        <img
          src={`${config.apiEndpoint}${Images.data[1].attributes.url}`}
          width={70} 
          className='border-4 border-[#f0eeef] absolute -left-8 top-10'
          />
        <img
          src={`${config.apiEndpoint}${Images.data[2].attributes.url}`}
          width={70} 
          className='border-4 border-[#f0eeef] absolute -right-8 bottom-10'
        />
      </div>
      <p className='text-[#6C6C6C] text-[15px] leading-[23px] tracking-[0.45px] '>
        {Description}
      </p>
    </div>
  )
}

export default About