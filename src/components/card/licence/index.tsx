import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import React from 'react';
import kenwood from '@/../public/assets/images/kenwood-logo.png';
import xiaomi from '@/../public/assets/images/XiaomiLogoNew2.png';

const Licence = () => {
  return (
    <div className="mb-12">
      <div className="mt-2 flex justify-center">
        <div className=" w-full lg:w-[500px] flex flex-col items-center  ">
          <CardTitle className="my-6 mx-6 text-md">
            Ovlašteni servis za KENWOOD
          </CardTitle>

          <Image
            src={kenwood}
            alt="banner"
            width={300}
            className="rounded-2xl m-auto"
          />
          {/* <Image
            src={xiaomi}
            alt="banner"
            width={250}
            className="rounded m-auto"
          /> */}
        </div>
        <div className="w-[500px] flex flex-col items-center  ">
          <CardTitle className="my-6 mx-6 text-md">
            Ovlašteni servis za XIAOMI
          </CardTitle>

          <Image
            src={xiaomi}
            alt="banner"
            width={250}
            className="rounded m-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Licence;
