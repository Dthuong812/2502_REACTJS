import React from "react";
import { Input } from "antd";
// import { useSearch } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const InputComponent = ({ placeholder }) => {
  // const { setSearchTerm } = useSearch();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onSearch = (value) => {
    const trimmed = value.trim();
    dispatch({ type: "SET_SEARCH_TERM", payload: trimmed });
    // setSearchTerm(trimmed);
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