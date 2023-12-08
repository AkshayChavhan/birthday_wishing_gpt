import React, { useEffect, useState } from "react";
import HeroSection from "./modal/HeroSection";
import { Header, Panel } from "./index";
import { Genre, Mood, SingerType } from "./utils/collections";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "./UserDetailContext";

function SongSelectionForm() {
  const navigate = useNavigate();
  const { updateSequenceStep , updateMusicType , isLoggedIn } = useMyContext();

  const [panel1ClickedImage, setPanel1ClickedImage] = useState(null);
  const [panel2ClickedImage, setPanel2ClickedImage] = useState(null);
  const [panel3ClickedImage, setPanel3ClickedImage] = useState(null);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      if (!panel1ClickedImage || !panel2ClickedImage || !panel3ClickedImage) {
        return alert("Please select all three images");
      }
      if(panel2ClickedImage === 6){
        updateMusicType('rap')
      }else if(panel2ClickedImage === 7){
        updateMusicType('rock')
      }else if(panel2ClickedImage === 8){
        updateMusicType('pop')
      }else if(panel2ClickedImage === 9){
        updateMusicType('desi')
      }else if(panel2ClickedImage === 10){
        updateMusicType('EDM')
      }

      updateSequenceStep(4);
      alert(`${panel1ClickedImage}, ${panel2ClickedImage}, ${panel3ClickedImage}`);
      navigate("/get-lyrics")
    } catch (error) {
      console.error("Error fetching lyrics:", error.message);
    }
  };

  useEffect(()=>{
    if(!isLoggedIn){
      navigate("/");
    }
  },[])
  return (
    <div className="">
      <Header progress={"/progress bar3.png"} />

      <div>
        <HeroSection
          source="/5_Headphone.png"
          alt_name="landing picture2"
          sectionPara="What would you like their song's vibe to be?"
        />
        <form className="flex flex-col" onSubmit={handleSubmitForm}>
          <Panel
            title="Mood"
            itemsNumber={5}
            items={Mood}
            clickedImage={panel1ClickedImage}
            setClickedImage={setPanel1ClickedImage}
          />
          <Panel
            title="Genre"
            itemsNumber={5}
            items={Genre}
            clickedImage={panel2ClickedImage}
            setClickedImage={setPanel2ClickedImage}
          />
          <Panel
            title="Singer's Voice"
            itemsNumber={2}
            items={SingerType}
            clickedImage={panel3ClickedImage}
            setClickedImage={setPanel3ClickedImage}
          />
          <button
            type="submit"
            className="bg-yellow-500 py-3 text-white font-extrabold rounded-2xl mx-20 my-8"
          >
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
}

export default SongSelectionForm;
