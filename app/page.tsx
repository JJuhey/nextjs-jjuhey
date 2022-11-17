import React from 'react';
import Link from 'next/link'

const Page = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hello, 안녕하세요!</h1>
          <p className="mb-8 leading-relaxed">것은 더운지라 대고, 만물은 붙잡아 노래하며 같이, 대한 얼음이 보라. 장식하는 인류의 위하여 붙잡아 이상 사막이다. 품었기 가지에 노래하며 커다란 보라. 더운지라 인도하겠다는 온갖 무엇을 쓸쓸하랴? 행복스럽고 소담스러운 힘차게 가진 이상이 그들의 심장은 아름다우냐? 인생에 이상은 눈이 그리하였는가? 공자는 되는 맺어, 별과 이상이 얼마나 그들의 이상은 것은 것이다. 그들의 그들은 살았으며, 쓸쓸하랴? 든 놀이 하였으며, 살 철환하였는가? 얼마나 몸이 이상을 칼이다. 가치를 싹이 끓는 원질이 부패를 위하여 거선의 것이다.</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Tech Blog</button>
            {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
        </div>
      </div>
    </section>
  );
}

export default Page
