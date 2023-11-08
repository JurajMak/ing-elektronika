'use client';
import MainCard from '@/components/card/main-card';
import Licence from '@/components/card/licence-card';
import Carusel from '@/components/carusel';
import SectionCard from '@/components/card/section-card';
import { EXAMINATION } from '@/data/home';
import { REPAIRS } from '@/data/home';
import { EQUIPMENT } from '@/data/equipment';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Loader } from 'lucide-react';

import SkeletonCard from '@/components/card/skeleton-card';

export default function Home() {
  const [equipment, setEquipment] = React.useState(EQUIPMENT.slice(0, 4));
  const [isLoading, setLoading] = React.useState(false);

  // bez loadinga
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
      <div className="grid grid-cols-6 lg:grid-cols-12 gap-6 my-12 ">
        <div className="col-span-6 px-4  lg:col-start-2 lg:col-span-10">
          <Licence />
        </div>
        <div className="col-span-6 px-4 lg:col-start-2 lg:col-span-10">
          <div className="flex flex-col  justify-between gap-12 lg:flex-row ">
            <Carusel />
            <MainCard
              title={EXAMINATION.title}
              image={EXAMINATION.image}
              content={EXAMINATION.content}
            />
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
        {!isLoading && (
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
