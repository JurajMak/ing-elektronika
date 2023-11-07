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
import { CardType } from '@/data/home';

const MainCard = ({ title, image, content }: CardType<string>) => {
  return (
    <div className="mb-12">
      <Card className="w-full lg:w-[500px] ">
        <CardHeader>
          <CardTitle className="mb-2">{title}</CardTitle>
          <CardDescription>
            <Image
              src={image}
              alt="banner"
              height={500}
              className="rounded"
              priority
            />
          </CardDescription>
        </CardHeader>
        <Separator />

        <CardContent className="mt-2">{content}</CardContent>
      </Card>
    </div>
  );
};

export default MainCard;
