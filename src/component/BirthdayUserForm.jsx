import React, { useEffect, useState } from "react";
import { Header, CustomInput, CustomSelect } from "./index";
import HeroSection from "./modal/HeroSection";
import { genderOptions } from "./utils/collections";
import { validateAge, validateFullName } from "./utils/validation";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "./UserDetailContext";

function BirthdayUserForm() {
  const navigate = useNavigate();
  const {
    updateGender,
    updateSequenceStep,
    updateBirthdayBoyName,
    isLoggedIn,
  } = useMyContext();
  const [birthdayUserName, setBirthdayUserName] = useState("");
  const [birthdayUserAge, setBirthdayUserAge] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (
      !validateFullName(birthdayUserName) ||
      !validateAge(birthdayUserAge) ||
      !selectedGender
    ) {
      return alert("Please enter valid name, age, and select a gender");
    } else {
      updateGender(selectedGender);
      updateBirthdayBoyName(birthdayUserName);
      updateSequenceStep(3);
      navigate("/song-selection");
    }
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, []);

  return (
    <div className="">
      <Header progress={"/progress bar2.png"} />

      <div>
        <div className="absolute left-0 right-0">
          <div
            className="absolute left-0"
            style={{ top: "150px", left: "22px" }}
          >
            <img src={"/2_Asset 1.png"} alt="glitter" width={50} height={50} />
          </div>
          <div
            className="absolute right-10 -top-50"
            style={{ right: "60px", top: "157px" }}
          >
            <img src={"/Balloon.png"} alt="Balloon" width={40} height={40} />
          </div>
        </div>
        <HeroSection
          source="/4_Cap&Gift.png"
          alt_name="landing picture2"
          sectionPara="Tell us about your loved one..."
        />
        <form className="flex flex-col" onSubmit={handleSubmitForm}>
          <CustomInput
            placeholder="***** ************"
            showLabel={true}
            label={"Their Name"}
            type="password"
            value={birthdayUserName}
            onChange={(e) => setBirthdayUserName(e.target.value)}
          />
          <CustomInput
            placeholder="Enter the age"
            showLabel={true}
            label={"How old they'll be this birthday"}
            type="number"
            value={birthdayUserAge}
            onChange={(e) => setBirthdayUserAge(e.target.value)}
          />
          <CustomSelect
            placeholder="Email ID"
            showLabel={true}
            label="Gender"
            options={genderOptions}
            value={selectedGender}
            onChange={(e) => setSelectedGender(e.target.value)}
          />

          <button
            type="submit"
            className="bg-yellow-500 py-3 text-white font-extrabold rounded-2xl mx-20 my-8"
            style={{
              maxWidth: "123px",
              alignSelf: "center",
              padding: "9px 29px",
            }}
          >
            Proceed
          </button>
          <div className="absolute left-0 right-0">
            <div
              className="absolute left-0"
              style={{ bottom: "-440px", left: "64px" }}
            >
              <img
                src={"/2_Purple tone.png"}
                alt="music"
                width={50}
                height={50}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BirthdayUserForm;
