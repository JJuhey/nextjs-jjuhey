import React from 'react';

const BlogLayout = ({
  children
}: { children: React.ReactNode }) => {
  return (
    <section>
      <div className='flex flex-col items-center min-h-screen px-4 mb-10'>
        {children}
      </div>
    </section>
  );
}

export default BlogLayout
