"use client";
import Image from "next/image";
import React, { useState } from "react";
import georgiaFlag from "../../public/georgia_flag.png";
import FormComponent from "../components/FormComponent/FormComponent";
import data from "@/data";
import CardElement from "../elements/CardElement/CardElement";
import temp from "../../public/tempa.png";

const MainPage = () => {
  return (
    <div className="w-full min-h-screen ">
      <div className="w-full h-20 bg-white flex items-center px-16">
        <h1 className="text-[#1FADD5] font-semibold text-3xl">Gzavnilebi.ge</h1>
      </div>
      <div className="w-full h-[617px]">
        <h1 className="absolute left-20 leading-[70px]  text-[#175565] text-5xl font-normal top-1/2 translate-y-[-100%] w-1/2">
          მიიღე გზავნილები მარტივად და უსაფრთხოდ
        </h1>
        <Image
          src={temp.src}
          width={4100}
          height={4100}
          alt="background"
          className="w-full h-full"
        ></Image>
      </div>
      <div className=" px-4 md:px-20">
        <div className="py-16">
          <FormComponent />
        </div>
        <div className="w-full h-fit flex flex-col gap-12">
        {data.map((item) => (
          <CardElement item={item} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
