import React from "react";

function CustomInput({
  classname = "",
  placeholder = "",
  value = {},
  onChange = () => {},
}) {
  return (
    <>
      <input
        placeholder={placeholder}
        className={`mx-10 my-1 p-3 px-6 rounded-full ${classname}`}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default CustomInput;
