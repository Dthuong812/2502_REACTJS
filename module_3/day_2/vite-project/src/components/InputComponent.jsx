import React from "react";
import { Input } from "antd";
import { useSearch } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";

const InputComponent = ({ placeholder }) => {
  const { setSearchTerm } = useSearch();
  const navigate = useNavigate();

  const onSearch = (value) => {
    const trimmed = value.trim();
    setSearchTerm(trimmed);
    navigate("/menu");
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