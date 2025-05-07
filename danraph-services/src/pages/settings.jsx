import React, { useState, useEffect } from 'react'
import img1 from "../images/Danraph-services10.jpg"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import '../styles/settings.css'



const Settings = () => {
  const [phone, setPhone] = useState('')
  const [country, setCountry] = useState('us') // default to US

  // Auto-detect country by IP
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data && data.country_code) {
          setCountry(data.country_code.toLowerCase())
        }
      })
      .catch(() => {
        setCountry('us') // fallback
      })
  }, [])
  return (
    <div className='sm:px-8  pb-12 items-center flex justify-center sm:justify-start'>
     <div className='max-w-[767px] w-full px-4 py-3 pt-5 pb-12 border rounded-lg border-gray-300'>
       <div className='flex justify-between items-center gap-3'>
        <p className='sm:text-[26px] text-[18px] font-semibold '>Settings</p>
        <button className='text-white bg-[#F80B0B] px-7 sm:py-[6px] py-[4px] rounded-lg sm:text-[18px] text-[16px] font-semibold border-2 border-[#F80B0B] hover:bg-inherit hover:text-[#F80B0B] transition duration-500 '>Save</button>
       </div>

       <div className='flex items-center gap-7 py-5 '>
        <img src={img1} alt="" className='sm:max-w-[95px]  w-full sm:max-h-[95px] max-w-[80px] max-h-[80px] h-full rounded-full'/>
        <label
        htmlFor="file-upload"
        className="flex gap-2 items-center bg-[#F0F0F0] px-5 sm:py-2 py-[6px] hover:bg-inherit border-2 border-[#F0F0F0] hover:border-[#000000b6] transition duration-500 cursor-pointer"
      >
        <svg
         className='max-w-[19px] w-full'
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.5 11.5001V17.5001C18.5 17.699 18.421 17.8898 18.2803 18.0304C18.1397 18.1711 17.9489 18.2501 17.75 18.2501H1.25C1.05109 18.2501 0.860322 18.1711 0.71967 18.0304C0.579018 17.8898 0.5 17.699 0.5 17.5001V11.5001C0.5 11.3012 0.579018 11.1104 0.71967 10.9698C0.860322 10.8291 1.05109 10.7501 1.25 10.7501C1.44891 10.7501 1.63968 10.8291 1.78033 10.9698C1.92098 11.1104 2 11.3012 2 11.5001V16.7501H17V11.5001C17 11.3012 17.079 11.1104 17.2197 10.9698C17.3603 10.8291 17.5511 10.7501 17.75 10.7501C17.9489 10.7501 18.1397 10.8291 18.2803 10.9698C18.421 11.1104 18.5 11.3012 18.5 11.5001ZM6.28063 5.28073L8.75 2.81041V11.5001C8.75 11.699 8.82902 11.8898 8.96967 12.0304C9.11032 12.1711 9.30109 12.2501 9.5 12.2501C9.69891 12.2501 9.88968 12.1711 10.0303 12.0304C10.171 11.8898 10.25 11.699 10.25 11.5001V2.81041L12.7194 5.28073C12.8601 5.42146 13.051 5.50052 13.25 5.50052C13.449 5.50052 13.6399 5.42146 13.7806 5.28073C13.9214 5.14 14.0004 4.94912 14.0004 4.7501C14.0004 4.55108 13.9214 4.36021 13.7806 4.21948L10.0306 0.469477C9.96097 0.399744 9.87825 0.344425 9.7872 0.306682C9.69616 0.268939 9.59856 0.249512 9.5 0.249512C9.40144 0.249512 9.30384 0.268939 9.2128 0.306682C9.12175 0.344425 9.03903 0.399744 8.96937 0.469477L5.21937 4.21948C5.07864 4.36021 4.99958 4.55108 4.99958 4.7501C4.99958 4.94912 5.07864 5.14 5.21937 5.28073C5.36011 5.42146 5.55098 5.50052 5.75 5.50052C5.94902 5.50052 6.13989 5.42146 6.28063 5.28073Z"
            fill="#100C0C"
          />
        </svg>
        <span>Upload</span>
        <input
          type="file"
          id="file-upload"
          className="hidden"
         
        />
      </label>

       </div>

       <form action="" className='flex flex-col gap-5'>
        <div className='flex f:flex-col gap-3'>
        <div className='flex flex-wrap flex-col flex-1'> 
          <label htmlFor="First name" className='text-[16px] text-[#666666]'>First name</label>
          <input type="text" name="" id="" required className='border border-gray-300 sm:p-[13px] p-[10px]  rounded-xl outline-none '/>
        </div>

        <div className='flex flex-col flex-1'> 
          <label htmlFor="Last name" className='text-[16px] text-[#666666]'>Last name </label>
          <input type="text" name="" id="" required className='border border-gray-300 sm:p-[13px] p-[10px]  rounded-xl outline-none '/>
        </div>
        </div>

        <div className='flex flex-col flex-1'> 
          <label htmlFor="Email address" className='text-[16px] text-[#666666]'>Email address </label>
          <input type="email" name="" id="" required className='border border-gray-300 sm:p-[13px] p-[10px]  rounded-xl outline-none '/>
        </div>

        <div className='flex flex-col flex-1'> 
          <label htmlFor="Username" className='text-[16px] text-[#666666]'>Username </label>
          <input type="text" name="" id="" required className='border border-gray-300 sm:p-[13px] p-[10px]  rounded-xl outline-none '/>
        </div>

        <div className='flex flex-col flex-1'> 
          <label htmlFor="Phone Number" className='text-[16px] text-[#666666]'>Phone Number </label>
          <PhoneInput
            country={country}
            value={phone}
            onChange={setPhone}
            containerClass="w-full"
            inputClass="border border-gray-300 sm:p-[13px] p-[10px]  rounded-xl outline-none w-full"
            dropdownClass="!z-50"
            enableSearch
            countryCodeEditable={false}
            inputProps={{
              name: 'phone',
              required: true,
              autoFocus: false,
            }}
          />
        </div>
       
       </form>
     </div>
     
    </div>
  )
}

export default Settings
 
