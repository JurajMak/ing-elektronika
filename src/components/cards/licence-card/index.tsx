import Image from 'next/image';
import React from 'react';
import xiaomi from '@/../public/assets/images/XiaomiLogoNew2.png';

const LicenceCard = () => {
  return (
    <div className="mb-12 flex flex-col items-center">
      <h1 className="text-4xl xl:text-5xl text-secondary dark:text-[white] font-semibold mb-6 ">
        Ovlašteni servis
      </h1>
      <div className="mt-2 flex flex-col lg:flex-row justify-center gap-12">
        <div className="w-full xl:w-[650px] flex flex-col items-center bg-white rounded-xl p-6 border ">
          <Image
            src={xiaomi}
            alt="banner"
            width={550}
            className="rounded m-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default LicenceCard;
