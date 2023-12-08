import React from "react";

function Header({ progress = "" }) {
  return (
    <>
      <div className="bg-[#42006dc4] h-[100px] flex justify-between items-center p-2">
        <div className="flex items-center">
          <div>
            <img
              src={"/2_Cadbury Logo.png"}
              alt="Cadbury Logo"
              width="80"
              height="50px"
              style={{
                maxHeight: "100%",
              }}
            />
          </div>
          <div className="ml-4">
            <img
              src={"/2_2d logo.png"}
              alt="hash_birthday_image"
              width="200px"
              height="127px"
            />
          </div>
        </div>
        <div>
          <img src={"/2_Hamburger.png"} alt="Hamburger" className="w-6 h-6" />
        </div>
      </div>
      <div className="">
        <img className="progress_container" src={progress} alt="progress_dot" />
      </div>
    </>
  );
}

export default Header;
