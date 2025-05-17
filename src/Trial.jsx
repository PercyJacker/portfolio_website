"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import star from "./assets/icons/star.svg"
import vscode from "./assets/icons/vscode.png"
import DaVinci from "./assets/icons/davinci-resolve-12-logo-black-and-white.png"
import blender from "./assets/icons/blender-1-2.svg"
import anime from "./assets/icons/anime.png"
import travel from "./assets/icons/travel.png"
import art from "./assets/icons/art.png"
import puru from "./assets/icons/Subject.png"
import whatsapp from "./assets/images/whatsapp-white-icon.png"
import email from "./assets/images/Subject 2.png"
import cv from "./assets/images/resume.pdf"
import "react-phone-input-2/lib/style.css"
import "./style/style.css"
import emailjs from "@emailjs/browser"
import website from "./assets/icons/image 3.png"
import model from "./assets/icons/image 2.png"
import youtube from "./assets/icons/image 4.png"

const Hero = () => {
  const ref = useRef()
  const { scrollYProgress } = useScroll()
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => console.log(value))
    return () => unsubscribe()
  }, [scrollYProgress])

  const smootherRef = useRef(null)

  const x = useTransform(scrollYProgress, [0, 0.5], ["0", "-25%"])
  const portfolio = useTransform(scrollYProgress, [0, 0.5], ["0", "-10%"])
  const video = useTransform(scrollYProgress, [0, 0.5], ["0", "-50%"])
  const three = useTransform(scrollYProgress, [0, 0.5], ["0", "-75%"])
  const parallaxY = useTransform(scrollYProgress, [0.08, 0.4], ["0%", "-65%"])
  const cards = useTransform(scrollYProgress, [0.48, 0.57], ["0%", "-20%"])
  const review = useTransform(scrollYProgress, [0.58, 0.75], ["0%", "-16%"])
  const reviews = useTransform(scrollYProgress, [0.58, 0.75], ["0%", "-65%"])
  const contact = useTransform(scrollYProgress, [0.71, 0.9], ["0%", "-65%"])
  const contacts = useTransform(scrollYProgress, [0.71, 0.85], ["0%", "-25%"])
