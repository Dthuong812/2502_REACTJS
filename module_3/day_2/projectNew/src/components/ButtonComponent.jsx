import React from 'react';

const ButtonComponent = ({ children, className ,onClick}) => {
  return (
    <button
      className={`px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;