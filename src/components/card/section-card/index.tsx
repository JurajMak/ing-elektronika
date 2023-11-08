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
import { CardType, ContentType } from '@/types';

const SectionCard = ({
  title,
  description,
  content,
  image,
  about,
}: CardType<ContentType[]>) => {
  return (
    <div className="mt-auto">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <Separator />
        </CardHeader>

        <CardContent>
          <div className="mb-6 flex flex-col lg:flex-row justify-between">
            <div>
              {content?.map((item) => <p key={item.id}>{item.text}</p>)}
            </div>
            <Image
              src={image}
              alt="fontele"
              width={250}
              height={250}
              className="m-auto mt-12 lg:mt-0"
            />
          </div>

          <p>{about}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SectionCard;
