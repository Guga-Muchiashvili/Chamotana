"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import georgiaFlag from "../../public/georgia_flag.png";
import FormComponent from "../components/FormComponent/FormComponent";
import data from "@/data";
import CardElement from "../elements/CardElement/CardElement";
import temp from "../../public/tempa.png";
import { IoFilterSharp } from "react-icons/io5";
import ToggleElement from "../elements/toggleElement/ToggleElement";

const MainPage = () => {
  const [datas, setData] = useState<any[]>(data);
  const [sortType, setsortType] = useState('');
  const [method, setMethod] = useState('AIR');

  const getData = (newData: any[], newMethod: string) => {
    setMethod(newMethod);

    const filteredData = newData?.filter((item) =>
      item.services[0].methods.some((m: any) => m.method === newMethod)
    );

    setData(filteredData);
  };

  useEffect(() => {
    console.log(datas);
    let sortedData = [...datas]; // Clone the array to avoid mutating the state directly

    if (sortType === 'time') {
      sortedData.sort((a, b) => {
        const aDelay = a.services[0].methods[0].delay;
        const bDelay = b.services[0].methods[0].delay;
        return aDelay - bDelay;
      });
    } else if (sortType === 'price') {
      sortedData.sort((a, b) => {
        const aPrice = a.services[0].methods[0].price;
        const bPrice = b.services[0].methods[0].price;
        return aPrice - bPrice;
      });
      setData(sortedData);
    } else if (sortType === 'price') {
      sortedData.sort((a, b) => {
        const aPrice = a.services[0].methods[0].price;
        const bPrice = b.services[0].methods[0].price;
        return aPrice - bPrice;
      });
    }
    setData(sortedData);
  }, [sortType]);

  useEffect(() => {
    if (method) {
      setData((prevData) =>
        prevData?.filter((item) =>
          item.services[0].methods.some((m: any) => m.method === method)
        )
      );
      setsortType('')
    }
  }, [method]);

  const getSortType = (type: string) => {
    setsortType(type);
  };

  return (
    <div className="w-full min-h-screen">
      <div className="w-full h-20 bg-white flex items-center px-16">
        <h1 className="text-[#1FADD5] font-semibold text-3xl">Gzavnilebi.ge</h1>
      </div>
      <div className="w-full h-[617px] relative">
        <h1 className="absolute left-20 leading-[70px] text-[#175565] text-5xl font-normal top-1/2 translate-y-[-100%] w-1/2">
          მიიღე გზავნილები მარტივად და უსაფრთხოდ
        </h1>
        <Image
          src={temp.src}
          width={4100}
          height={4100}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-4 md:px-20 flex flex-col items-end">
        <div className="py-16 w-full">
          <FormComponent getData={getData} />
        </div>
        <div className="w-full h-5 flex items-center gap-2 text-xl justify-end font-bold">
          <ToggleElement getSort={getSortType} />
        </div>
        <div className="w-full h-fit flex flex-col gap-12 py-16">
          {datas?.map((item, index) => (
            <CardElement key={index} item={item || {}} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
