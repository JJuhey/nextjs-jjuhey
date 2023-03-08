"use client"
import React, { useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

import BlogLoading from './loading'

const Template = ({ children }: {
  children: React.ReactNode;
}) => {
  const searchParams = useSearchParams();
  const paramsCategory = searchParams.get('category')
  const [category, setCategory] = useState<string>(paramsCategory ?? 'all');
  const router = useRouter()
  const pathname = usePathname()

  const isBlogDetailPage = pathname.split('/').length > 2

  const onChangeCategory = (change: string) => {
    setCategory(change)
    router.push(`/blog?category=${change}`)
  }

  const isLoading = paramsCategory && paramsCategory !== category

  return (
    <>
      {isBlogDetailPage || (
        <section className="bg-gray-200 text-gray-700">
          <div className="container mx-auto h-12 flex flex-row items-center justify-center">
            <div className={`w-28 text-center text-sm ${category === 'all' && 'font-bold text-black'} cursor-default hover:cursor-pointer`} onClick={() => onChangeCategory('all')}>전체</div>
            <div className={`w-28 text-center text-sm ${category === 'portfolio' && 'font-bold'} cursor-default hover:cursor-pointer`} onClick={() => onChangeCategory('portfolio')}>포트폴리오</div>
            <div className={`w-28 text-center text-sm ${category === 'tech_blog' && 'font-bold'} cursor-default hover:cursor-pointer`} onClick={() => onChangeCategory('tech_blog')}>개발 블로그</div>
          </div>
        </section>
      )}
      <section className="bg-white">
        <div className="container mx-auto md:max-w-5xl pt-5">
          {isLoading && !isBlogDetailPage ? <BlogLoading /> : children}
        </div>
      </section>
    </>
  );
}

export default Template;
