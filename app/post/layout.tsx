import React from 'react';

const PostLayout = ({
  children
}: { children: React.ReactNode }) => {
  return (
    <section>
      <div className="m-10 flex min-h-full flex-column">
        {children}
      </div>
    </section>
  );
}

export default PostLayout
