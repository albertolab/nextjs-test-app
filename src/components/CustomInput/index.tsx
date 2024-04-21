"use client";
import React from "react";
interface CustomInputProps {
  type: string;
  onChange: any;
  name: string;
  placeholder: string;
}

function CustomInput({ type, name, onChange, placeholder }: CustomInputProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className=" rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
    />
  );
}

export default CustomInput;
