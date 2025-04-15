import React from 'react';

import Button from '@components/button';
import Tag from '@components/tag';
import IntroCard from '@components/card/introCard';

const Page = () => {
  const skills = ['JavaScript', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'React', 'Redux', 'Next.js', 'tailwindCSS', 'github', 'AWS', 'GCP', 'Java', 'Oracle', 'HTML', 'CSS']
  return (
    <>
      <section className="bg-gradient-to-b from-black to-indigo-600 text-gray-100 overflow-hidden">
        <div className="container mx-auto md:max-w-5xl pb-10 pt-10 px-5 md:pd-0 md:overflow-visible overflow-hidden">
          <div className="text-lg font-bold md:text-4xl">
            <div className="md:pb-5">Hello,</div>
            <div className="md:pb-5 font-extrabold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                개발자 쭈헤이
              </span>
            </div>
            <div className="pb-5">공간에 놀러오신걸 환영합니다.</div>
          </div>
          <div className="flex flex-row-reverse">
            {/* <Button className="mr-2 py-4 px-5 md:py-3 md:px-6 text-sm md:text-lg" href="https://youtube.com/@jjuhey">Youtube</Button> */}
          </div>
          <div className="flex flex-row mt-10 animate-[lin1_10s_linear_infinite] -ml-[200px]">
            {skills.map(s => <Tag key={`${s}-1`} className="py-1.5 min-w-[80px] mr-3">{s}</Tag>)}
          </div>
          <div className="flex flex-row mt-5 animate-[lin2_10s_linear_infinite] -ml-[500px]">
            {skills.map(s => <Tag key={`${s}-2`} className="py-1.5 min-w-[80px] mr-3">{s}</Tag>)}
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="container mx-auto max-w-5xl py-10">
          <div className="flex flex-col items-end pb-5 px-5">
            <div className="text-sm text-indigo-700">저의 이야기가 궁금하신가요?</div>
            <div className="text-2xl font-bold text-black text-right">현직 개발자이자 유튜브 채널을 운영하고 있는 쭈헤이입니다.</div>
            <div className="text-2xl font-bold text-black text-right">제 이야기 궁금하신가요?</div>
          </div>
          <div className="grid md:grid-cols-3 md:gap-10 grid-cols-1 px-5">
            <IntroCard
              title1="그냥 개발이 좋아서"
              title2="시작한 개발자"
              contents="대학때 배운 C언어 수업이 기억에 남을 정도로 좋았어요. 개발자 국비과정을 들으면서 '내 길이구나'하고 깨닫게 되었어요."
            />
            <IntroCard
              title1="이 세상에 하고 싶은게"
              title2="너무 많으니까"
              icon="🛠"
              contents="하고싶은게 너무 많고, 시간은 너무 없었어요. 그래서 하고 싶은거 일단 다 하고 있죠. 유튜브도 그 중에 하나에요. 아직 개발만큼 좋고 재밌는걸 찾진 못했어요."
            />
            <IntroCard
              title1="가장 중요한건"
              title2="눈에 보이지 않는다."
              icon="👀"
              contents="세상에는 많은 눈에 보이는 귀중한 것이 많지만, 가장 중요한 것은 눈에 보이지 않죠. 몰입의 순간이 제 인생에 있어서 개발자로 살아가는 가장 값진 순간이에요."
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Page
