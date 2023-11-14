import SectionCard from '@/components/cards/section-card';
import React from 'react';
import { SERVICES } from '@/data/services';
import Image from 'next/image';
import banner from '@/../public/assets/images/top-view-master-works-broken-tablet-repair-it-near-tool-bag-wooden-table-service-lab.jpg';
import MainCard from '@/components/cards/main-card';
import { SERVICE_CARD } from '@/data/services';

const Services = () => {
  return (
    <>
      <div className="relative h-[70vh] flex items-center justify-center col-span-6 lg:col-span-12 mb-24 xl:mb-64">
        <Image
          src={banner}
          alt="Hero Image"
          className="absolute inset-0 object-cover w-full h-full top-0 "
          priority
        />

        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className=" z-10 absolute lg:right-32 -bottom-56  lg:-bottom-60 ">
          <div className="col-span-6 px-4 my-24 lg:col-start-2 lg:col-span-10   ">
            <MainCard
              title={SERVICE_CARD.title}
              content={SERVICE_CARD.content}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-6 px-6 mt-64 lg:grid-cols-12 gap-12   ">
        <h3 className="col-span-6 lg:col-start-2  lg:col-span-10 mt-12 text-3xl font-semibold">
          Vrste usluga
        </h3>
        {SERVICES.map((item, index) => (
          <div key={index} className="col-span-6  lg:col-span-4 my-6 ">
            <SectionCard
              title={item.title}
              content={item.content}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
