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
  const ref =useRef()
  const {scrollYProgress }= useScroll();
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => console.log(value));
    return () => unsubscribe();
  }, [scrollYProgress]);

  const scroll = new LocomotiveScroll();


  const x =useTransform(scrollYProgress,[0,0.5],['0','-25%'])
  const portfolio =useTransform(scrollYProgress,[0,0.5],['0','-10%'])
  const video =useTransform(scrollYProgress,[0,0.5],['0','-50%'])
  const three =useTransform(scrollYProgress,[0,0.5],['0','-75%'])
  const parallaxY = useTransform(scrollYProgress, [0.08, 0.4], ['0%', '-65%']); 
  const Technical = useTransform(scrollYProgress, [0.34, 0.47], ['0%', '-20%']); 
  const cards = useTransform(scrollYProgress, [0.48, 0.57], ['0%', '-20%']); 
  const review = useTransform(scrollYProgress, [0.58, 0.75], ['0%', '-100%']); 






  
  
  
  return (
    
    <>
    {/* page1 */}
    <div className=' h-[100vh] w-full bg-slate-400 mt-[-3vh] relative text-[#005C78] leading-[20vh] overflow-x-hidden bg-[url("./assets/images/Blue.svg")]'>
   
      <div className='h-screen  w-full bg-[#005C78] relative text-[#005C78] leading-[20vh] overflow-x-hidden bg-[url("./assets/images/Blue.svg")]'>
       <nav className='h-[10vh] w-full bg-[#005C78] absolute top-0 bg-[url("./assets/images/Blue.svg")]'>
       <div className='mt-[7vh] h-[8vh]  sticky top-0 flex'>
          <img className='h-10 w-10 ml-[10vw]' src={star} alt="Star icon" />
          <h1 className='text-4xl text-white ml-6 font-["Quick_Peachy"]'>Percy Jacker</h1>
          <h1 className='text-2xl text-white ml-[30vw] font-["Quick_Peachy"]'>About us</h1>
          <h1 className='text-2xl text-white ml-[5vw] font-["Quick_Peachy"]'>Work</h1>
          <button className='text-2xl text-white ml-[4vw] rounded-2xl bg-[#E88D67] h-[5vh] w-[10vw] font-["Quick_Peachy"]'>Contact us</button>
        </div>
       </nav>
        <div className='h-[23vh] w-[25vh] bg-[#005C78] absolute z-10 top-[50vh] ml-[67vw] leading-[10vh] bg-[url("./assets/images/Blue.svg")] '>
          <h1 className='text-[3vh] text-[#E88D67] font-["Quick_Peachy"] ml-3 mt-3'>IG: Percy_jacker</h1>
          <h1 className='text-[3vh] text-[#E88D67] font-["Quick_Peachy"] ml-3'>IG: Percy_jacker</h1>
        </div>
        <motion.h1 
        ref={ref}
        style={{x:portfolio}}
        className='text-[21vh] absolute z-20 mt-[15vh] text-[#E88D67] font-["Quick_Peachy"] overflow-hidden whitespace-nowrap'>PORTFOLIO PORTFOLIO</motion.h1>
        <img className='absolute top-[25vh] ml-[10vw] h-[65vh] w-[40vw] z-10' src={img1} alt="Example image" />
        <div className='relative h-[70vh] w-full  '>
             <motion.h2
             ref={ref}
             style={{x}}
             className='text-[21vh] absolute text-[#F3F7EC] mt-[33vh] font-["Quick_Peachy"] overflow-hidden whitespace-nowrap'>3D MODELING 3D MODELING</motion.h2>
             <motion.h2
             ref={ref}
             style={{x:video}}
              className='text-[21vh] absolute text-[#F3F7EC] mt-[48vh] font-["Quick_Peachy"] overflow-hidden whitespace-nowrap'>VIDEO EDITING VIDEO EDITING</motion.h2>
             <motion.h2
             ref={ref}
             style={{x:three}}
              className='text-[21vh] absolute text-[#F3F7EC] mt-[63vh] font-["Quick_Peachy"] overflow-hidden whitespace-nowrap'>WEB DEVELOPMENT WEB DEVELOPMENT</motion.h2>
        </div>
       
        <motion.img
          className='h-[10vh] w-[10vh] absolute z-10 top-[85vh] ml-[47vw]'
          src={down}
          alt="Down arrow"
          animate={{ y: [0, 20, 0] }}  // Oscillate up and down
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className='h-[20vh] mt-[10vh] w-full bg-black'></div>
      </div>

{/* page2 */}
    </div>
    <div className='h-screen  w-full bg-[#F3F7EC] bg-[url("./assets/icons/nnnoise.svg")] '>
    <div className='h-[4vh]  w-full bg-black'></div>

        <div className='h-[35vh] w-full bg-[#F3F7EC] top-[20vh] relative z-10 leading-none bg-[url("./assets/icons/nnnoise.svg")] '>
        <h1 className='text-[11vh] text-black ml-[10vw]  font-["Quick_Peachy"] '>Hello,<br /> I'm Percy</h1>
            <div className='h-[53vh] w-full bg-[#F3F7EC] top-[5vh]  relative z-10 leading-tight bg-[url("./assets/icons/nnnoise.svg")] '>
                <h1 className='text-[4vh] text-black  font-["Radley"] ml-[10vw]'>I create my client's <i>ideas into frames</i> <br /> with  my  <b>web</b> development , <b>video</b> <br />  editing and  <b>3D</b> modeling skills.</h1>
                    <h1 className='text-[16vh] text-[#005C78] mt-[24vh] ml-[10vw]  font-["Quick_Peachy"] '>ABOUT ME</h1>

            </div>

        </div>
        <motion.div
        style={{y:parallaxY}}
        className='h-[90vh] w-[30vw] bg-[#005C78] top-[10vh] ml-[60vw] relative z-10'>
            <div className='h-[8vh] w-[11vw] bg-[#E88D67] absolute top-[18vh] ml-[-5vw] rounded-lg'></div>
            <div className='h-[8vh] w-[11vw] bg-[#E88D67]  absolute top-[-3vh] ml-[17vw] rounded-lg'></div>

            <div className=' h-[60vh] w-full bg-black  absolute top-[50vh] '></div>
        </motion.div>

    </div>
    <div className='h-screen  w-full bg-[#005C78]  '>
        <div className='h-screen w-full bg-[#005C78] bg-[url("./assets/images/Blue.svg")] flex relative leading-none'>
          <div className='h-[20vh] w-[40vw] bg-slate-500 ml-[10vw] '>
            <h1 className='text-[10vh] text-black mt-[10vh] font-["Quick_Peachy"]  absolute '>Education:</h1>
          </div>
          <div className='h-[50vh] w-[5vh] bg-slate-400  absolute mt-[25vh] ml-[10vw] ' >
            <img src={star} alt="" />
          </div>
          <div className='h-[50vh] w-[10vw] bg-slate-400  absolute mt-[25vh] ml-[15vw] ' >
            <h1 className='text-[5vh] text-[#F3F7EC] mt-[1vh] font-["Quick_Peachy"]  '>2017-18</h1>
            <h1 className='text-[5vh] text-[#F3F7EC] mt-[1vh] font-["Quick_Peachy"]  '>2019-20</h1>
            <h1 className='text-[5vh] text-[#F3F7EC] mt-[1vh] font-["Quick_Peachy"]  '>2019-20</h1>

          </div>
          <div className='h-[50vh] w-[45vh] bg-slate-400  absolute mt-[25vh] ml-[26vw] ' >
            <h1 className='text-[4vh] text-[#F3F7EC] mt-[1vh] font-["Ramaraja"]'>Kendriya Vidyalaya Angul</h1>
            <h1 className='text-[4vh] text-[#F3F7EC] mt-[1vh] font-["Radley"]'>Kendriya Vidyalaya Angul</h1>
            <h1 className='text-[4vh] text-[#F3F7EC] mt-[1vh] font-["Ramaraja"]'>Kendriya Vidyalaya Angul</h1>
            <h1 className='text-[4vh] text-[#F3F7EC] mt-[1vh] font-["Ramaraja"]'>Kendriya Vidyalaya Angul</h1>


            
          </div>
          <div className='h-[50vh] w-[55vh] bg-slate-400  absolute mt-[55vh] ml-[60vw] ' ></div>
          <motion.div
           ref={ref}
           style={{y:Technical}}
          
          className='h-[60vh] w-[75vh] bg-[#E88D67]  absolute z-10 mt-[85vh] ml-[10vw] ' >
            <motion.h1 
            ref={ref}
            style={{}}
            className='text-[10vh] ml-4 text-black mt-[10vh] font-["Quick_Peachy"]  absolute'>Technical skills:</motion.h1>
          </motion.div>
          <div className='h-[20vh] w-[65vh] bg-slate-400  absolute mt-[80vh] ml-[60vw] ' >
            <h1 className='text-[16vh] text-[#F3F7EC] mt-[8vh] font-["Quick_Peachy"]  '>WORK</h1>
          </div>


{/* page3 */}

          <div className='h-[20vh] w-[30vw] bg-slate-500 ml-[10vw] relative'>
            <h1 className='text-[11vh] text-black mt-[10vh] font-["Quick_Peachy"]  absolute '>Exprience:</h1>
          </div>

        </div>
    </div>
    <div className='h-[120vh]  w-full bg-[#F3F7EC] relative bg-[url("./assets/icons/nnnoise.svg")] '>
    
    
    <div className='h-[30vh] w-[60vh] bg-slate-400  absolute mt-[5vh] ml-[60vw] ' >
      <h1 className='text-[10vh] text-black font-["Quick_Peachy"] leading-none'>What service you are looking for?</h1>
    </div>
    <motion.div 
    ref={ref}
    style={{y:cards}}
    className='h-[55vh] w-[45vh] bg-slate-400  absolute mt-[50vh] ml-[10vw] rounded-lg '></motion.div>
    <motion.div
    ref={ref}
    style={{y:cards}}
    className='h-[55vh] w-[45vh] bg-slate-400  absolute mt-[50vh] ml-[39vw] rounded-lg '></motion.div>
    <motion.div
    ref={ref}
    style={{y:cards}}
    className='h-[55vh] w-[45vh] bg-slate-400  absolute mt-[50vh] ml-[68vw] rounded-lg '></motion.div>




    
    </div>
    <h1 className='text-[16vh] text-[#E88D67]  ml-[60vh] mt-[-16vh] absolute font-["Quick_Peachy"]  '>REVIEWS</h1>
   
{/* page4 */}

    <div 
   data-scroll
   data-scroll-section
   data-scroll-speed='-.8'
  className=' h-screen w-full bg-[#E88D67] overflow-x-hidden '>
    <motion.div
    ref={ref}
    style={{review}}
    className=' w-full h-[30vh] bg-[#E88D67] relative'>
      <motion.div
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:0
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-slate-500 rounded-2xl ml-3'></motion.div>
      <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:0.05
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-slate-500 rounded-2xl ml-[28vw]'></motion.div>
      <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:0.1
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-slate-500 rounded-2xl ml-[55vw]'></motion.div>
      <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:0.16
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-slate-500 rounded-2xl ml-[82vw]'></motion.div>
       <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:1.18
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-slate-500 rounded-2xl ml-[82vw]'></motion.div>
       <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:2.2
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-slate-500 rounded-2xl ml-[82vw]'></motion.div>
             <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:3.19
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-slate-500 rounded-2xl ml-[82vw]'></motion.div>
      


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
      className='h-[25vh] w-[26vw] absolute top-5 bg-slate-500 rounded-2xl ml-3'></motion.div>
      <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:0.05
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-slate-500 rounded-2xl ml-[28vw]'></motion.div>
      <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:0.1
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-slate-500 rounded-2xl ml-[55vw]'></motion.div>
      <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:0.16
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-slate-500 rounded-2xl ml-[82vw]'></motion.div>
       <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:1.18
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-slate-500 rounded-2xl ml-[82vw]'></motion.div>
       <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:2.2
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-slate-500 rounded-2xl ml-[82vw]'></motion.div>
             <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:3.19
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-slate-500 rounded-2xl ml-[82vw]'></motion.div>
      


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
      className='h-[25vh] w-[26vw] absolute top-5 bg-slate-500 rounded-2xl ml-3'></motion.div>
      <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:0.05
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-slate-500 rounded-2xl ml-[28vw]'></motion.div>
      <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:0.1
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-slate-500 rounded-2xl ml-[55vw]'></motion.div>
      <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:0.16
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-slate-500 rounded-2xl ml-[82vw]'></motion.div>
       <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:1.18
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-slate-500 rounded-2xl ml-[82vw]'></motion.div>
       <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:2.2
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-slate-500 rounded-2xl ml-[82vw]'></motion.div>
             <motion.div 
      initial={{ x: '100vw' }}
      animate={{ x: '-100vw' }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 7,
        delay:3.19
      }}
      className='h-[25vh] w-[26vw] absolute top-5 bg-slate-500 rounded-2xl ml-[82vw]'></motion.div>
      

      <h1 className='text-[16vh] text-black mt-[14vh] ml-[30vw] absolute font-["Quick_Peachy"]  '>CONTACT</h1>
    </div>
    </div>
    <div className=' h-screen w-full bg-black relative'>
        <div className='h-[80vh] w-[46vw] bg-black mt-[10vh] absolute ml-[7vw]'>
            <h1 className='text-[10vh] text-[#E88D67]  font-["Quick_Peachy"] leading-none '>Get in touch </h1>
            <h1 className='text-[10vh] text-[#F3F7EC]  font-["Quick_Peachy"] leading-none'>with us.</h1>
            <div className='logo h-[50vh] w-[30vw] ml-[7vw] mt-10 bg-black '>
                <img className='h-[35vh] w-[60vw]' src={phone} alt="" />
            </div>
            <div className='h-[10vh] w-[30vh] mt-2 bg-black'>
                <h1 className='text-[3vh]  font-["Radley"]  text-white'>Other links are :</h1>
                <div className='flex space-x-4'>
                <img src={discord} alt="" />
                <img src={insta} alt="" />
                <img src={link} alt="" />

                </div>

            </div>
        </div>
        <div className='h-[80vh] w-[46vw] bg-black mt-[10vh] absolute ml-[55vw]'>
            <div className='h-[10vh] w-[40vw] bg-[#F3F7EC] mt-[1vh] rounded-lg ml-[1vw] '></div>
            <div className='h-[10vh] w-[40vw] bg-[#F3F7EC] mt-[1vh] rounded-lg ml-[1vw]'></div>
            <div className='h-[10vh] w-[40vw] bg-[#F3F7EC] mt-[1vh] rounded-lg ml-[1vw]'></div>
            <div className='h-[20vh] w-[40vw] bg-[#F3F7EC] mt-[1vh] rounded-lg ml-[1vw]'></div>
            <div className='h-[8vh] w-[10vw] bg-[#E88D67] mt-[3vh] rounded-2xl ml-[1vw] relative'>
            <h1 className='text-3xl  font-["Radley"] ml-[1vw] absolute mt-3  text-black'>Fill form</h1>
            <div className='h-[10vh] w-[30vw] bg-black mt-[1vh] rounded-lg ml-[11vw]'>
                <h1 className='text-xl font-["Radley"] ml-[1vw]  text-white'>Fill this google form according to your ideal website. </h1>

            </div>

            </div>
            <div className='h-[8vh] w-[10vw] bg-[#E88D67] mt-[2vh] rounded-2xl ml-[1vw] relative'>
            <h1 className='text-3xl  font-["Radley"] ml-[1.5vw] font-thin absolute mt-3  text-black'>Submit</h1>
            </div>

        </div>
    </div>
      
    </>
  )
}

export default Hero
