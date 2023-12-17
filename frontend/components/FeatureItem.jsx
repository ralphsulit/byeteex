import React from 'react';
import config from '@/pages/config';
import { featureStyles } from '@/assets/customStyles';

const FeatureItem = ({ feature, style, style2, style3 }) => {
  return (
    <div key={feature.id} className={style}>
      <img
        src={`${config.apiEndpoint}${feature.attributes.Icon.data.attributes.url}`}
        className={`${featureStyles[1]}`}

      />
      <div className={style3}>
        <h3 className="text-center text-[20px] text-blue my-5">{feature.attributes.Title}</h3>
        <p className={style2}>{feature.attributes.Description}</p>
      </div>
    </div>
  )
};

export default FeatureItem;