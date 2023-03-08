import React from 'react';

import LoadingCard from '../../components/card/loadingCard';

const BlogLoading = () => {
  return (
    <div className="min-h-screen">
      <div className="grid md:grid-cols-3 gap-5 mt-5">
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </div>
    </div>
  );
}

export default BlogLoading;
