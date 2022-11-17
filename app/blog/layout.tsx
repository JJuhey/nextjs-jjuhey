import React from 'react';

const BlogLayout = ({
  children
}: { children: React.ReactNode }) => {
  return (
    <section>
      <h1>Blog Header</h1>
      {children}
    </section>
  );
}

export default BlogLayout
