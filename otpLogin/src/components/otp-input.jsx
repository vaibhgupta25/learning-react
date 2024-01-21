import React, { useEffect, useRef, useState } from "react";

const OtpInput = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    const newOtp = [...otp];

    //allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Removing all the value excepting last from the particular input feild
    inputRefs.current[index].value = newOtp[index];

    //submit trigger
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === 4) onOtpSubmit(combinedOtp);

    // Move to next input field if feild is filled
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);
    //can't skip any blank field
    if (!otp[otp.indexOf("")]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };
  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index - 1 >= 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    // by default focusing on first input feild
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);
  // console.log(otp)

  //   console.log(inputRefs)

  return (
    <div className="flex justify-center gap-x-3">
      {otp.map((value, index) => {
        return (
          <input
            type="text"
            key={index}
            ref={(input) => (inputRefs.current[index] = input)} // storing refernce to inputs
            onChange={(e) => handleChange(e, index)}
            onClick={(e) => handleClick(index)}
            onKeyDown={(e) => {
              handleKeyDown(index, e);
            }}
            className="border w-10 h-10 rounded-lg border-[#565656] text-xl text-center px-3.5 py-1"
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
