import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import star from './assets/icons/star.svg'
import img1 from './assets/images/img1.png'
import down from './assets/icons/Adown.svg'
import Blue from './assets/images/Blue.svg'
import phone from './assets/images/Group.png'
import discord from './assets/icons/discord 2.png'
import insta from './assets/icons/instagram 2.png'
import link from './assets/icons/Vector.png'
import LocomotiveScroll from 'locomotive-scroll';

const Hero = () => {
  const ref = useRef()
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => console.log(value));
    return () => unsubscribe();
  }, [scrollYProgress]);

  const scroll = new LocomotiveScroll();

  const x = useTransform(scrollYProgress, [0, 0.5], ['0', '-25%'])
  const portfolio = useTransform(scrollYProgress, [0, 0.5], ['0', '-10%'])
  const video = useTransform(scrollYProgress, [0, 0.5], ['0', '-50%'])
  const three = useTransform(scrollYProgress, [0, 0.5], ['0', '-75%'])
  const parallaxY = useTransform(scrollYProgress, [0.08, 0.4], ['0%', '-65%']); 
  const Technical = useTransform(scrollYProgress, [0.34, 0.47], ['0%', '-20%']); 
  const cards = useTransform(scrollYProgress, [0.48, 0.57], ['0%', '-20%']); 
  const review = useTransform(scrollYProgress, [0.58, 0.75], ['0%', '-100%']); 

  // Scroll down function
  const scrollDown = () => {
    const contactSection = document.getElementById('contact-section');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrolltoAbout = () => {
    const aboutSection = document.getElementById('about'); // Ensure your "About" section has this ID
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrolltoWork = () => {
    const aboutSection = document.getElementById('work'); // Ensure your "About" section has this ID
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      {/* page1 */}
      <div className="h-[100vh] w-full bg-slate-400 mt-[-3vh] relative text-[#005C78] leading-[20vh] overflow-x-hidden bg-[url('./assets/images/Blue.svg')]">
  <div className="h-screen w-full bg-[#005C78] relative text-[#005C78] leading-[20vh] overflow-x-hidden bg-[url('./assets/images/Blue.svg')]">
    <nav className="h-[10vh] w-full bg-[#005C78] absolute top-0 bg-[url('./assets/images/Blue.svg')]">
      <div className="mt-[7vh] h-[8vh] relative top-0 flex flex-wrap items-center justify-between px-4">
        <img className="h-10 w-10" src={star} alt="Star icon" />
        <h1 className="text-2xl sm:text-4xl text-white font-['Quick_Peachy']">Percy Jacker</h1>
        <div className="flex gap-4">
          <button
            onClick={scrolltoAbout}
            className="h-[5vh] sm:w-[15vh] w-[40vw] text-2xl text-white font-['Quick_Peachy'] rounded-xl flex items-center justify-center cursor-pointer shadow-lg hover:bg-[#d3775b] transition duration-300"
          >
            About Me
          </button>

          <button
            onClick={scrolltoWork}
            className="h-[5vh] sm:w-[13vh] w-[40vw] text-2xl text-white font-['Quick_Peachy'] rounded-xl flex items-center justify-center cursor-pointer shadow-lg hover:bg-[#d3775b] transition duration-300"
          >
            Work
          </button>
        </div>
      </div>
    </nav>

    <div className="h-[23vh] w-[60vw] sm:w-[25vh] bg-[#005C78] absolute z-10 top-[50vh] ml-[50vw] sm:ml-[67vw] leading-[10vh] bg-[url('./assets/images/Blue.svg')]">
      <h1 className="text-[3vh] sm:text-[3vh] text-[#E88D67] font-['Quick_Peachy'] ml-3 mt-3">IG: Percy_jacker</h1>
      <h1 className="text-[3vh] sm:text-[3vh] text-[#E88D67] font-['Quick_Peachy'] ml-3">IG: Percy_jacker</h1>
    </div>

    <motion.h1
      ref={ref}
      style={{ x: portfolio }}
      className="text-[12vh] sm:text-[21vh] absolute z-20 mt-[15vh] text-[#E88D67] font-['Quick_Peachy'] overflow-hidden whitespace-nowrap"
    >
      PORTFOLIO PORTFOLIO
    </motion.h1>
    <img
  className="absolute top-[25vh] left-1/2 transform -translate-x-1/2 h-[65vh] w-[40vw] sm:h-[65vh] sm:w-[40vw] z-10"
  src={img1}
  alt="Example image"
/>
    <div className="relative h-[70vh] w-full">
      <motion.h2
        ref={ref}
        style={{ x }}
        className="text-[12vh] sm:text-[21vh] absolute text-[#F3F7EC] mt-[33vh] font-['Quick_Peachy'] overflow-hidden whitespace-nowrap"
      >
        3D MODELING 3D MODELING
      </motion.h2>
      <motion.h2
        ref={ref}
        style={{ x: video }}
        className="text-[12vh] sm:text-[21vh] absolute text-[#F3F7EC] mt-[48vh] font-['Quick_Peachy'] overflow-hidden whitespace-nowrap"
      >
        VIDEO EDITING VIDEO EDITING
      </motion.h2>
      <motion.h2
        ref={ref}
        style={{ x: three }}
        className="text-[12vh] sm:text-[21vh] absolute text-[#F3F7EC] mt-[63vh] font-['Quick_Peachy'] overflow-hidden whitespace-nowrap"
      >
        WEB DEVELOPMENT WEB DEVELOPMENT
      </motion.h2>
    </div>

    <motion.img
      className="h-[10vh] w-[10vh] absolute z-10 top-[85vh] ml-[47vw]"
      src={down}
      alt="Down arrow"
      animate={{ y: [0, 20, 0] }}  // Oscillate up and down
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />

    {/* Button to scroll down */}
    <button
      onClick={scrollDown}
      className="h-[5vh] w-[15vh] sm:w-[15vh] w-[40vw] text-2xl text-white absolute z-10 top-[7vh] font-['Quick_Peachy'] ml-[77vw] sm:ml-[80vw] bg-[#E88D67] rounded-xl flex items-center justify-center cursor-pointer shadow-lg hover:bg-[#d3775b] transition duration-300"
    >
      Contact us
    </button>

    <div className="h-[20vh] mt-[10vh] w-full bg-black"></div>
  </div>
</div>


      {/* page2 */}
    </>
  )
}

export default Hero
