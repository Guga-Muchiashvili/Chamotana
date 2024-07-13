"use client";
import Image from "next/image";
import { Controller } from "react-hook-form";
import { useState } from "react";
import { MenuItem, Select } from "@mui/material";

const DropDownElementCountry = ({ control, id, data }: {control : any, id : string, data : ImageData[]}) => {
  const [selectedItem, setSelectedItem] = useState<any | undefined>({
    img: {
      blurHeight: 0,
      blurWidth: 0,
      height: 480,
      src: "/_next/static/media/china.7fd9bbb9.svg",
      width: 640
  },
    name: "China"
});

console.log(selectedItem)

  console.log(selectedItem)
  const handleChange = (value: string) => {
    const item = data.find((item) => item.name === value);
    setSelectedItem(item);
  };

  return (
    <div className="flex items-center h-full w-1/2 md:w-1/3 relative ">
      <Controller
        control={control}
        name={id}
        render={({ field: { onChange, value, ref, name, onBlur } }) => {
          return (
            <Select
              className="w-full h-full outline-none rounded-l-full border-[0.4px] rounded-none border-[#4FC0E0]"
              value={value !== undefined ? value : ''}
              defaultValue={"Select Country"}
              name={id}
              id={id}
              onChange={(e) => {
                onChange(e.target.value)
                handleChange(e.target.value)
              }
              }
            >
              {data.map((item: any) => (
                <MenuItem value={item.name} key={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          );
        }}
      />
      {selectedItem && (
        <div className="ml-4 absolute right-8">
          <Image width={30} height={30} alt="icon" src={selectedItem?.img.src} />
        </div>
      )}
    </div>
  );
};

export default DropDownElementCountry;
