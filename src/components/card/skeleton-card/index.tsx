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
    <div className="mb-12">
      <Card className="w-full lg:w-[500px] ">
        <CardHeader>
          <div>
            <Skeleton className="h-12" />
          </div>

          <CardDescription>
            <div>
              <Skeleton className="h-64" />
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
    </div>
  );
};

export default SkeletonCard;
