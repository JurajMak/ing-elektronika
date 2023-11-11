'use client';

import Carusel from '@/components/carusel';
import { EXAMINATION } from '@/data/home';
import { REPAIRS } from '@/data/home';
import { EQUIPMENT } from '@/data/equipment';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Loader } from 'lucide-react';
import LicenceCard from '@/components/cards/licence-card';
import MainCard from '@/components/cards/main-card';
import SectionCard from '@/components/cards/section-card';
import SkeletonCard from '@/components/cards/skeleton-card';
import Image from 'next/image';
import electronics from '@/../public/assets/images/electronic-technician-holds-two-identical-smartphones-comparison-one-hand-broken-another-new.jpg';
import banner from '@/../public/assets/images/top-view-master-works-broken-tablet-repair-it-near-tool-bag-wooden-table-service-lab.jpg';

export default function Home() {
  const [equipment, setEquipment] = React.useState(EQUIPMENT.slice(0, 6));
  const [isLoading, setLoading] = React.useState(false);

  // const loadMoreItems = () => {
  //   const nextItems = EQUIPMENT.slice(equipment.length, equipment.length + 3);
  //   setEquipment([...equipment, ...nextItems]);
  // };

  //sa loadingom
  const loadMoreItems = () => {
    if (isLoading) {
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const nextItems = EQUIPMENT.slice(equipment.length, equipment.length + 6);
      setEquipment([...equipment, ...nextItems]);
      setLoading(false);
    }, 1000);
  };

  const skeletor = Array(3).fill(null);

  return (
    <>
      <div className="relative h-[70vh] flex items-center justify-center col-span-6 lg:col-span-12 mb-52">
        <Image
          src={electronics}
          alt="Hero Image"
          className="absolute inset-0 object-cover w-full h-full top-0 "
          priority
        />

        <div className="absolute inset-0 bg-black opacity-40">
          {/* <h1 className="text-4xl font-semibold mb-4">Neki naslov</h1>
          <p className="text-lg">Neki tekst</p> */}
        </div>
        <div className="text-center z-10 absolute -bottom-56 ">
          <div className="col-span-6 px-4 my-24 lg:col-start-2 lg:col-span-10   ">
            <LicenceCard />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-6 lg:grid-cols-12 gap-6 my-12 ">
        <div className="col-span-6 px-4 lg:col-start-2 lg:col-span-10 my-36">
          <div className="flex flex-col justify-between gap-12 lg:flex-row ">
            <MainCard
              title={EXAMINATION.title}
              image={EXAMINATION.image}
              content={EXAMINATION.content}
            />
            <Carusel />
          </div>
        </div>
        {/* <div className="col-span-6  lg:col-span-12">
          <div className="relative h-[70vh] flex items-center justify-center col-span-6 lg:col-span-12 mb-52 ">
            <Image
              src={banner}
              alt="Hero Image"
              className="absolute inset-0 object-cover w-full h-full top-0 "
              priority
            />

            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="text-center z-10 absolute -bottom-56 ">
           
            </div>
          </div>
        </div> */}

        <div className="col-span-6 px-4  lg:col-start-2 lg:col-span-10 my-24">
          <SectionCard
            title={REPAIRS.title}
            about={REPAIRS.about}
            content={REPAIRS.content}
            image={REPAIRS.image}
            description={REPAIRS.description}
          />
        </div>

        <h3 className="col-span-6 px-6 my-12  lg:col-start-2 lg:col-span-10 text-3xl  font-semibold">
          Cjelokupna oprema za dijagnostiku
        </h3>

        {equipment.map((item) => (
          <div key={item.id} className="col-span-6 mx-auto px-6 lg:col-span-4">
            <MainCard
              title={item.title}
              image={item.image}
              content={item.content}
            />
          </div>
        ))}
        {isLoading && (
          <>
            {skeletor.map((index) => (
              <div key={index} className="col-span-6 mx-auto lg:col-span-4">
                <SkeletonCard />
              </div>
            ))}
          </>
        )}
      </div>
      <div className="w-full flex justify-center items-center ">
        {isLoading ? (
          <Button disabled>
            <Loader className="mr-2 h-4 w-4 animate-spin" />
            Učitavanje
          </Button>
        ) : (
          <Button
            onClick={loadMoreItems}
            className={`${equipment.length === EQUIPMENT.length && 'hidden'}`}
          >
            Učitaj još
          </Button>
        )}
      </div>
    </>
  );
}