// const Technical = useTransform(scrollYProgress, [0.34, 0.47], ["0%", "-20%"]);
  const Technical = useTransform(scrollYProgress, [0.34, 0.47], ["0%", "-20%"]);
    const Technicalparallax = useTransform(scrollYProgress, [0.37, 0.77], ["0%", "-50%"])

  const [PhoneNumber, setPhoneNumber] = useState("")
  const [valid, setValid] = useState(true)
  const form = useRef()
  const contactRef = useRef(null)

  // Handle phone number change
  const handleChange = (value) => {
    setPhoneNumber(value)
    setValid(validatePhoneNumber(value))
  }

  // Validate phone number format
  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\+?\d{10,15}$/
    return phoneNumberPattern.test(phoneNumber)
  }

  const handleSubmit = (e) => {
    e.preventDefault() // Prevent default form submission behavior

    // Validate phone number before submitting
    if (!valid) {
      alert("Please enter a valid 10-digit phone number.")
      return
    }

    // Send form data with EmailJS
    emailjs
      .sendForm(
        "service_jmb09ry", // Your EmailJS service ID
        "template_13dwfrb", // Your EmailJS template ID
        form.current, // Reference to the form
        "p66jkoEcTjo8MqeFm", // Your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Success:", result.text)
          alert("Form submitted successfully!")
        },
        (error) => {
          console.error("Error details:", error)
          alert(`Form submission failed. Error: ${error.text}`)
        },
      )
  }
  const scrollToPosition = () => {
    window.scrollTo({
      top: window.innerHeight * 0.9297343616109683, // Scroll position as a percentage of the viewport height
      behavior: "smooth", // Smooth scroll
    })
  }

  const cardsParallax = useTransform(scrollYProgress, [0.8, 0.9], ["0%", "-20%"])
  const reviewsParallax = useTransform(scrollYProgress, [0.7, 0.8], ["0%", "-30%"])

  return (
    <>
      {/* page1 */}
      <div id="about" className='h-[70vh] w-full bg-[#F3F7EC] bg-[url("./assets/icons/nnnoise.svg")] md:block'>
        <div className="h-[4vh] w-full bg-black"></div>

        {/* Desktop version - hidden on mobile */}
        <div className="hidden md:block">
 <div
  id="about"
  className='h-[25vh] sm:h-[30vh] md:h-[35vh] w-full bg-[#F3F7EC] top-[20vh] relative z-10 leading-none bg-[url("./assets/icons/nnnoise.svg")]'
>
            <h1 className='text-[11vh] text-black ml-[10vw] font-["Quick_Peachy"] '>
              Hello,
              <br /> I'm Percy
            </h1>
           <div
 
  className='h-[25vh] sm:h-[30vh] md:h-[35vh] w-full bg-[#F3F7EC] top-[5vh] relative z-10 leading-none bg-[url("./assets/icons/nnnoise.svg")]'
>
              <h1 className='text-[4vh] text-black font-["Radley"] ml-[10vw]'>
                I create my client's <i>ideas into frames</i> <br /> with my <b>web</b> development, <b>video</b> <br />{" "}
                editing and <b>3D</b> modeling skills.
              </h1>
              <a href={cv} download>
                <button className="bg-black text-white px-6 py-3 ml-[10vw] mt-4 text-[3vh] font-['Radley'] rounded-lg hover:bg-gray-800 transition-all duration-300">
                  Download CV
                </button>
              </a>

<h1 className='text-[16vh] text-[#005C78] mt-[16vh] sm:mt-[17vh] ml-[10vw] font-["Quick_Peachy"] '></h1>
            </div>
          </div>
        </div>

 {/* Page 2 mob */}

        {/* Mobile version - hidden on desktop */}
        <div id="about" className="md:hidden px-6 pt-8">
          <h1 className='text-6xl font-["Quick_Peachy"] leading-tight text-black'>
            Hello,
            <br /> I'm Percy
          </h1>

          <div className="mt-4 pr-[40%] relative">
            <p className="text-xl font-['Radley'] leading-relaxed">
              I create my client's <i>ideas into frames</i> with my <b>web</b> development, <b>video</b> editing and{" "}
              <b>3D</b> modeling <b>skills</b>.
            </p>

            {/* Blue rectangle with black bottom */}
            <div className="absolute top-0 right-[-5%] w-[40%] h-[200px]">
<img
      src={puru || "/placeholder.svg"}
      alt="Profile"
      className="absolute bottom-[5.5vh] ml-[-2vw] w-[90%] mx-auto left-1/2 -translate-x-1/2 object-contain"
    />
              <div className="w-full h-[75%] bg-[#005C78]"></div>
              <div className="w-full h-[25%] bg-black"></div>
            </div>
          </div>

          <div className="mt-8">
            <a href={cv} download>
              <button className="bg-black text-white px-6 py-3 text-lg font-['Radley'] rounded-lg hover:bg-gray-800 transition-all duration-300">
                Download CV
              </button>
            </a>
          </div>
<h2 className="text-7xl font-['Quick_Peachy'] text-[#005C78] mt-[28vh] sm:mt-[10vh] mb-0">
  ABOUT ME
</h2>


        </div>

        <motion.div
          style={{ y: parallaxY }}
          className="h-[80vh] w-[30vw] bg-[#005C78] top-[10vh] ml-[60vw] relative z-10 hidden md:block"
        >
          <img
            className="absolute mt-[1.5vh] ml-5 object-contain"
            style={{ width: "400px", height: "600px" }}
            src={puru || "/placeholder.svg"}
            alt="Your Image Description"
          />
          <div className="h-[8vh] w-[11vw] bg-[#E88D67] absolute top-[18vh] ml-[-5vw] rounded-lg"></div>
          <div className="h-[8vh] w-[11vw] bg-[#E88D67] absolute top-[-3vh] ml-[20vw] rounded-lg"></div>

          <div className="h-[45vh] w-full bg-black absolute top-[60vh]">
            <h1 className="text-[40px] text-white mt-[30px] ml-[85px] font-['Quick_Peachy']">PERSONAL INFO</h1>
            <h1 className="text-[25px] text-white mt-[5.5vh] ml-[50px] font-['Quick_Peachy']">
              Name: Purushottam Murmu
            </h1>
            <img
              className="h-[5vh] absolute top-[200px] left-[50px]"
              src={email || "/placeholder.svg"}
              alt="Email Icon"
            />
            <h1 className="text-[20px] text-white mt-[30px] ml-[95px] font-['Quick_Peachy']">
              Purushottam@designelement.shop
            </h1>
            <img
              className="h-[3vh] absolute top-[260px] left-[60px]"
              src={whatsapp || "/placeholder.svg"}
              alt="Email Icon"
            />

            <h1 className="text-[20px] text-white mt-[26px] ml-[95px] font-['Quick_Peachy']">+91 6370261378</h1>
          </div>
        </motion.div>
      </div>

      {/* Experience Section */}
      <div className="h-screen w-full py-16 sm:py-24 mt-4 sm:mt-10 bg-[#005C78]">
        {/* Desktop version - hidden on mobile */}
        <div
          id="about"
          className='h-screen w-full bg-[#005C78] bg-[url("./assets/images/Blue.svg")] py-16 sm:py-24 mt-[-10vh] sm:mt-[-13vh] relative leading-none hidden md:flex'
        >
          <div className="h-[20vh] w-[40vw]  ml-[10vw] ">
            <h1 className='text-[10vh] text-black mt-[10vh] font-["Quick_Peachy"] absolute '>Exprience:</h1>
          </div>
          <div className="h-[50vh] w-[5vh] absolute mt-[25vh] ml-[6vw] ">
            <img className="h-[4vh] w-[4vw] mt-[1vh]" src={star || "/placeholder.svg"} alt="" />
            <img className="h-[4vh] w-[4vw] mt-[15vh]" src={star || "/placeholder.svg"} alt="" />
            <img className="h-[4vh] w-[4vw] mt-[8vh]" src={star || "/placeholder.svg"} alt="" />
          </div>
          <div className="h-[50vh] w-[65vh] absolute mt-[25vh] ml-[10vw] ">
            <h1 className='text-[3vh] text-[#F3F7EC] mt-[2vh] font-["Quick_Peachy"] '>Web development</h1>
            <h1 className='text-[2.5vh] text-[#F3F7EC] mt-[1vh] font-["Radley"]'>
              Worked on developing and maintaining web applications using React, Tailwind CSS, Node.js, and MongoDB.
            </h1>
            <h1 className='text-[2.5vh] text-[#F3F7EC] mt-[1vh] font-["Radley"]'>
              Built an Internshala clone with front-end completed and back-end in progress.
            </h1>
            <h1 className='text-[3vh] text-[#F3F7EC] mt-[3vh] font-["Quick_Peachy"] '>video editing</h1>
            <h1 className='text-[2.5vh] text-[#F3F7EC] mt-[1vh] font-["Radley"]'>
              Edited videos using DaVinci Resolve, focusing on color grading, transitions, and storytelling.
            </h1>
            <h1 className='text-[3vh] text-[#F3F7EC] mt-[3vh] font-["Quick_Peachy"] '>3-D modeling</h1>
            <h1 className='text-[2.5vh] text-[#F3F7EC] mt-[1vh] font-["Radley"]'>
              Created 3D models in Blender, learning basic modeling, texturing, and rendering techniques.
            </h1>
          </div>
          <div className="h-[50vh] w-[55vh] absolute mt-[55vh] ml-[60vw] "></div>
          <motion.div
            ref={ref}
            style={{ y: Technicalparallax }}
            className="h-[60vh] w-[75vh] bg-[#E88D67] absolute z-10 mt-[85vh] ml-[10vw] "
          >
            <motion.h1
              ref={ref}
              style={{}}
              className='text-[10vh] ml-4 text-black mt-[5vh] font-["Quick_Peachy"] absolute'
            >
              Technical skills:
              <div className="h-[20vh] w-[23vw] ml-5">
                <h1 className='text-[4vh] mt-[2vh] font-["Quick_Peachy"] '>Software skills</h1>
                <div className="flex ">
                  <img className="h-[5vh] mt-5" src={vscode || "/placeholder.svg"} alt="" />
                  <img className="h-[5vh] mt-5 ml-3" src={blender || "/placeholder.svg"} alt="" />
                  <img className="h-[5vh] ml-4 mt-5" src={DaVinci || "/placeholder.svg"} alt="" />
                </div>
              </div>
              <div className="h-[20vh] w-[23vw] absolute ml-[20vw] mt-[-22vh] p-4">
                <h1 className="text-[4vh] font-['Quick_Peachy'] mb-2">Coding Skills</h1>
                <div className="flex flex-wrap">
                  <div className="w-1/2">
                    <h1 className="text-[2.5vh] font-['Radley'] mt-1">- HTML</h1>
                    <h1 className="text-[2.5vh] font-['Radley'] mt-1">- CSS</h1>
                    <h1 className="text-[2.5vh] font-['Radley'] mt-1">- JavaScript</h1>
                    <h1 className="text-[2.5vh] font-['Radley'] mt-1">- Java</h1>
                    <h1 className="text-[2.5vh] font-['Radley'] mt-1">- Node.js</h1>
                  </div>
                  <div className="w-1/2">
                    <h1 className="text-[2.5vh] font-['Radley'] mt-1">- Mongo</h1>
                    <h1 className="text-[2.5vh] font-['Radley'] mt-1">- Express</h1>
                    <h1 className="text-[2.5vh] font-['Radley'] mt-1">- React</h1>
                    <h1 className="text-[2.5vh] font-['Radley'] mt-1">- Three.js</h1>
                  </div>
                </div>
              </div>
              <div className="h-[11vw] w-[60vh] mt-5 p-4">
                <div className="flex flex-wrap gap-4">
                  <div className="h-[7vh] w-[15vw] bg-black rounded-full flex items-center justify-center">
                    <h1 className="text-2xl text-white font-['Radley']">#communicaton</h1>
                  </div>
                  <div className="h-[7vh] w-[10vw] bg-black rounded-full flex items-center justify-center">
                    <h1 className="text-2xl text-white font-['Radley']">#creativity</h1>
                  </div>
                </div>

                <div className="flex gap-4 mt-4">
                  <div className="h-[7vh] w-[10vw] bg-black rounded-full flex items-center justify-center">
                    <h1 className="text-2xl text-white font-['Radley']">#english</h1>
                  </div>
                  <div className="h-[7vh] w-[13vw] bg-black rounded-full flex items-center justify-center">
                    <h1 className="text-2xl text-white font-['Radley']">#adaptability</h1>
                  </div>
                </div>
              </div>
            </motion.h1>
          </motion.div>
          <div id="work" className="h-[20vh] w-[65vh] absolute mt-[80vh] ml-[60vw] ">
            <h1 className='text-[16vh] text-[#F3F7EC] mt-[6vh] font-["Quick_Peachy"] '>WORK</h1>
          </div>

          {/* page3 */}
          <div className="h-[50vh] w-[5vh] absolute mt-[25vh] ml-[55vw]">
            <img className="h-[4vh] w-[4vw] mt-[1vh]" src={star || "/placeholder.svg"} alt="" />
            <img className="h-[4vh] w-[4vw] mt-[6vh]" src={star || "/placeholder.svg"} alt="" />
            <img className="h-[4vh] w-[4vw] mt-[6vh]" src={star || "/placeholder.svg"} alt="" />
          </div>
          <div className="h-[20vh] w-[30vw] ml-[11vw] relative">
            <h1 className='text-[10vh] text-black mt-[10vh] font-["Quick_Peachy"] absolute '>Education:</h1>
            <div className="h-[50vh] w-[30vw] absolute mt-[25vh] ml-[vw] ">
              <h1 className='text-[3vh] text-[#F3F7EC] mt-[2vh] font-["Quick_Peachy"] '>2017-18</h1>
              <h1 className='text-[2.5vh] text-[#F3F7EC] mt-[1vh] font-["Radley"]'>
                10th from Kendriya Vidyalaya Angul
              </h1>

              <h1 className='text-[3vh] text-[#F3F7EC] mt-[3vh] font-["Quick_Peachy"] '>2019-20</h1>
              <h1 className='text-[2.5vh] text-[#F3F7EC] mt-[1vh] font-["Radley"]'>
                12th from Kendriya Vidyalaya Surda
              </h1>

              <h1 className='text-[3vh] text-[#F3F7EC] mt-[3vh] font-["Quick_Peachy"] '>2021 - present</h1>
              <h1 className='text-[2.5vh] text-[#F3F7EC] mt-[1vh] font-["Radley"]'>
                B.tech CSE from Sharda university
              </h1>
            </div>

            <div className="h-[20vh] w-[25vw] mt-[70vh] absolute flex">
              <img className="h-[9vh] ml-3" src={art || "/placeholder.svg"} alt="" />
              <img className="h-[8vh] ml-[5vw]" src={anime || "/placeholder.svg"} alt="" />
              <img className="h-[13vh] mt-[-2.5vh] ml-10" src={travel || "/placeholder.svg"} alt="" />
            </div>
            <div className="h-[10vh] w-[25vw] mt-[80vh] absolute ">
              <div className="flex">
                <h1 className='text-[2.5vh] text-[#F3F7EC] mt-[1vh] font-["Radley"]'>Digital art</h1>
                <h1 className='text-[2.5vh] text-[#F3F7EC] mt-[1vh] ml-[4vw] font-["Radley"]'>Anime</h1>
                <h1 className='text-[2.5vh] text-[#F3F7EC] mt-[1vh] ml-[4vw] font-["Radley"]'>Travel</h1>
              </div>
            </div>
            <h1 className='text-[10vh] text-black mt-[60vh] font-["Quick_Peachy"] absolute '>Interests:</h1>
          </div>
        </div>

        {/* Mobile version - hidden on desktop */}
<div  className="md:hidden w-full bg-[#005C78] overflow-hidden mt-[-55px]">
            <div id="work" className="px-6 py-12">
            <h2 className="text-5xl font-['Quick_Peachy'] text-black mb-8">Experience-</h2>

            <div className="space-y-8">
              <div className="flex">
                <div className="mr-4 mt-1">
                  <img src={star || "/placeholder.svg"} alt="Star" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-['Quick_Peachy'] text-white mb-2">Web development</h3>
                  <p className="text-lg font-['Radley'] text-white">
                    Worked on developing and maintaining web applications using React, Tailwind CSS, Node.js, and
                    MongoDB.
                  </p>
                  <p className="text-lg font-['Radley'] text-white mt-2">
                    Built an Internshala clone with front-end completed and back-end in progress.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4 mt-1">
                  <img src={star || "/placeholder.svg"} alt="Star" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-['Quick_Peachy'] text-white mb-2">video editing</h3>
                  <p className="text-lg font-['Radley'] text-white">
                    Edited videos using DaVinci Resolve, focusing on color grading, transitions, and storytelling.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4 mt-1">
                  <img src={star || "/placeholder.svg"} alt="Star" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-['Quick_Peachy'] text-white mb-2">3-D modeling</h3>
                  <p className="text-lg font-['Radley'] text-white">
                    Created 3D models in Blender, learning basic modeling, texturing, and rendering techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Skills Section - Mobile Only */}
      <div className="md:hidden w-full bg-[#E88D67] overflow-hidden">
        <div id="work" className="px-6 py-12">
          <h2 className="text-6xl font-['Quick_Peachy'] text-black mb-8">Technical skill</h2>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-['Quick_Peachy'] uppercase mb-4">Software Skills</h3>
              <div className="flex space-x-4">
                <img src={vscode || "/placeholder.svg"} alt="VS Code" className="w-12 h-12" />
                <img src={blender || "/placeholder.svg"} alt="Blender" className="w-12 h-12" />
                <img src={DaVinci || "/placeholder.svg"} alt="DaVinci Resolve" className="w-12 h-12" />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-['Quick_Peachy'] uppercase mb-4">Coding Skills</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li className="text-lg font-['Radley'] text-white">HTML</li>
                <li className="text-lg font-['Radley'] text-white">CSS</li>
                <li className="text-lg font-['Radley'] text-white">JavaScript</li>
                <li className="text-lg font-['Radley'] text-white">Java</li>
                <li className="text-lg font-['Radley'] text-white">Node.js</li>
                <li className="text-lg font-['Radley'] text-white">Mongo</li>
                <li className="text-lg font-['Radley'] text-white">Express</li>
                <li className="text-lg font-['Radley'] text-white">React</li>
                <li className="text-lg font-['Radley'] text-white">Three.js</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="px-12 mb-[-3vh]">
          <h2 className="text-8xl font-['Quick_Peachy'] text-white">WORK</h2>
        </div>
      </div>

      {/* Services Section */}
