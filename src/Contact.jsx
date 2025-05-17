import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import star from './assets/icons/star.svg'
import img1 from './assets/images/img1.png'
import down from './assets/icons/Adown.svg'
import Blue from './assets/images/Blue.svg'
import phone from './assets/images/Group.png'
import discord from './assets/icons/discord 2.png'
import insta from './assets/icons/instagram 2.png'
import link from './assets/icons/Vector.png'
import phone2 from './assets/icons/Call.svg'
import LocomotiveScroll from 'locomotive-scroll';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Contact = () => {
  const [PhoneNumber, setPhoneNumber] = useState('');
  const form = useRef();

  const handleChange = (value) => {
    setPhoneNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      user_phone: PhoneNumber,
      message: form.current.message.value,
    };
    console.log("Form Submitted:", formData);
    // You can handle sending this formData via an API or service like EmailJS
  };

  return (
    <div>
      <div id="contact" className="hidden md:block w-full min-h-screen bg-black text-white px-20 py-16">
        <h1 className="text-9xl font-['Quick_Peachy'] text-[#E88D67] text-center mb-8 mt-[-8vh] z-20">CONTACT US</h1>
        <div className="flex justify-between">
          <div className="w-1/2 pr-12">
            <h2 className="text-3xl  font-['Quick_Peachy'] mb-4">Get in touch with us</h2>
            <p className="font-['Radley'] text-lg text-[#E88D67] ">
              Whether you're looking for collaboration or just want to say hello — we’d love to hear from you!
            </p>
            <div className="mt-8">
              <h3 className="text-2xl font-['Radley'] mb-2">Socials</h3>
              <div className="flex space-x-4">
                <a href="https://discordapp.com/users/692750614379233371" target="_blank" rel="noopener noreferrer">
                  <img src={discord || "/placeholder.svg"} alt="Discord" className="h-8 w-8" />
                </a>
                <a href="https://www.instagram.com/ani_nation24/" target="_blank" rel="noopener noreferrer">
                  <img src={insta || "/placeholder.svg"} alt="Instagram" className="h-8 w-8" />
                </a>
                <a href="https://www.linkedin.com/in/61b9a0221/" target="_blank" rel="noopener noreferrer">
                  <img src={link || "/placeholder.svg"} alt="LinkedIn" className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>
          <form ref={form} onSubmit={handleSubmit} className="w-1/2 space-y-6 bg-[#F3F7EC] p-8 rounded-xl text-black">
            <input
              className="w-full p-3 rounded-lg text-xl font-['Radley'] border-none outline-none"
              type="text"
              name="user_name"
              placeholder="Full name..."
              required
            />
            <PhoneInput
              country={"in"}
              value={PhoneNumber}
              onChange={handleChange}
              inputProps={{ required: true }}
              containerStyle={{
                backgroundColor: "#fff",
                borderRadius: "0.5rem",
                padding: "0.5rem",
                width: "100%",
              }}
              inputStyle={{
                width: "100%",
                fontSize: "1.1rem",
                padding: "0.5rem",
                border: "none",
              }}
              buttonStyle={{
                backgroundColor: "#fff",
                border: "none",
              }}
            />
            <input
              className="w-full p-3 rounded-lg text-xl font-['Radley'] border-none outline-none"
              type="email"
              name="user_email"
              placeholder="Email ID..."
              required
            />
            <textarea
              name="message"
              className="w-full h-40 p-3 rounded-lg text-xl font-['Radley'] border-none outline-none resize-none"
              placeholder="Message..."
              required
            ></textarea>
            <button type="submit" className="bg-[#E88D67] text-white py-3 px-6 rounded-full font-['Radley'] text-xl">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div id="contact" className="md:hidden bg-black min-h-[40vh] w-full px-4 py-6">
        <div className="relative">
          {/* Top curved background */}
          {/* <div className="absolute top-0 left-0 right-0 h-16 bg-[#E88D67] rounded-b-[50px]"></div> */}

          {/* Contact Us Header */}
          <h1 className="text-6xl font-['Quick_Peachy'] text-[#E88D67] pt-0 pb-4 text-center relative mt-[-23vh] z-10">CONTACT US</h1>

          {/* Get in touch subheading */}
          <div   className="text-3xl font-['Quick_Peachy'] mb-[-2] text-center">
            <span className="text-[#E88D67]">Get in touch</span> <span className="text-white">with us -</span>
          </div>

          {/* Contact Form */}
          <form ref={form} onSubmit={handleSubmit} className="space-y-4 mt-10">
            {/* Name Input */}
            <div className="bg-[#F3F7EC] rounded-xl p-3">
              <input
                className="w-full bg-transparent text-gray-500 text-xl font-['Radley'] focus:outline-none"
                type="text"
                name="user_name"
                placeholder="Full name..."
                required
              />
            </div>

            {/* Phone Input */}
            <div id="contact"   className="bg-[#F3F7EC] rounded-xl overflow-hidden">
              <PhoneInput
                country={"in"}
                value={PhoneNumber}
                onChange={handleChange}
                inputProps={{ required: true }}
                containerClass="phone-input-container"
                buttonClass="custom-flag-dropdown-mobile"
                inputClass="phone-input-field"
                dropdownStyle={{
                  width: "12rem",
                  fontSize: "0.75rem",
                }}
                containerStyle={{
                  backgroundColor: "#F3F7EC",
                  borderRadius: "0.75rem",
                  padding: "0.75rem",
                  width: "100%",
                  display: "flex",
                  alignItems: "center"
                }}
                inputStyle={{
                  width: "100%",
                  backgroundColor: "#FFFFFF",
                  border: "none",
                  fontSize: "1.25rem",
                  padding: "0.75rem",
                  color: "#000",
                }}
                buttonStyle={{
                  backgroundColor: "#F3F7EC",
                  border: "none",
                  borderRadius: "0",
                  backgroundSize: "contain",
                  width: "3rem",
                  height: "100%",
                  marginRight: "0.5rem"
                }}
              />
            </div>

            {/* Email Input */}
            <div className="bg-[#F3F7EC] rounded-xl p-3">
              <input
                className="w-full bg-transparent text-gray-500 text-xl font-['Radley'] focus:outline-none"
                type="email"
                name="user_email"
                placeholder="Email ID..."
                required
              />
            </div>

            {/* Message Input */}
            <div className="bg-[#F3F7EC] rounded-xl p-3">
              <textarea
                name="message"
                className="w-full h-40 bg-transparent text-gray-500 text-xl font-['Radley'] focus:outline-none resize-none"
                placeholder="Message..."
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4 flex justify-center">
              <button type="submit" className="bg-[#E88D67] text-white font-['Radley'] text-xl py-2 px-8 rounded-full">
                Submit
              </button>
            </div>
          </form>
          <div className="mt-6 text-center relative z-20">
            <h1 className='text-[2.5vh] font-["Radley"] text-white mb-2'>Other links are :</h1>
            <div className="flex justify-center space-x-6">
              <a href="https://discordapp.com/users/692750614379233371" target="_blank" rel="noopener noreferrer">
                <img src={discord || "/placeholder.svg"} alt="Discord Profile" className="h-8 w-8" />
              </a>
              <a href="https://www.instagram.com/ani_nation24/" target="_blank" rel="noopener noreferrer">
                <img src={insta || "/placeholder.svg"} alt="Instagram Profile" className="h-8 w-8" />
              </a>
              <a href="https://www.linkedin.com/in/61b9a0221/" target="_blank" rel="noopener noreferrer">
                <img src={link || "/placeholder.svg"} alt="LinkedIn Profile" className="h-8 w-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
