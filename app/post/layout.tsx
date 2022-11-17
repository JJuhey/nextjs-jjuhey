import React from 'react';

const PostLayout = ({
  children
}: { children: React.ReactNode }) => {
  return (
    <section>
      {/* <h1>Post Header</h1> */}
      {children}
    </section>
  );
}

export default PostLayout
