import SectionCard from '@/components/cards/section-card';
import React from 'react';
import { SERVICES } from '@/data/services';

const Services = () => {
  return (
    <div className="grid grid-cols-6 px-6 lg:grid-cols-12 gap-6 my-12 ">
      {SERVICES.map((item, index) => (
        <div
          key={index}
          className="col-span-6 lg:col-start-2 lg:col-span-10  my-12"
        >
          <SectionCard
            title={item.title}
            content={item.content}
            image={item.image}
          />
        </div>
      ))}
    </div>
  );
};

export default Services;
