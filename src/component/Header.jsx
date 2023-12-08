import React from "react";

function Header({ progress=""}) {
  return (
    <>
      <div className="bg-[#282c9b] h-[100px] flex justify-between">
        <div className="flex justify-start items-start">
          <div>
            <img
              src={"../../public/2_Cadbury Logo.png"}
              alt="Cadbury Logo"
              width="137px"
              height="54px"
              style={{
                maxHeight: "100%",
              }}
            />
          </div>
          <div>
            <img
              src={"../../public/2_2d logo.png"}
              alt="hash_birthday_image"
              width="261px"
              height="127px"
            />
          </div>
        </div>
        <div>
          <img src={"../../public/2_Hamburger.png"} alt="Hamburger" />
        </div>
      </div>
      <div className="">
        <img className="progress_container" src={progress} alt="progress_dot" />
      </div>
    </>
  );
}

export default Header;
