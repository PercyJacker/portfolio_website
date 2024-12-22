import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import phone from './assets/images/Group.png'
import discord from './assets/icons/discord 2.png'
import insta from './assets/icons/instagram 2.png'
import link from './assets/icons/Vector.png'

import LocomotiveScroll from 'locomotive-scroll';
import PhoneInput from 'react-phone-input-2'
import './style/style.css';
import emailjs from '@emailjs/browser'
import website from './assets/icons/domain.png'

import "react-phone-input-2/lib/style.css";





// const contactRef = useRef(null);

const Contact = () => {
    const ref =useRef()
    const {scrollYProgress }= useScroll();
    useEffect(() => {
      const unsubscribe = scrollYProgress.onChange((value) => console.log(value));
      return () => unsubscribe();
    }, [scrollYProgress]);
  
    // const scroll = new LocomotiveScroll();
    const smootherRef = useRef(null);
  
  
    // useEffect(() => {
    //   gsap.registerPlugin(ScrollSmoother);
    //   ScrollSmoother.create({
    //     content: smootherRef.current,
    //     smooth: 1, // Smoothness level (1 = smooth, 0 = no smoothing)
    //   });
    // }, []);
  
  
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
    
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent default form submission behavior
  
      // Validate phone number before submitting
      if (!valid) {
        alert('Please enter a valid 10-digit phone number.');
        return;
      }
  
      emailjs
      .sendForm('service_jmb09ry', 'template_13dwfrb', form.current, {
        publicKey: 'p66jkoEcTjo8MqeFm',
      })
      .then(
        (result) => {
          console.log('Success:', result.text);
          alert('Form submitted successfully!');
        },
        (error) => {
          console.error('Error details:', error);
          alert(`Form submission failed. Error: ${error.text}`);
        }
      );
        }
  
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
    <div className=' h-[90vh] w-full  relative  bg-black '>
      <motion.div
      // style={{y:contacts}}
      className=' h-screen w-full absolute top-[-10vh]'>
       <motion.div
    //   style={{y:contacts}}
       className=' h-[100vh] w-full  bg-black relative'>
        <motion.h1
      // ref={ref}
      // style={{y:contact}}
      className='text-[16vh] text-black mt-[-22vh] ml-[30vw] absolute font-["Quick_Peachy"]  '>CONTACT</motion.h1>
        <motion.div
        // ref={ref}
        // style={{y:contacts}}
        ref={contactRef}
      id='contact-section'
        className='h-[80vh] w-[46vw] bg-black mt-[10vh] absolute ml-[7vw]'>
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
        </motion.div>
        <form ref={form} onSubmit={handleSubmit} className='h-[80vh] w-[40vw] bg-black mt-[10vh] absolute ml-[55vw]'>
  
  {/* Name Input */}
  <div className='h-[10vh] w-[40vw] bg-[#F3F7EC] mt-[1vh] rounded-lg ml-[1vw]'>
    <input
      className='h-[10vh] w-[40vw] bg-[#F3F7EC] text-3xl rounded-lg font-["Radley"]'
      type='text'
      name='user_name'
      placeholder='Name...'
      required
    />
  </div>

  {/* Email Input */}
  <div className='h-[10vh] w-[40vw] bg-[#F3F7EC] mt-[1vh] rounded-lg ml-[1vw]'>
    <input
      className='h-[10vh] w-[40vw] bg-[#F3F7EC] text-3xl rounded-lg font-["Radley"]'
      type='email'
      name='user_email'
      placeholder='Email...'
      required
    />
  </div>

  {/* Phone Input */}
<<<<<<< HEAD
  <div className='container h-[10vh] w-[40vw] bg-[#F3F7EC] mt-2 ml-4 text-6xl rounded-lg font-["Quick_Peachy"] flex items-center'>
  <label className='label flex items-center w-full h-full bg-[#F3F7EC] rounded-lg'>
    <PhoneInput
      country={'in'}
      value={PhoneNumber}
      onChange={handleChange}
      inputProps={{ required: true }}
      separateDialCode={true}
      buttonClass='custom-flag-dropdown'
      dropdownStyle={{
        width: '12rem',
        fontSize: '0.75rem',
      }}
      inputStyle={{
        height: '100%',
        width: '100%',
        fontSize: '35px',
        paddingLeft: '3rem', // Adjust padding to ensure proper spacing
        padding: '8px',
        border: 'none',
        outline: 'none',
        fontFamily: 'Quick_Peachy',
      }}
      containerStyle={{
        display: 'flex',
        alignItems: 'center',
      }}
      buttonStyle={{
        position: 'absolute',
        left: '1rem', // Move the dial code left
        zIndex: 10,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        background: 'none',
      }}
    />
  </label>
</div>
=======
  <div className='container h-[10vh] w-[40vw] bg-[#F3F7EC] mt-2 ml-4 text-6xl rounded-lg font-["Quick_Peachy"]'>
    <label className='label h-[10vh] w-[40vw] flex items-center justify-center bg-[#F3F7EC] rounded-lg'>
      <PhoneInput
        country={'in'}
        value={PhoneNumber}
        onChange={handleChange}
        inputProps={{ required: true }}
        separateDialCode={true}
        buttonClass='custom-flag-dropdown'
        dropdownStyle={{
          width: '12rem',
          fontSize: '0.75rem',
        }}
        inputStyle={{
          height: '100%',
          width: 'calc(100% - 4rem)',
          fontSize: '35px',
          paddingLeft: '4rem',
          padding: '8px',
          border: 'none',
          outline: 'none',
          fontFamily: 'Quick_Peachy',
        }}
      />
    </label>
  </div>
>>>>>>> 81606dc205a6e942a02309c6f91022d94df174d7

  {/* Message Input */}
  <div className='h-[20vh] w-[40vw] bg-[#F3F7EC] mt-[1vh] rounded-lg ml-[1vw] overflow-hidden'>
    <article className='h-full w-full break-words overflow-hidden p-2 text-2xl font-["Radley"]'>
      <textarea
        name='message'
        className='h-[20vh] w-full break-words border-none outline-none p-2 text-ellipsis bg-[#F3F7EC]'
        placeholder='Type your message here...'
        required
      />
    </article>
  </div>

  {/* Submit Button */}
  <button
    type='submit'
    className='h-[6vh] w-[10vw] bg-[#E88D67] mt-[3vh] rounded-2xl ml-[1vw] relative'
  >
    <h1 className='text-3xl font-["Radley"] ml-[1.5vw] font-thin absolute mt-[-2vh] text-black'>
      Submit
    </h1>
  </button>
</form>


    </motion.div> 
      </motion.div>
 


    </div>
  )
}

export default Contact
