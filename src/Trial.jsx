
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
import vscode from './assets/icons/vscode.png'
import DaVinci from './assets/icons/davinci-resolve-12-logo-black-and-white.png'
import blender from './assets/icons/blender-1-2.svg'
import procreate from './assets/icons/Procreate-Symbol.png'
import adobeI from './assets/icons/AIlogo.webp'
import music from './assets/icons/png-transparent-black-musical-note-black-music-note-thumbnail.png'
import anime from './assets/icons/anime.png'
import travel from './assets/icons/travel.png'
import art from './assets/icons/art.png'
import puru from './assets/images/Subject.png'
import whatsapp from './assets/images/whatsapp-white-icon.png'
import email from './assets/images/Subject 2.png'




import LocomotiveScroll from 'locomotive-scroll';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2'
import './style/style.css';
import emailjs from '@emailjs/browser'
import website from './assets/icons/image 3.png'
import model from './assets/icons/image 2.png'
import youtube from './assets/icons/image 4.png'





const Hero = () => {
  const ref =useRef()
  const {scrollYProgress }= useScroll();
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => console.log(value));
    return () => unsubscribe();
  }, [scrollYProgress]);

  const smootherRef = useRef(null);




  const x =useTransform(scrollYProgress,[0,0.5],['0','-25%'])
  const portfolio =useTransform(scrollYProgress,[0,0.5],['0','-10%'])
  const video =useTransform(scrollYProgress,[0,0.5],['0','-50%'])
  const three =useTransform(scrollYProgress,[0,0.5],['0','-75%'])
  const parallaxY = useTransform(scrollYProgress, [0.08, 0.4], ['0%', '-65%']); 
  const Technical = useTransform(scrollYProgress, [0.34, 0.47], ['0%', '-20%']); 
  const cards = useTransform(scrollYProgress, [0.48, 0.57], ['0%', '-20%']); 
  const review = useTransform(scrollYProgress, [0.58, 0.75], ['0%', '-16%']); 
  const reviews = useTransform(scrollYProgress, [0.58, 0.75], ['0%', '-65%']); 
  const contact = useTransform(scrollYProgress, [0.71, 0.9], ['0%', '-65%']); 
  const contacts = useTransform(scrollYProgress, [0.71, 0.85], ['0%', '-25%']); 


  const [PhoneNumber, setPhoneNumber] = useState('');
  const [valid, setValid] = useState(true);
  const form = useRef();
  const contactRef = useRef(null);


  // Handle phone number change
  const handleChange = (value) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  // Validate phone number format
  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\+?\d{10,15}$/;
    return phoneNumberPattern.test(phoneNumber);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validate phone number before submitting
    if (!valid) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // Send form data with EmailJS
    emailjs
      .sendForm(
        "service_jmb09ry", // Your EmailJS service ID
        "template_13dwfrb", // Your EmailJS template ID
        form.current, // Reference to the form
        "p66jkoEcTjo8MqeFm" // Your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("Form submitted successfully!");
        },
        (error) => {
          console.error("Error details:", error);
          alert(`Form submission failed. Error: ${error.text}`);
        }
      );
  };
      const scrollToPosition = () => {
        window.scrollTo({
          top: window.innerHeight * 0.9297343616109683, // Scroll position as a percentage of the viewport height
          behavior: 'smooth', // Smooth scroll
        });
      };

      // const scrollToContact = () => {
      //   const contactSection = document.getElementById('contact-section');
      //   contactSection?.scrollIntoView({ behavior: 'smooth' });
      // };



  
  
  
  return (
    
    <>
    {/* page1 */}
   
    <div className='h-screen  w-full bg-[#F3F7EC] bg-[url("./assets/icons/nnnoise.svg")] '>
    <div className='h-[4vh]  w-full bg-black'></div>

        <div className='h-[35vh] w-full bg-[#F3F7EC] top-[20vh] relative z-10 leading-none bg-[url("./assets/icons/nnnoise.svg")] '>
        <h1 className='text-[11vh] text-black ml-[10vw]  font-["Quick_Peachy"] '>Hello,<br /> I'm Percy</h1>
            <div  className=' h-[53vh] w-full bg-[#F3F7EC] top-[5vh]  relative z-10 leading-tight bg-[url("./assets/icons/nnnoise.svg")] '>
                <h1 className='text-[4vh] text-black  font-["Radley"] ml-[10vw]'>I create my client's <i>ideas into frames</i> <br /> with  my  <b>web</b> development , <b>video</b> <br />  editing and  <b>3D</b> modeling skills.</h1>
                    <h1 className='text-[16vh] text-[#005C78] mt-[24vh] ml-[10vw]  font-["Quick_Peachy"] '>ABOUT ME</h1>

            </div>

        </div>
        <motion.div
        style={{y:parallaxY}}
        className='h-[80vh] w-[30vw] bg-[#005C78] top-[10vh] ml-[60vw] relative z-10'>
<img 
  className="absolute mt-[-3.5vh] ml-5 object-contain" 
  style={{ width: '400px', height: '600px' }} 
  src={puru} 
  alt="Your Image Description"
/>            <div className='h-[8vh] w-[11vw] bg-[#E88D67] absolute top-[18vh] ml-[-5vw] rounded-lg'></div>
            <div className='h-[8vh] w-[11vw] bg-[#E88D67]  absolute top-[-3vh] ml-[20vw] rounded-lg'></div>

            <div className="h-[53vh] w-full bg-black absolute top-[60vh]">
  <h1 className="text-[60px] text-white mt-[30px] ml-[50px] font-['Quick_Peachy']">
    PERSONAL
  </h1>
  <h1 className="text-[25px] text-white mt-[20px] ml-[50px] font-['Quick_Peachy']">
    Name: Purushottam Murmu
  </h1>
  <img className="h-[5vh] absolute top-[200px] left-[50px]" src={email} alt="Email Icon" />
  <h1 className="text-[20px] text-white mt-[30px] ml-[95px] font-['Quick_Peachy']">
    Percyjacker2002@gmail.com
  </h1>
  <img className="h-[3vh] absolute top-[260px] left-[60px]" src={whatsapp} alt="Email Icon" />

  <h1 className="text-[20px] text-white mt-[26px] ml-[95px] font-['Quick_Peachy']">
    +91 6370261378
  </h1>
</div>
        </motion.div>

    </div>
    <div className='h-screen  w-full bg-[#005C78]  '>
        <div id='about' className='h-screen w-full bg-[#005C78] bg-[url("./assets/images/Blue.svg")] flex relative leading-none'>
          <div className='h-[20vh] w-[40vw]  ml-[10vw] '>
            <h1 className='text-[10vh] text-black mt-[10vh] font-["Quick_Peachy"]  absolute '>Exprience:</h1>
          </div>
          <div className='h-[50vh] w-[5vh]   absolute mt-[25vh] ml-[6vw] ' >
            <img className='h-[4vh] w-[4vw] mt-[1vh]' src={star} alt="" />
            <img className='h-[4vh] w-[4vw] mt-[15vh]' src={star} alt="" />
            <img className='h-[4vh] w-[4vw] mt-[8vh]' src={star} alt="" />

          </div>
          {/* <div className='h-[50vh] w-[10vw] bg-slate-400  absolute mt-[25vh] ml-[10vw] ' >
            <h1 className='text-[3vh] text-[#F3F7EC] mt-[2vh] font-["Quick_Peachy"]  '>2017-18</h1>
            <h1 className='text-[3vh] text-[#F3F7EC] mt-[3vh] font-["Quick_Peachy"]  '>2019-20</h1>
            <h1 className='text-[3vh] text-[#F3F7EC] mt-[3vh] font-["Quick_Peachy"]  '>2021-25</h1>

          </div> */}
          <div className='h-[50vh] w-[65vh]   absolute mt-[25vh] ml-[10vw] ' >
          <h1 className='text-[3vh] text-[#F3F7EC] mt-[2vh] font-["Quick_Peachy"]  '>Web development</h1>

            <h1 className='text-[2.5vh] text-[#F3F7EC] mt-[1vh] font-["Radley"]'>Worked on developing and maintaining web applications using React, Tailwind CSS, Node.js, and MongoDB.</h1>
            <h1 className='text-[2.5vh] text-[#F3F7EC] mt-[1vh] font-["Radley"]'>Built an Internshala clone with front-end completed and back-end in progress.</h1>
            <h1 className='text-[3vh] text-[#F3F7EC] mt-[3vh] font-["Quick_Peachy"]  '>video editing</h1>

            <h1 className='text-[2.5vh] text-[#F3F7EC] mt-[1vh] font-["Radley"]'>Edited videos using DaVinci Resolve, focusing on color grading, transitions, and storytelling.</h1>
            <h1 className='text-[3vh] text-[#F3F7EC] mt-[3vh] font-["Quick_Peachy"]  '>3-D modeling</h1>

            <h1 className='text-[2.5vh] text-[#F3F7EC] mt-[1vh] font-["Radley"]'>Created 3D models in Blender, learning basic modeling, texturing, and rendering techniques.</h1>


            
          </div>
          <div className='h-[50vh] w-[55vh]  absolute mt-[55vh] ml-[60vw] ' ></div>
          <motion.div
           ref={ref}
           style={{y:Technical}}
          
          className='h-[60vh] w-[75vh] bg-[#E88D67]  absolute z-10 mt-[85vh] ml-[10vw] ' >
            <motion.h1 
            ref={ref}
            style={{}}
            className='text-[10vh] ml-4 text-black mt-[5vh] font-["Quick_Peachy"]  absolute'>Technical skills:
              <div className='h-[20vh] w-[23vw] ml-5'>
              <h1 className='text-[4vh] mt-[2vh] font-["Quick_Peachy"]   '>Software skills</h1>
              <div className='flex '>
              <img className='h-[5vh] mt-5' src={vscode} alt="" />
              <img className='h-[5vh] mt-5 ml-3' src={blender} alt="" />
              {/* <img className='h-[5vh] mt-5' src={procreate} alt="" /> */}
              <img className='h-[5vh]  ml-4 mt-5' src={DaVinci} alt="" />
              </div>

              </div>
              <div className="h-[20vh] w-[23vw] absolute ml-[22vw] mt-[-22vh] p-4">
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

<div className="h-[11vw] w-[60vh] mt-5  p-4">
  {/* <div className="h-[7vh] w-[15vw] bg-black rounded-full mb-4 flex items-center justify-center">
    <h1 className="text-2xl text-white font-['Radley']">#communication</h1>
  </div> */}
  
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
          <div id='work' className='h-[20vh] w-[65vh]   absolute mt-[80vh] ml-[60vw] ' >
            <h1 className='text-[16vh] text-[#F3F7EC] mt-[8vh] font-["Quick_Peachy"]  '>WORK</h1>
          </div>


{/* page3 */}
<div className='h-[50vh] w-[5vh]  absolute mt-[25vh] ml-[55vw]'>
            <img className='h-[4vh] w-[4vw] mt-[1vh]' src={star} alt="" />
            <img className='h-[4vh] w-[4vw] mt-[6vh]' src={star} alt="" />
            <img className='h-[4vh] w-[4vw] mt-[6vh]' src={star} alt="" />
</div>
          <div className='h-[20vh] w-[30vw] ml-[11vw]  relative'>
            <h1 className='text-[10vh] text-black mt-[10vh] font-["Quick_Peachy"]  absolute '>Education:</h1>
                <div className='h-[50vh] w-[30vw]  absolute mt-[25vh] ml-[vw] ' >
            <h1 className='text-[3vh] text-[#F3F7EC] mt-[2vh] font-["Quick_Peachy"]  '>2017-18</h1>
            <h1 className='text-[2.5vh] text-[#F3F7EC] mt-[1vh] font-["Radley"]'>10th from Kendriya Vidyalaya Angul</h1>

            <h1 className='text-[3vh] text-[#F3F7EC] mt-[3vh] font-["Quick_Peachy"]  '>2019-20</h1>
            <h1 className='text-[2.5vh] text-[#F3F7EC] mt-[1vh] font-["Radley"]'>12th from Kendriya Vidyalaya Surda</h1>

            <h1 className='text-[3vh] text-[#F3F7EC] mt-[3vh] font-["Quick_Peachy"]  '>2021 - present</h1>
            <h1 className='text-[2.5vh] text-[#F3F7EC] mt-[1vh] font-["Radley"]'>B.tech CSE from Sharda university</h1>

          </div>

          <div className='h-[20vh] w-[25vw] mt-[70vh] absolute  flex'>
          <img className='h-[9vh] ml-3'  src={art} alt="" />
          <img className='h-[8vh] ml-[5vw]'  src={anime} alt="" />
          <img className='h-[13vh]  mt-[-2.5vh] ml-10' src={travel} alt="" />

         


          </div>
          <div className='h-[10vh] w-[25vw] mt-[80vh] absolute '>
            <div className='flex'>
            <h1 className='text-[2.5vh] text-[#F3F7EC] mt-[1vh]  font-["Radley"]'>Digital art</h1>
          <h1 className='text-[2.5vh] text-[#F3F7EC] mt-[1vh] ml-[4vw] font-["Radley"]'>Anime</h1>
          <h1 className='text-[2.5vh] text-[#F3F7EC] mt-[1vh] ml-[4vw] font-["Radley"]'>Travel</h1>

            </div>
       



          </div>
          <h1 className='text-[10vh] text-black mt-[60vh] font-["Quick_Peachy"]  absolute '>Interests:</h1>
         




          </div>
          {/* <div className='h-[20vh] w-[20vw] bg-slate-500'></div> */}

          {/* <div className='h-[10vh] w-[10vw] bg-slate-900  '></div> */}

        </div>
    </div>
    <div className='h-[120vh]  w-full bg-[#F3F7EC] relative bg-[url("./assets/icons/nnnoise.svg")] '>
    
    
    <div className='h-[30vh] w-[60vh]   absolute mt-[5vh] ml-[60vw] ' >
      <h1 className='text-[10vh] text-black font-["Quick_Peachy"] leading-none'>What service you are looking for?</h1>
    </div>
    <motion.div 
  ref={ref}
  style={{ y: cards }}
  className="web h-[55vh] w-[40vh] bg-[#005C78] absolute mt-[50vh] ml-[10vw] rounded-lg flex flex-col items-center p-6"
>
  <img 
    className="h-[15vh] w-[10vw] mb-4" 
    src={website} 
    alt="Website Preview" 
  />

  <div className="text-4xl text-white font-['Radley'] mb-4 text-center">
    Want to build your dream website?
  </div>

  
  <motion.div 
    whileHover={{ scale: 1.1 }} 
    whileTap={{ scale: 0.95 }}
    className="h-[6vh] mt-6 w-[8vw] bg-[#E88D67] rounded-2xl flex items-center justify-center cursor-pointer"
  >
    <h1 className="text-lg text-white font-['Radley']">
    Soon..
    </h1>
  </motion.div>
</motion.div>

<motion.div
  ref={ref}
  style={{ y: cards }}
  className="h-[55vh] w-[40vh] bg-[#E88D67] absolute mt-[50vh] ml-[39vw] rounded-lg flex flex-col items-center p-6"
>
  <img
    className="h-[15vh] w-[10vw] mb-4 object-contain"
    src={youtube}
    alt="Website Preview"
  />

  <div className="text-4xl text-white font-['Radley'] mb-6 text-center">
    Want to make a video for your brand?
  </div>

  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="h-[6vh] w-[8vw] bg-black mt-4 rounded-2xl flex items-center justify-center cursor-pointer shadow-md"
  >
    <h1 className="text-lg text-white font-['Radley']">
      Soon..
    </h1>
  </motion.div>
</motion.div>

<motion.div
  ref={ref}
  style={{ y: cards }}
  className="h-[55vh] w-[40vh] bg-gradient-to-br from-[#1A1A1A] to-[#3A3A3A] absolute mt-[50vh] ml-[68vw] rounded-lg flex flex-col items-center justify-center p-6 shadow-2xl"
>
  <img
    className="h-[15vh]  w-auto mt-[-13vh] object-contain"
    src={model}
    alt="Video Preview"
  />

  <div className="text-3xl text-white font-['Radley'] mb-8 mt-5 text-center">
    Want a 3D model for your yourself?
  </div>

  <motion.div
    whileHover={{ scale: 1.1, backgroundColor: "#FF7043" }}
    whileTap={{ scale: 0.95 }}
    className="h-[6vh] w-[20vw] md:w-[8vw] mt-5 bg-[#E88D67] rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300"
  >
    <h1 className="text-lg text-white font-['Radley']">
    Soon..
    </h1>
  </motion.div>
</motion.div>

    
    </div>
    <motion.h1 
    ref={ref}
    style={{y:reviews}}
    className='text-[16vh] text-[#E88D67]  ml-[50vh] mt-[-16vh] absolute font-["Quick_Peachy"]   '>REVIEWS</motion.h1>
   
{/* page4 */}
    <div className=' h-screen w-full bg-black relative'>
<motion.div 

  style={{y:review}}
  className=' h-screen w-full absolute  bg-[#E88D67] overflow-x-hidden '>
    
    <motion.div
    
    className=' w-full h-[30vh] bg-[#E88D67] relative top-6'>
      <motion.div
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:0
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC]  rounded-2xl ml-3'></motion.div>
      <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:0.05
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC]  rounded-2xl ml-[28vw]'></motion.div>
      <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:0.1
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC]  rounded-2xl ml-[55vw]'></motion.div>
      <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:0.16
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC]  rounded-2xl ml-[82vw]'></motion.div>
       <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:1.18
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC]  rounded-2xl ml-[82vw]'></motion.div>
       <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:2.2
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC]  rounded-2xl ml-[82vw]'></motion.div>
      <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:3.19
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC]  rounded-2xl ml-[82vw]'></motion.div>
      {/* <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:3.9
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-slate-500 rounded-2xl ml-[82vw]'></motion.div> */}
      


    </motion.div>
    <div className=' w-full h-[30vh] bg-[#E88D67] relative'>
      <motion.div
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:0
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC]  rounded-2xl ml-3'></motion.div>
      <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:0.05
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC]  rounded-2xl ml-[28vw]'></motion.div>
      <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:0.1
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC]  rounded-2xl ml-[55vw]'></motion.div>
      <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:0.16
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC]  rounded-2xl ml-[82vw]'></motion.div>
       <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:1.18
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC]  rounded-2xl ml-[82vw]'></motion.div>
       <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:2.2
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC]  rounded-2xl ml-[82vw]'></motion.div>
             <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:3.19
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC]  rounded-2xl ml-[82vw]'></motion.div>
      


    </div>
    <div className=' w-full h-[30vh] bg-[#E88D67] relative'>
      <motion.div
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:0
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC]  rounded-2xl ml-3'></motion.div>
      <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:0.05
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC]  rounded-2xl ml-[28vw]'></motion.div>
      <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:0.1
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC]  rounded-2xl ml-[55vw]'></motion.div>
      <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:0.16
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC]  rounded-2xl ml-[82vw]'></motion.div>
       <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:1.18
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC]  rounded-2xl ml-[82vw]'></motion.div>
       <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:2.2
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC]  rounded-2xl ml-[82vw]'></motion.div>
             <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:3.19
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC]  rounded-2xl ml-[82vw]'></motion.div>
      

      {/* <motion.h1
      // ref={ref}
      // style={{y:contact}}
      className='text-[16vh] text-black mt-[16vh] ml-[30vw] absolute font-["Quick_Peachy"]  '>CONTACT</motion.h1> */}
    </div>
    </motion.div>

    </div>
    
    {/* </Scrollbar> */}
   
      
    </>
  )
}

export default Hero
