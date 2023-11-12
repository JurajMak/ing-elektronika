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
import { CardType } from '@/types';

const MainCard = ({ title, image, content }: CardType<string>) => {
  return (
    <Card className="w-full max-w-lg mb-6">
      <CardHeader className="mb-2">
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

      <CardContent className="mt-4">{content}</CardContent>
    </Card>
  );
};

export default MainCard;
