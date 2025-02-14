import React, { useEffect, useRef, useState } from 'react'

const OtpInput = ({ onOtpSubmit = () => { }, length = 4 }) => {


  const [otp, setOtp] = useState(new Array(length).fill(""));


  const inputRefs = useRef([])
  console.log(otp)
  console.log(inputRefs)

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [])


  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOpt = [...otp];
    newOpt[index] = value.substring(value.length - 1);
    setOtp(newOpt);

    //submit trigger 

    const combineOtp = newOpt.join('');
    if (combineOtp.length === length)
      onOtpSubmit(combineOtp)


    //Move to next input if current field is filled
    if (index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }


  }

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1)

    // optional 
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf('')].focus();
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  }

  return (
    <div>
      {
        otp.map((value, index) => {
          return (
            <input
              type="text"
              ref={(input) => (inputRefs.current[index] = input)}
              key={index}
              value={value}
              onChange={(e) => handleChange(index, e)}
              onClick={() => handleClick(index)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className='border-[2px] border-black px-4 m-5 py-2 w-16 hover:bg-blue-200 hover:animate-bounce duration-1000 transition-all '
            />
          )
        })
      }
    </div>
  )
}

export default OtpInput