"use client";
import React, { useEffect, useState } from "react";
import { IoFilterSharp } from "react-icons/io5";

const ToggleElement = ({getSort} : any) => {
  const [showModal, setShowModal] = useState(false);
  const handleToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="flex items-center relative mr-6">
      <IoFilterSharp className="cursor-pointer" onClick={handleToggle} />
      {showModal && (
        <div className="absolute top-5 right-3 justify-around  p-1 gap-2 text-black font-bold w-fit rounded-lg flex flex-col h-20 items-start bg-white border-[1px] border-black">
          <h2
          onClick={() => {
            getSort('time')
            handleToggle()
        }}
            className="
                inline-block
                whitespace-nowrap
                hover:bg-white 
                hover:bg-opacity-70 
                hover:text-black 
                rounded-full 
                h-1/2 
                items-center 
                justify-center 
                duration-500 
                ease-in 
                cursor-pointer 
                px-4  /* Optional: Add padding to adjust width and make the button look better */
                text-center
                ">
            Filter By time
          </h2>
          <h2
          onClick={() => {
            handleToggle()
            getSort('price')
        }}
            className="
                inline-block
                whitespace-nowrap
                hover:bg-white 
                hover:bg-opacity-70 
                hover:text-black 
                rounded-full 
                h-1/2 
                items-center 
                justify-center 
                duration-500 
                ease-in 
                cursor-pointer 
                px-4  /* Optional: Add padding to adjust width and make the button look better */
                text-center
                ">
            Filter By $
          </h2>{" "}
        </div>
      )}
    </div>
  );
};

export default ToggleElement;
