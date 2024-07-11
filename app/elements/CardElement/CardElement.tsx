"use client";
import Image from "next/image";
import React from "react";
import usa2 from "../../../public/usa2.png";
import { CardDisplays } from "@/data";

const CardElement = ({ item }: any) => {
  console.log(
    "ms",
    item.services[0].methods.map((item: any) => console.log(item))
  );
  return (
    <div
      className="w-full flex flex-col h-60 bg-gray-100 rounded-2xl text-sm overflow-hidden"
      style={{ boxShadow: "2px 2px 5px 1px gray" }}
    >
      <div className="w-full h-2/6 justify-center items-center flex border-b-[2px] border-[#68A0AF]">
        {CardDisplays.map((item) => (
          <div
            key={item}
            className="w-1/6 text-[#175565] text-center text-2xl font-semibold font-sans"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="w-full h-4/6 flex">
        <Image
          className="h-full w-1/6"
          src={usa2.src}
          width={400}
          height={400}
          alt="usa2"
        />
        {item.services.map((item: any) => (
          <>
            <div className="w-1/6  justify-center items-center font-bold text-3xl text-green-600 text-center h-full flex">
              <h2>{item.country}</h2>
            </div>
            <div className="w-1/6  justify-center items-center font-bold text-3xl text-green-600 text-center h-full flex">
              <h2>{item.methods[0].method}</h2>
            </div>
            <div className="w-1/6  justify-center items-center font-bold text-3xl text-green-600 text-center h-full flex">
              <h2>უფასო</h2>
            </div>
            <div className="w-1/6  justify-center items-center font-bold text-3xl text-green-600 text-center h-full flex">
              <h2>{item.methods[0].price} $</h2>
            </div>
            <div className="w-1/6  justify-center items-center font-bold text-3xl text-green-600 text-center h-full flex">
              <h2>{item.methods[0].delay} Days</h2>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default CardElement;
