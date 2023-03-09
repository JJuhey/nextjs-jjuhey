import React from 'react';
import Skeleton from 'react-loading-skeleton';

const LoadingCard = () => {
  return (
    <div className="flex flex-col my-2">
      <div className="h-48">
        <Skeleton className="rounded-lg p-0 m-0" width="100%" height="100%" />
      </div>
      <div className="flex flex-row py-2">
        <Skeleton className="mr-2" width={64} height={26} />
        <Skeleton width={64} height={26} />
      </div>
      <Skeleton width={200} count={2} />
      <div className="self-end">
        <Skeleton width={80} />
      </div>
    </div>
  );
}

export default LoadingCard;
