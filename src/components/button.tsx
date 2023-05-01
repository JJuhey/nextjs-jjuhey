import React from 'react';

type PropsType = {
  children: React.ReactNode
  className?: string
  href?: string
}

const Button = ({ children, className, href }: PropsType) => {
  return (
    <button className={`inline-flex items-center bg-indigo-700 border-0 rounded-lg text-gray-100 ${className}`}>
      <a href={href}>{children}</a>
    </button>
  );
}

export default Button;
