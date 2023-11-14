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

const MainCard = ({
  title,
  image,
  content,
  hasImage,
  bottomImage,
}: CardType<string>) => {
  const imageMargin = hasImage && 'mb-4';
  return (
    <Card className="w-full max-w-lg mb-6">
      <CardHeader className="mb-2">
        <CardTitle className={`${imageMargin} `}>{title}</CardTitle>
        {hasImage && (
          <CardDescription className="mt-2">
            <Image
              src={image}
              alt={`${title}`}
              height={500}
              className="rounded"
              priority
            />
          </CardDescription>
        )}
      </CardHeader>
      <Separator />

      <CardContent className="mt-4 text-lg">{content}</CardContent>

      {!hasImage && bottomImage && (
        <Image
          src={image}
          alt={`${title}`}
          height={500}
          className="rounded"
          priority
        />
      )}
    </Card>
  );
};

export default MainCard;
