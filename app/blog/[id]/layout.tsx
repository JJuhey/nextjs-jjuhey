import React from 'react';

import Utterances from '@components/utterances';

const BlogDetailLayout = ({
  children
}: { children: React.ReactNode }) => {
  return (
    <>
      <section>{children}</section>
      <div className="px-5 md:px-24 pb-10">
        <div className="pb-5">
          <a className="text-gray-500 hover:underline" href="/blog">← Go to back</a>
        </div>
        <hr/>
      </div>
      <Utterances />
    </>
  );
}

export default BlogDetailLayout;
