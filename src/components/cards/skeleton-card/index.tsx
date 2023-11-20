import { Card, CardContent, CardHeader } from '@/components/ui/card';

import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const SkeletonCard = () => {
  return (
    <Card className="w-[90vw] md:w-[500px] lg:w-[300px] xl:w-[400px]  ">
      <CardHeader>
        <Skeleton className="h-12" />
        <Skeleton className="h-56" />
      </CardHeader>

      <Skeleton className="h-[0.1rem]" />

      <CardContent className="mt-2">
        <Skeleton className="h-12" />
      </CardContent>
    </Card>
  );
};

export default SkeletonCard;
