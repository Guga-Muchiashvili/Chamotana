"use client";
import Image from "next/image";
import { Controller } from "react-hook-form";
import { useState } from "react";
import { MenuItem, Select } from "@mui/material";

const DropDownElementCountry = ({ control, id, data }: any) => {
  const [selectedItem, setSelectedItem] = useState<null | any>(null);

  const handleChange = (value: any) => {
    const item = data.find((item: any) => item.name === value);
    setSelectedItem(item);
  };

  return (
    <div className="flex items-center h-full w-1/4 relative ">
      <Controller
        control={control}
        name={id}
        render={({ field: { onChange, value, ref, name, onBlur } }) => {
          return (
            <Select
              className="w-full h-full"
              value={value !== undefined ? value : ''}
              defaultValue={"Select Country"}
              name={id}
              id={id}
              label={id}
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
