import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import Image from 'next/image';
import banner from '@/../public/assets/images/serv-banner.jpg';

const HomeCard = () => {
  return (
    <div className="lg:mb-auto">
      <Card className="w-full lg:w-[500px] ">
        <CardHeader>
          <CardTitle className="mb-2">Besplatan pregled uređaja</CardTitle>
          <CardDescription>
            <Image src={banner} alt="banner" height={500} className="rounded" />
          </CardDescription>
        </CardHeader>
        <Separator />

        <CardContent className="mt-2">
          Ing-elektronika je nasuvremenije opremljen servis, što otvara
          mogućnost popravka sve danas dostupne elektronike uključujući i
          upravljačke i pogonske elektronike strojeva, vozila..
        </CardContent>
      </Card>
    </div>
  );
};

export default HomeCard;
