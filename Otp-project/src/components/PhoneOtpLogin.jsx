import React, { useState } from 'react'
import OtpInput from './OtpInput'

const PhoneOtpLogin = () => {

  const [phoneNumber, setPhoneNumber] = useState('')
  const [showOtpInput, setShowOtpInput] = useState(false)

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value)

  }


  const handlPhoneSubmit = (e) => {
    e.preventDefault()


    // phone validators
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert('invalid phone Number');
      return;
    }

    // call BakendUrl API
    setShowOtpInput(true);

  }

  const onOtpSubmit = (otp) => {
    console.log("Login Successful", otp)
  }

  return (
    <div >

      {
        !showOtpInput ? <form onSubmit={handlPhoneSubmit}>
          <input type="text"
            onChange={handlePhoneNumber}
            value={phoneNumber}
            placeholder='Enter phone Number'
            className=' border-[2px] border-black py-2 px-10 font-semibold rounded-xl text-black gap-3'
          />
          <button type="submit"
            className='border-[2px] bg-blue-800 py-2 px-6 text-white rounded-full'
          >Submit</button>

        </form> : <div>
          <p className='text-xl font-semibold'>Enter OTP sent to {phoneNumber}</p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      }
    </div>

  )
}

export default PhoneOtpLogin