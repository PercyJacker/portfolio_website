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
import phone2 from './assets/icons/Call.svg'
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
  const aboutSection = document.getElementById("about");
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
};
  const scrolltoWork = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrolltoContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <>
    <main className="overflow-x-hidden">
      {/* page1 */}
      <div className="h-[100vh] w-full bg-slate-400 mt-[-3vh] relative text-[#005C78] leading-[20vh] overflow-x-hidden bg-[url('/assets/images/Blue.svg')]">
      <div className="h-screen w-full bg-[#005C78] relative text-[#005C78] leading-[20vh] overflow-x-hidden bg-[url('/assets/images/Blue.svg')]">
<nav className="h-[10vh] w-full bg-[#005C78] absolute top-0 z-30 bg-[url('/assets/images/Blue.svg')] left-[-15vw] sm:left-[-20vw] ">
  <div className="mt-[7vh] h-[8vh] relative top-0 flex flex-wrap items-center justify-between px-2 sm:px-4"> 
    {/* Star Logo - Smaller on Mobile */}
    <img className="h-6 w-6 sm:h-10 sm:w-10 ml-[20vw] sm:ml-[30vw]" src={star} alt="Star icon" />
    
   {/* Heading - 'PJ' on Mobile, 'Percy Jacker' on Larger Screens */}
   <h1 className="text-xl sm:text-4xl text-white font-['Quick_Peachy'] ml-[-60vw] sm:ml-[-10vw]">
  <span className="sm:hidden sm:text-4xl">PJ</span>
  <span className="hidden sm:inline">Percy Jacker</span>
</h1>

    
<div className="flex gap-[1vw] sm:gap-4 ml-[-20vw] sm:ml-[10vw]">
  <button
  onClick={() => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="h-[3vh] sm:h-[5vh] w-[10vw] sm:w-[15vh] text-xs sm:text-2xl text-white font-['Quick_Peachy'] rounded-lg flex items-center justify-center cursor-pointer shadow-lg hover:bg-[#E88D67] hover:text-black transition duration-300"
>
  About
</button>

 <button
  onClick={() => {
    window.scrollTo({
      top: window.innerHeight * 3.2,
      behavior: "smooth",
    });
  }}
  className="h-[3vh] sm:h-[5vh] w-[10vw] sm:w-[13vh] text-xs sm:text-2xl text-white font-['Quick_Peachy'] rounded-lg flex items-center justify-center cursor-pointer shadow-lg hover:bg-[#E88D67] hover:text-black transition duration-300"
>
  Work
</button>
</div>




  </div>
</nav>


     <div className="h-[23vh] w-[60vw] sm:w-[25vh] bg-[#005C78] absolute z-20 top-[50vh] 
                ml-[50vw] sm:ml-[67vw] leading-[10vh] 
                bg-[url('/assets/images/Blue.svg')] 
                max-[420px]:left-1/2 max-[420px]:-translate-x-1/2 max-[420px]:ml-0 
                flex flex-col justify-center items-center text-center">
  <h1 className="text-[3vh] sm:text-[3vh] text-[#E88D67] font-['Quick_Peachy']">
    IG: Percy_jacker
  </h1>
  <h1 className="text-[3vh] sm:text-[3vh] text-[#E88D67] font-['Quick_Peachy']">
    IG: Percy_jacker
  </h1>
</div>

          <motion.h1
            ref={ref}
            style={{ x: portfolio }}
            className="text-[12vh] sm:text-[21vh] absolute z-10 mt-[15vh] text-[#E88D67] font-['Quick_Peachy'] overflow-hidden whitespace-nowrap"
          >
            PORTFOLIO PORTFOLIO
          </motion.h1>
  <img
  className="absolute top-[25vh] left-[33%] transform -translate-x-1/2 h-[65vh] w-[40vw] 
             sm:h-[65vh] sm:w-[40vw] z-10 sm:left-1/2 sm:-translate-x-1/2 
             md:top-[25vh] md:left-[33%] md:transform md:-translate-x-1/2 md:h-[65vh] md:w-[40vw]
             max-[420px]:left-1/2 max-[420px]:-translate-x-1/2 max-[420px]:h-[40vh] max-[420px]:w-[80vw]"

              src={img1}
  alt="Example image"
  loading="eager"
/>
<div className="relative h-[70vh] w-full">
          <motion.h2
  ref={ref}
  style={{ x }}
  className="text-[12vh] sm:text-[21vh] absolute text-[#F3F7EC] mt-[33vh] z-10 font-['Quick_Peachy'] overflow-hidden whitespace-nowrap opacity-70"
>
  3D MODELING 3D MODELING
</motion.h2>
<motion.h2
              ref={ref}
              style={{ x: video }}
              className="text-[12vh] sm:text-[21vh] absolute text-[#F3F7EC] mt-[48vh] z-10 font-['Quick_Peachy'] overflow-hidden whitespace-nowrap opacity-70"
            >
              VIDEO EDITING VIDEO EDITING
            </motion.h2>
            <motion.h2
              ref={ref}
              style={{ x: three }}
              className="text-[12vh] sm:text-[21vh] absolute text-[#F3F7EC] mt-[63vh] z-10 font-['Quick_Peachy'] overflow-hidden whitespace-nowrap opacity-70"
            >
              WEB DEVELOPMENT WEB DEVELOPMENT
            </motion.h2>
    </div>

    <motion.img
      
      src={down}
      alt="Down arrow"
       className="h-[10vh] w-[10vh] absolute z-10 top-[85vh] ml-[47vw]"
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 7,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
    />

    {/* Button to scroll down */}
<button
  onClick={scrolltoContact}
  className="hidden sm:flex h-[2.5vh] sm:h-[5vh] w-[4vw] sm:w-[25vh] text-[10px] sm:text-2xl text-white absolute z-10 top-[8.5vh] font-['Quick_Peachy'] ml-[70vw] sm:ml-[80vw] bg-[#E88D67] rounded-lg items-center justify-center cursor-pointer shadow-lg hover:bg-[#d3775b] transition duration-300"
>
  Contact us
</button>

{/* Orange circle with black phone call logo */}
<div
  className="flex sm:hidden h-[5vh] w-[5vh] absolute z-10 top-[8.5vh] ml-[85vw] sm:ml-[80vw] rounded-full bg-[#d3775b]  items-center justify-center cursor-pointer shadow-lg transition duration-300"
><div
  onClick={() => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="cursor-pointer"
>
  <img src={phone2} alt="Call Icon" className="w-[2.5vh] h-[2.5vh]" />
</div>

</div>


    <div className="h-[20vh] mt-[10vh] w-full bg-black"></div>
  </div>
</div>
</main>

      {/* page2 */}
    </>
  )
}

export default Hero
