import React, { useState } from "react";
import OtpInput from "./otp-input";

export default function PhoneOtpForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handlePhoneNumber = (e) => {
    e.preventDefault();
    setPhoneNumber(e.target.value);
  };

  const HandlePhoneSubmit = (e) => {
    e.preventDefault();
    const regex = /[^0-9]/g;
    if (phoneNumber.length != 10 || regex.test(phoneNumber)) {
      alert("invalid number");
      return;
    }
    setShowOtpInput(true);
  };

  const onOtpSubmit = (otp) => {
    console.log("login Successful", otp)
  }
  return (
    <div>
      {!showOtpInput ? (
        <form className="flex gap-x-3" onSubmit={HandlePhoneSubmit}>
          <input
            type="text"
            className="border px-2"
            value={phoneNumber}
            onChange={handlePhoneNumber}
          />
          <button
            type="Submit"
            className="border px-5 py-2 rounded-xl bg-[#4988fc] text-white"
          >
            Submit
          </button>
        </form>
      ) : (
        <div>
            <p>Enter the Otp Sent to {phoneNumber}</p>
            <OtpInput onOtpSubmit={onOtpSubmit}/>
        </div>
      )}
    </div>
  );
}
