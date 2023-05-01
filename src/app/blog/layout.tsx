import React from 'react';

const BlogLayout = ({
  children
}: { children: React.ReactNode }) => {
  return (
    <>
      <section className="bg-gradient-to-b from-black bg-indigo-700">
        <div className="container mx-auto p-12 flex flex-col items-center">
          <h1 className="text-xl font-bold sm:text-2xl m-4 text-white">
            <span className="text-indigo-300">if(hello)</span> 안녕하세요. <br/>
            쭈헤이 블로그입니다.
          </h1>
        </div>
      </section>
      {children}
    </>
  );
}

export default BlogLayout
