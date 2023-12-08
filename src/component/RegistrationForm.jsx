import React, { useState } from "react";
import CustomInput from "./CustomInput";
import {
  validateEmail,
  validateFullName,
  validatePhoneNumber,
} from "./utils/validation";
import CustomModal from "./modal/CustomModal";
import Header from "./Header";
import HeroSection from "./modal/HeroSection";

function RegistrationForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullname, setFullname] = useState("");
  const [emailId, setEmailId] = useState("");
  const [selectedTermCondition, setSelectedTermCondition] = useState(false);
  const [receiveCommunication, setReceiveCommunication] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (
      validatePhoneNumber(phoneNumber) &&
      validateFullName(fullname) &&
      validateEmail(emailId)
    ) {
      setOpen(true);
      setPhoneNumber("");
      setFullname("");
      setEmailId("");
      setSelectedTermCondition(false);
      setReceiveCommunication(false);
    } else {
      setOpen(false);
      alert("Please fill in the form correctly.");
    }
  };

  const handleOptionChange = (event, option) => {
    console.log(option, event);
    if (option === 1) {
      setSelectedTermCondition(event);
    } else {
      setReceiveCommunication(event);
    }
  };

  return (
    <div className="">
      <Header progress={"../../public/progress bar1.png"} />
      <div>
        <HeroSection
          source={"../../public/2_Celebrations(Bg).png"}
          alt_name="landing picture"
        />

        <form className="flex flex-col" onSubmit={handleSubmitForm}>
          <h2 className="text-center text-white text-xl font-bold p-4">
            Register to create
          </h2>
          <CustomInput
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <CustomInput
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <CustomInput
            placeholder="Email ID"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
          />
          <div className="flex flex-col self-center py-3 mx-20">
            <label className="text-white text-xs py-2">
              <input
                type="checkbox"
                checked={selectedTermCondition}
                onChange={(e) => handleOptionChange(e.target.checked, 1)}
              />
              <span className="px-3">
                I accept Terms & Conditions and Privacy Policy of Mondelez
                (Cadbury)
              </span>
            </label>

            <label className="text-white text-xs">
              <input
                type="checkbox"
                checked={receiveCommunication}
                onChange={(e) => handleOptionChange(e.target.checked, 2)}
              />
              <span className="px-3">
                I would like to receive promotional communication from Mondelez
                (Cadbury) about its products and offers
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="bg-yellow-500 py-3 text-white font-extrabold rounded-2xl mx-20"
          >
            Submit
          </button>
        </form>
      </div>
      <CustomModal open={open} setOpen={setOpen} to="birthday-user" />
    </div>
  );
}

export default RegistrationForm;
