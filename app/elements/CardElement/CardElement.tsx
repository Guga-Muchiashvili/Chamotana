"use client";
import Image from "next/image";
import React from "react";
import usa2 from "../../../public/usa2.png";
import { CardDisplays } from "@/data";

const CardElement = ({ item } : {item : ICompany}) => {
  return (
    <div
      className="w-full relative md:p-0 flex-row h-fit px-6 py-3 pb-12  md:pr-24 md:pb-0 flex md:flex-col md:h-64 bg-gray-100 rounded-xl text-sm overflow-hidden"
      style={{ boxShadow: "2px 2px 5px 1px gray" }}
    >
      <div className="w-full flex-col gap-5 pr-4 md:p-0 md:flex-row h-full items-start md:h-2/6 justify-center md:items-center flex border-r-[2px] md:border-r-0 md:border-b-[2px] border-[#68A0AF]">
        {CardDisplays.map((item, i) => (
          <div
            key={item}
            className={`${i == 0 ? 'h-36 flex items-center md:text-center md:justify-center p-0 md:pl-1 w-full md:w-1/6 md:h-full' : "w-full md:w-1/6 items-end"}  text-[#175565] text-start md:text-center text-sm md:text-lg font-semibold font-sans`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="w-full h-4/6 md:p-0 gap-5 md:flex-row pl-4 flex flex-col items-start">
        <Image
          className="h-36 md:h-full md:w-1/6 rounded-md md:rounded-none"
          src={usa2.src}
          width={400}
          height={400}
          alt="usa2"
        />
        {item?.services.map((item) => (
          <>
            <div key={item.id} className="md:w-1/6  justify-center items-start md:items-center font-normal opacity-90 text-sm md:text-xl text-[#1C1C1C] text-center h-full flex">
              <h2>{item.country}</h2>
            </div>
            <div className="md:w-1/6  justify-center items-start md:items-center font-normal opacity-90 md:text-xl text-sm text-[#1C1C1C] text-center h-full flex">
              <h2>{item.methods[0]?.method ? item.methods[0]?.method : "უცნობი"}</h2>
            </div>
            <div className="md:w-1/6  justify-center items-center font-normal opacity-90 md:text-xl text-sm text-[#1C1C1C] text-center h-full flex">
              <h2>უფასო</h2>
            </div>
            <div className="md:w-1/6  justify-center items-center font-normal opacity-90 md:text-xl text-sm text-[#1C1C1C] text-center h-full flex">
              <h2>{item?.methods[0]?.price ? item?.methods[0]?.price  + "$" : 'უცნობი'}</h2>
            </div>
            <div className="md:w-1/6  justify-center items-center font-normal opacity-90 md:text-xl text-sm text-[#1C1C1C] text-center h-full flex">
              <h2>{item.methods[0]?.delay} Days</h2>
            </div>
          </>
        ))}
      </div>
      <button className="w-full bg-[#1FADD5] text-white rounded-2xl h-7 md:rounded-none absolute bottom-0 left-0 md:left-auto md:right-0 md:w-1/12 md:h-full">
      ნახე საიტი</button>
    </div>
  );
};

export default React.memo(CardElement);
