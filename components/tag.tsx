import React from 'react';

const Tag = ({ children }) => {
  return (
    <div className="border-solid border rounded-lg border-indigo-300 py-1.5 text-center text-xs overflow-hidden">
      {children}
    </div>
  );
}

export default Tag;
