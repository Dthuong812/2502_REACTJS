import React from "react";
import { Input } from "antd";

const InputComponent = ({ placeholder }) => {
  const onSearch = (value) => {
    console.log("Search text:", value);
  };

  return (
    <Input.Search
      placeholder={placeholder || ""}
      onSearch={onSearch}
      className="!w-[200px] !rounded-full !border-none !shadow-none"
    />
  );
};

export default InputComponent;
