import { statusFormatter } from "@/utils/statusFormatter";
import { MenuItem, Select } from "@mui/material";
import React from "react";
interface CustomSelectProps {
  list: string[];
  onChange: any;
  value: string;
}
function CustomSelect({ list, onChange, value }: CustomSelectProps) {
  return (
    <select
      name="select"
      onChange={onChange}
      value={value}
      className="mr-5 cursor-pointer rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none xs:w-full md:w-auto"
    >
      {list.map((item, index) => {
        return (
          <option style={{ marginBottom: 10 }} value={item}>
            {statusFormatter(item)}
          </option>
        );
      })}
      <option className="cursor-pointer" value={"all"}>
        Ver todos
      </option>
    </select>
  );
}
{
  /* <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={value}
      label="Age"
      onChange={onChange}
      style={{
        color: "white",
        border: "1px solid gray",
        backgroundColor: "primary",
      }}
    >
      
      {list.map((item, index) => {
        return (
          <MenuItem value={item} key={item}>
            {item}
          </MenuItem>
        );
      })}
    </Select> */
}
export default CustomSelect;
