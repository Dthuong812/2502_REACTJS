import React from "react";

const FormInput = ({ label, name, placeholder, type, value, onChange, error }) => {
  return (
    <div className="mb-3 form-group">
      <label className="block mb-2 font-bold">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-3 py-2 border ${error ? "border-red-500" : "border-gray-300"} rounded`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FormInput;