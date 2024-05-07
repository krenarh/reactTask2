import React from "react";

const Slot = ({ value, spinning }) => {
  return (
    <div className="relative border-4 border-black w-40 h-40 flex items-center justify-center bg-gray-200 m-3">
      <div className=" w-full h-full flex items-center justify-center">
        <span className="text-7xl self-center font-bold">
          {spinning ? "O" : value}
        </span>
      </div>
    </div>
  );
};

export default Slot;