<div className='hidden md:block h-[120vh] w-full bg-[#F3F7EC] relative bg-[url("./assets/icons/nnnoise.svg")]'>
  <div className="h-[30vh] w-[60vh] absolute mt-[5vh] ml-[60vw]">
    <h1 className='text-[10vh] text-black font-["Quick_Peachy"] leading-none'>
      What service you are looking for?
    </h1>
  </div>

  <motion.div
    ref={ref}
    style={{ y: cards }}
    className="web h-[55vh] w-[40vh] bg-[#005C78] absolute mt-[50vh] ml-[10vw] rounded-lg flex flex-col items-center p-6"
  >
    <img className="h-[15vh] w-[10vw] mb-4" src={website || "/placeholder.svg"} alt="Website Preview" />
    <div className="text-4xl text-white font-['Radley'] mb-4 text-center">Want to build your dream website?</div>
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="h-[6vh] mt-6 w-[8vw] bg-[#E88D67] rounded-2xl flex items-center justify-center cursor-pointer"
    >
      <h1 className="text-lg text-white font-['Radley']">Soon..</h1>
    </motion.div>
  </motion.div>

 <motion.div
  ref={ref}
  style={{ y: cards }}
  className="h-[55vh] w-[40vh] bg-[#E88D67] absolute mt-[50vh] ml-[39vw] rounded-lg flex flex-col items-center p-6"
