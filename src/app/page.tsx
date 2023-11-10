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
import electronics from '@/../public/assets/images/electronics_two.jpg';
import { CAROUSEL_DATA } from '@/data/carousel';
import EmblaCarousel from '@/components/carusel/hero-carousel';
import { EmblaOptionsType } from 'embla-carousel-react';

export default function Home() {
  const [equipment, setEquipment] = React.useState(EQUIPMENT.slice(0, 4));
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
      const nextItems = EQUIPMENT.slice(equipment.length, equipment.length + 4);
      setEquipment([...equipment, ...nextItems]);
      setLoading(false);
    }, 1000);
  };

  const skeletor = Array(4).fill(null);

  return (
    <>
      {/* <div className="relative h-screen flex items-center justify-center col-span-6 lg:col-span-12">
        <Image
          src={electronics}
          alt="Hero Image"
          className="absolute inset-0 object-cover w-full h-full"
        />

        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="text-center z-10">
          <h1 className="text-4xl font-semibold mb-4">Neki naslov</h1>
          <p className="text-lg">Neki tekst</p>
        </div>
      </div> */}

      <div className="grid grid-cols-6 lg:grid-cols-12 gap-6 my-12 ">
        <div className="col-span-6 px-4  lg:col-start-2 lg:col-span-10">
          <LicenceCard />
        </div>

        <div className="col-span-6 px-4 lg:col-start-2 lg:col-span-10">
          <div className="flex flex-col  justify-between gap-12 lg:flex-row ">
            <MainCard
              title={EXAMINATION.title}
              image={EXAMINATION.image}
              content={EXAMINATION.content}
            />
            <Carusel />
          </div>
        </div>

        <div className="col-span-6 px-4  lg:col-start-2 lg:col-span-10 my-12">
          <SectionCard
            title={REPAIRS.title}
            about={REPAIRS.about}
            content={REPAIRS.content}
            image={REPAIRS.image}
            description={REPAIRS.description}
          />
        </div>

        <h3 className="col-span-6 px-6   lg:col-start-2 lg:col-span-10 text-2xl  font-semibold">
          Cjelokupna oprema za dijagnostiku
        </h3>

        {equipment.map((item) => (
          <div key={item.id} className="col-span-6 mx-auto px-6  xl:col-span-3">
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
              <div key={index} className="col-span-6 mx-auto  xl:col-span-3">
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
