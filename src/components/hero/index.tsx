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
import { HeroCardType } from '@/data/home';

const HeroCard = ({
  title,
  description,
  content,
  image,
  about,
}: HeroCardType) => {
  return (
    <div className="mt-auto">
      <Card className="">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <Separator />
        </CardHeader>

        <CardContent>
          <div className="mb-6 flex justify-between">
            <div>
              {content.map((item) => (
                <p key={item.id}>{item.text}</p>
              ))}
            </div>
            <Image
              src={image}
              alt="fontele"
              width={250}
              height={250}
              className="m-auto"
            />
          </div>

          <p>{about}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default HeroCard;