>
  <img
    className="h-[15vh] w-[10vw] mb-4 object-contain"
    src={youtube || "/placeholder.svg"}
    alt="Website Preview"
  />
  <div className="text-4xl text-white font-['Radley'] mb-6 text-center">
    Want to make a video for your brand?
  </div>
  <a
    href="https://ytjobs.co/talent/profile/167383?r=637"
    target="_blank"
    rel="noopener noreferrer"
  >
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="bg-[#005C78]  h-[6vh] w-[8vw] bg-black mt-4 rounded-2xl flex items-center justify-center cursor-pointer shadow-md"
    >
      <h1 className="text-lg text-white font-['Radley']">Click here</h1>
    </motion.div>
  </a>
</motion.div>

  <motion.div
    ref={ref}
    style={{ y: cards }}
    className="h-[55vh] w-[40vh] bg-gradient-to-br from-[#1A1A1A] to-[#3A3A3A] absolute mt-[50vh] ml-[68vw] rounded-lg flex flex-col items-center justify-center p-6 shadow-2xl"
  >
    <img
      className="h-[15vh] w-auto mt-[-13vh] object-contain"
      src={model || "/placeholder.svg"}
      alt="Video Preview"
    />
    <div className="text-3xl text-white font-['Radley'] mb-8 mt-5 text-center">
      Want a 3D model for yourself?
    </div>
    <motion.div
      whileHover={{ scale: 1.1, backgroundColor: "#FF7043" }}
      whileTap={{ scale: 0.95 }}
      className="h-[6vh] w-[20vw] md:w-[8vw] mt-5 bg-[#E88D67] rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300"
    >
      <h1 className="text-lg text-white font-['Radley']">Soon..</h1>
    </motion.div>
  </motion.div>
</div>

    </>
  )
}

export default Hero

