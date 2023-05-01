import React from 'react';

const Tag = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`border-solid border rounded-lg border-indigo-300 text-center text-xs overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

export default Tag;
