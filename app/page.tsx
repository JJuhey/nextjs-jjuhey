import React from 'react';

import Animation from '../components/animation'

const Page = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hello, 안녕하세요 🥳</h1>
          <p className="mb-8 leading-relaxed">JJuhey 개발블로그에 오신걸 환영합니다. Full stack 개발자입니다. 개발 관련된 포스팅을 주로 올릴 예정입니다. 아직 홈페이지가 리뉴얼중에 있어서 정보가 별로 없지만 차차 업데이트 예정입니다.<br/>쭈헤이 유튜브도 열심히 편집해서 올리고 있으니, 제 일상이 궁금하시다면 방문해주세요.</p>
          <div className='pb-5 pl-2'>
            <label>업데이트 예정:</label>
            <ul className='list-disc ml-5'>
              <li>블로그 내용페이지 추가</li>
              <li>About/Contact 페이지 추가</li>
              <li>블로그 검색 기능</li>
              <li>댓글 기능</li>
              <li>영문 지원</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-purple-400 border-0 py-2 px-6 focus:outline-none hover:bg-purple-500 rounded text-lg">
              <a href='/blog'>Tech Blog</a>
            </button>
            {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Animation />
        </div>
      </div>
    </section>
  );
}

export default Page
