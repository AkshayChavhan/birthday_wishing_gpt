import React, { useEffect, useState } from "react";
import Header from "./Header";
import HeroSection from "./modal/HeroSection";
import { useMyContext } from "./UserDetailContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LyricsPanel() {
  const { gender, bname , musicType } = useMyContext();
  const navigation = useNavigate()
  const [isLoading, setIsLoading] = useState(true);
  const [lyrics, setLyrics] = useState("");

  const getBirthdayLyrics = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/generate-lyrics",
        {
          bname,
          gender,
          musicType
        }
      );
      setLyrics(response.data.lyrics);
    } catch (error) {
      console.error("Error fetching lyrics:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if(!bname || !gender || !musicType) return navigation('/')
    getBirthdayLyrics();
  }, [gender, name]);

  return (
    <div className="">
      <Header progress={"/progress bar4.png"} />

      <div>
        <HeroSection
          sectionPara={
            isLoading
              ? "Your songs lyric's are loading..."
              : "Your songs lyrics's are ready!"
          }
        />
        <div
          className="bg-white h-min-[70vh] h-[70vh]
        m-10 rounded-3xl p-10"
        >
          <div className="p-6">
            <p className=" text-center">{lyrics}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LyricsPanel;
