import React from "react";
import { Input } from "antd";
import "./InputComponent.css";

interface InputComponentProps {
  placeholder?: string;
}

const InputComponent: React.FC<InputComponentProps> = ({ placeholder }) => {
  const onSearch = (value: string) => {
    console.log("Search text:", value);
  };

  return (
    <Input.Search
      placeholder={placeholder || ""}
      onSearch={onSearch}
      style={{ width: 200,
        border: "none",
        borderRadius: 0,
        borderBottom: "1px solid #ccc",
        boxShadow: "none"
       }}
    />
  );
};

export default InputComponent;
