import React, { useState } from "react";
import Header from "./Header";
import CustomInput from "./CustomInput";
import HeroSection from "./modal/HeroSection";
import CustomSelect from "./CustomSelect";
import { genderOptions } from "./utils/collections";
import { validateAge, validateFullName } from "./utils/validation";
import { useNavigate } from "react-router-dom";

function BirthdayUserForm() {
  const navigate = useNavigate();
  const [birthdayUserName, setBirthdayUserName] = useState("");
  const [birthdayUserAge, setBirthdayUserAge] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  const handleSubmitForm = () => {
    if(!validateFullName(birthdayUserName) || !validateAge(birthdayUserAge)){
      alert("Please enter valid name and age");
    }else{
      navigate("/song-selection")
    }
  };
  

  return (
    <div className="">
      <Header progress={"../../public/progress bar2.png"} />

      <div>
        <HeroSection
          source="../../public/4_Cap&Gift.png"
          alt_name="landing picture2"
          sectionPara="Tell us about your loved one..."
        />
        <form
          className="flex flex-col"
          onSubmit={handleSubmitForm}
        >
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
