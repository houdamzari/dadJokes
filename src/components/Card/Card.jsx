import React from 'react';
function Card({ children }) {

  return (
    <div className="bg-white min-w-1/2 h-fit p-4 rounded-lg w-[430px] h-48">
      {children}
    </div>
  );
}

export default Card;