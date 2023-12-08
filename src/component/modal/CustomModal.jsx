import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const OtpModal = ({
  isOpen = false,
  onClose = () => {},
  to = "birthday-user",
}) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleInputChange = (index, value) => {
    if (/[0-9]/.test(value) && index < otp.length) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < otp.length - 1 && value !== "") {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleResendOtp = () => {
    alert("Resend OTP");
  };

  const handleOtpSubmit = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp === "1234") {
      alert("Success");
      onClose(false);
      navigate(`/${to}`);
    } else {
      return alert("Invalid OTP");
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 backdrop-blur-sm transition-opacity">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg place-self-center">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 flex flex-col">
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-extrabold leading-6 text-center text-blue-800">
                    Enter OTP
                  </h3>
                  <div className="mt-4 flex justify-center space-x-4">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        type="text"
                        value={digit}
                        maxLength="1"
                        onChange={(e) =>
                          handleInputChange(index, e.target.value)
                        }
                        ref={inputRefs[index]}
                        className="w-12 h-12 border border-gray-300 bg-blue-800 text-white
                        rounded-md text-center text-xl font-semibold focus:outline-none focus:border-blue-500
                        items-center"
                      />
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  className="mt-3 mx-5 inline-flex w-full justify-center border-white underline px-3 py-2 text-sm font-semibold border sm:w-auto"
                  onClick={handleResendOtp}
                >
                  Resend OTP
                </button>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 justify-center">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-yellow-200 sm:w-auto"
                  onClick={handleOtpSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default function CustomModal({
  open = false,
  setOpen = () => {},
  to = "birthday-user",
}) {
  return <OtpModal isOpen={open} onClose={(value) => setOpen(value)} to={to} />;
}
