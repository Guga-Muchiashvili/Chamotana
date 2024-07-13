"use client";
import { Controller } from "react-hook-form";
import { Select, MenuItem, InputLabel } from "@mui/material";

const DropDownElementMethod = ({ control, id, data, placeholder }: any) => {
  return (
    <div className="flex items-center h-full w-1/2 md:w-1/3  relative">
      <Controller
        control={control}
        name={id}
        render={({ field: { onChange, value, ref, name, onBlur } }) => {
          return (
            <>
              <Select
                labelId="demo-simple-select-standard-label"
                className="w-full h-full outline-none border-[0.4px] rounded-r-full  border-[#4FC0E0]"
                value={value !== undefined ? value : ''}
                name={id}
                id={id}
                onChange={(e) => onChange(e.target.value)}
              >
                {data.map((item: any) => (
                  <MenuItem value={item} key={item}>{item}</MenuItem>
                ))}
              </Select>
            </>
          );
        }}
      />
    </div>
  );
};

export default DropDownElementMethod;
