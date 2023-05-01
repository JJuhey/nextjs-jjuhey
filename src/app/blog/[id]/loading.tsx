import React from 'react';

import Loading from 'src/components/loading';

const BlogDetailLoading = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center text-gray-500">
        <Loading />
      </div>
    </div>
  );
}

export default BlogDetailLoading;
