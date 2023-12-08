import React, { useState } from "react";

function Panel({
  title = "",
  itemsNumber,
  items = [],
  clickedImage = null,
  setClickedImage = () => {}
}) {
  if (items.length === 0) return;

  const handleImageClick = (item) => {
    setClickedImage(item);
    // Add your logic to handle the click event
  };
  return (
    <div className="rounded-xl mx-8 my-4">
      <div className="width-full rounded-t-xl bg-[#eab877]">
        <h2 className="py-1 text-center text-2xl text-[#503b5c] font-extrabold">
          {title}
        </h2>
      </div>
      <div
        className={`border-[#eab877]
    border-2 border-t-0 rounded-t-none 
    rounded-xl grid ${
      itemsNumber === 5 ? 'grid-cols-5' : 'grid-cols-2'
    }  justify-center`}
      >
        {items &&
          items.map((item, id , index) => {
            return (
              <div
                key={id}
                className="m-2 h-25 flex flex-col items-center justify-center"
              >
                <a href="#" onClick={() => handleImageClick(item.id)}>
                  <img
                    alt="Images"
                    src={item.image}
                    className={`h-16 w-16 rounded-full cursor-pointer ${
                      clickedImage === item.id ? "filter brightness-75" : ""
                    }`}
                  />
                </a>
                <p className="text-white text-xs p-2">{item.type}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Panel;
