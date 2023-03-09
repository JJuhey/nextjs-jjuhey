import React from 'react';

type PropsType = {
  title1: string;
  title2: string;
  icon?: string;
  contents: React.ReactNode;
}

const IntroCard = ({ title1, title2, icon, contents }: PropsType) => {
  return (
    <div className="min-w-xl bg-slate-50 p-4 rounded-lg my-2">
      <div className="rounded-full w-16 h-16 flex items-center">
        <div className="flex-1 text-center text-3xl">{icon ?? '👩🏻‍💻'}</div>
      </div>
      <div className="py-5">
        <div className="font-bold text-xl">{title1}</div>
        <div className="font-bold text-xl">{title2}</div>
        <div className="text-sm pt-2">{contents}</div>
      </div>
    </div>
  );
}

export default IntroCard;
