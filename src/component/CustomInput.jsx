import React from "react";

function CustomInput({
  classname = "",
  placeholder = "",
  value = {},
  onChange = () => {},
  showLabel = false,
  label = "Name",
  type = "text",
}) {
  return (
    <>
      {showLabel && label !== "" ? (
        <div
          className="flex flex-col text-center"
          style={{ maxWidth: "500px", alignSelf: "center" }}
        >
          <h2 className="text-center text-white text-xl font-bold p-1">
            {label}
          </h2>
          <input
            placeholder={placeholder}
            className={`mx-10 my-1 p-3 px-6 rounded-full ${classname}`}
            value={value}
            onChange={onChange}
            type={type}
          />
        </div>
      ) : (
        <input
          placeholder={placeholder}
          className={`mx-10 my-1 p-3 px-6 rounded-full ${classname}`}
          value={value}
          onChange={onChange}
          type={type}
          style={{ maxWidth: "500px", alignSelf: "center" }}
        />
      )}
    </>
  );
}

export default CustomInput;
