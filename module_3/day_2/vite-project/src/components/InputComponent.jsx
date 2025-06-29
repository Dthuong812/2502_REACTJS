import React from "react";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/slice/searchSlice";
import { useNavigate } from "react-router-dom";

const InputComponent = ({ placeholder = "Tìm kiếm..." }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSearch = (value) => {
    const trimmed = value.trim();
    if (trimmed) {
      dispatch(setSearchTerm(trimmed)); 
      navigate("/menu"); 
    }
  };

  return (
    <Input.Search
      placeholder={placeholder}
      onSearch={onSearch}
      className="!w-[200px] !rounded-full !border-none !shadow-none"
    />
  );
};

export default InputComponent;
