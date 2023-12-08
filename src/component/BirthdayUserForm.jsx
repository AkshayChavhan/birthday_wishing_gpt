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

  const handleSubmitForm = () => {
    if (
      !validateFullName(birthdayUserName) ||
      !validateAge(birthdayUserAge) ||
      !selectedGender
    ) {
      alert("Please enter valid name, age, and select a gender");
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
          >
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
}

export default BirthdayUserForm;
