"use client";
import { Controller } from "react-hook-form";
import { Select, MenuItem, InputLabel } from "@mui/material";

const DropDownElementMethod = ({ control, id, data, placeholder }: any) => {
  return (
    <div className="flex items-center h-full w-1/4 relative">
      <Controller
        control={control}
        name={id}
        render={({ field: { onChange, value, ref, name, onBlur } }) => {
          return (
            <>
              <Select
                labelId="demo-simple-select-standard-label"
                className="w-full h-full"
                value={value !== undefined ? value : ''}
                name={id}
                id={id}
                label={id}
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
