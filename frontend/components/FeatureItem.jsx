import React from 'react';
import config from '@/pages/config';
import { featureStyles } from '@/assets/customStyles';

const FeatureItem = ({ feature, className }) => {
  return (
    <div key={feature.id} className={className}>
      <img
        src={`${config.apiEndpoint}${feature.attributes.Icon.data.attributes.url}`}
        className={`${featureStyles[1]}`}
      />
      <div>
        {feature.attributes.Description}
      </div>
    </div>
  )
};

export default FeatureItem;