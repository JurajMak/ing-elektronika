import Image from 'next/image';
import React from 'react';
import kenwood from '@/../public/assets/images/kenwood-logo.png';
import xiaomi from '@/../public/assets/images/XiaomiLogoNew2.png';

const LicenceCard = () => {
  return (
    <div className="mb-12 flex flex-col items-center">
      <h1 className="text-4xl text-secondary dark:text-[white] font-semibold mb-6 ">
        Ovlašteni servis
      </h1>
      <div className="mt-2 flex flex-col lg:flex-row justify-center gap-12">
        <div className="w-full xl:w-[400px] flex flex-col items-center bg-white rounded-xl p-6 border ">
          <Image
            src={kenwood}
            alt="banner"
            width={300}
            className="rounded-2xl m-auto"
          />
        </div>
        <div className="w-full lg:w-[400px] flex flex-col items-center bg-white rounded-xl border  ">
          <Image
            src={xiaomi}
            alt="banner"
            width={300}
            className="rounded m-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default LicenceCard;
