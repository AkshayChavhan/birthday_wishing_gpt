import React from "react";

function HeroSection({
  source = "../../public/2_Celebrations(Bg).png",
  alt_name = "landing picture",
  sectionPara 
}) {
  return (
    <div className="register_items">
      <div className="crop_div">
        {sectionPara &&  <h2 className="text-center text-white text-xl font-bold p-4">{sectionPara}</h2>}
        <img className="image_center" src={source} alt={alt_name} />
      </div>
    </div>
  );
}

export default HeroSection;
