import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';

import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const SkeletonCard = () => {
  return (
    <Card className="w-[90vw] lg:w-[400px] ">
      <CardHeader>
        <div>
          <Skeleton className="h-12" />
        </div>

        <CardDescription>
          <div>
            <Skeleton className="h-56" />
          </div>
        </CardDescription>
      </CardHeader>
      <div>
        <Skeleton className="h-[0.1rem]" />
      </div>

      <CardContent className="mt-2">
        <div>
          <Skeleton className="h-12" />
        </div>
      </CardContent>
    </Card>
  );
};

export default SkeletonCard;
