"use client";
import Image from "next/image";
import { Controller } from "react-hook-form";
import { useState } from "react";

const TextInputElement = ({ control, id, placeholder }: {control : any, id : string, placeholder : string}) => {
  return (
    <div className="flex items-center h-full w-1/5 relative bg-red-500">
      <Controller
        control={control}
        name={id}
        render={({ field: { onChange, value, ref, name, onBlur } }) => {
          return (
            <input
              className="h-full text-xl font-normal cursor-pointer w-full rounded-sm  border-[0.1px] border-green-600 outline-none px-6"
              name={id}
              value={value || ''}
              type="number"
              placeholder={placeholder}
              onChange={(e) => {
                onChange(e.target.value);
              }}
              ref={ref}
              onBlur={onBlur}
            ></input>
          );
        }}
      />
    </div>
  );
};

export default TextInputElement;
