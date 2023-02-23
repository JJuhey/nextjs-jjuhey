"use client"
import React, { useState } from 'react';

const BlogLayout = ({
  children
}: { children: any }) => {
  const [category, setCategory] = useState<string | null>(null);

  const onChangeCategory = (change: string | null) => {
    setCategory(change)
  }

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
      <section className="bg-gray-200 text-gray-700">
        <div className="container mx-auto h-12 flex flex-row items-center justify-center">
          <div className={`w-28 text-center text-sm ${category === null && 'font-bold text-black'} cursor-default hover:cursor-pointer`} onClick={() => onChangeCategory(null)}>전체</div>
          <div className={`w-28 text-center text-sm ${category === 'portfolio' && 'font-bold'} cursor-default hover:cursor-pointer`} onClick={() => onChangeCategory('portfolio')}>포트폴리오</div>
          <div className={`w-28 text-center text-sm ${category === 'tech blog' && 'font-bold'} cursor-default hover:cursor-pointer`} onClick={() => onChangeCategory('tech blog')}>개발 블로그</div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="container mx-auto md:max-w-5xl pt-5">
          {React.cloneElement(children, { category })}
        </div>
      </section>
    </>
  );
}

export default BlogLayout
