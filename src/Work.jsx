import React from 'react'
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
import puru from "./assets/images/Subject.jpg"
import whatsapp from "./assets/images/whatsapp-white-icon.png"
import email from "./assets/images/Subject 2.png"
import cv from "./assets/images/resume.pdf"
import "react-phone-input-2/lib/style.css"
import "./style/style.css"
import emailjs from "@emailjs/browser"
import website from "./assets/icons/image 3.png"
import model from "./assets/icons/image 2.png"
import youtube from "./assets/icons/image 4.png"

const Work = () => {
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
    const Technicalparallax = useTransform(scrollYProgress, [0.47, 0.77], ["0%", "-50%"])

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

  const cardsParallax = useTransform(scrollYProgress, [0.8, 0.96], ["0%", "-35%"])
  const reviewsParallax = useTransform(scrollYProgress, [0.7, 0.96], ["0%", "-30%"])

  return(
<>
 {/* Mobile Services Section */}
      <div className='md:hidden w-full bg-[#F3F7EC] bg-[url("./assets/icons/nnnoise.svg")] overflow-hidden'>
        <div className="px-6 py-12">
          <div className="mb-8">
            <h2 className="text-4xl font-['Quick_Peachy'] text-black">What service you are looking for?</h2>
          </div>

          <div className="space-y-6">
            <motion.div style={{ y: cardsParallax }} className="bg-[#005C78] p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img src={website || "/placeholder.svg"} alt="Website" className="w-16 h-16 mr-4" />
                <h3 className="text-2xl text-white font-['Radley']">Want to build your dream website?</h3>
              </div>
              <motion.a
                href="https://github.com/PercyJacker"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#E88D67] text-white px-6 py-2 font-['Radley'] rounded-full w-full text-center block"
              >
                Soon..
              </motion.a>
            </motion.div>

            <motion.div style={{ y: cardsParallax }} className="bg-[#E88D67] p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img src={youtube || "/placeholder.svg"} alt="Video" className="w-16 h-16 mr-4" />
                <h3 className="text-2xl text-white font-['Radley']">Want to make a video for your brand?</h3>
              </div>
              <motion.a
                href="https://ytjobs.co/talent/profile/167383?r=895"
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#005C78] text-white px-6 py-2 font-['Radley'] rounded-full w-full text-center block text-lg"
              >
                Click here
              </motion.a>
            </motion.div>

            <motion.div style={{ y: cardsParallax }} className="bg-gradient-to-br from-[#1A1A1A] to-[#3A3A3A] p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img src={model || "/placeholder.svg"} alt="3D Model" className="w-16 h-16 mr-4" />
                <h3 className="text-2xl text-white font-['Radley']">Want a 3D model for yourself?</h3>
              </div>
              <motion.a
                href="https://example.com/3d-models"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#E88D67] text-white px-6 py-2 font-['Radley'] rounded-full w-full text-center block"
              >
                Soon..
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.h1
        ref={ref}
        style={{ y: reviews }}
        className='text-[16vh] text-[#E88D67] ml-[55vh] mt-[-16vh] absolute font-["Quick_Peachy"] hidden md:block'
      >
        REVIEWS
      </motion.h1>

      {/* page4 */}
      <div className="h-[83vh] w-full  relative hidden md:block z-20">
        <motion.div style={{ y: review }} className="h-screen w-full absolute bg-[#E88D67] overflow-x-hidden ">
          <motion.div className="w-full h-[30vh] bg-[#E88D67] relative top-6">
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: "-100vw" }}
              transition={{
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                duration: 7,
                delay: 0,
              }}
              className="h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC] rounded-2xl ml-3"
            ></motion.div>
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: "-100vw" }}
              transition={{
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                duration: 7,
                delay: 0.05,
              }}
              className="h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC] rounded-2xl ml-[28vw]"
            ></motion.div>
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: "-100vw" }}
              transition={{
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                duration: 7,
                delay: 0.1,
              }}
              className="h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC] rounded-2xl ml-[55vw]"
            ></motion.div>
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: "-100vw" }}
              transition={{
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                duration: 7,
                delay: 0.16,
              }}
              className="h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC] rounded-2xl ml-[82vw]"
            ></motion.div>
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: "-100vw" }}
              transition={{
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                duration: 7,
                delay: 1.18,
              }}
              className="h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC] rounded-2xl ml-[82vw]"
            ></motion.div>
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: "-100vw" }}
              transition={{
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                duration: 7,
                delay: 2.2,
              }}
              className="h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC] rounded-2xl ml-[82vw]"
            ></motion.div>
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: "-100vw" }}
              transition={{
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                duration: 7,
                delay: 3.19,
              }}
              className="h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC] rounded-2xl ml-[82vw]"
            ></motion.div>
          </motion.div>
          <div className="w-full h-[30vh] bg-[#E88D67] relative">
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: "-100vw" }}
              transition={{
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                duration: 7,
                delay: 0,
              }}
              className="h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC] rounded-2xl ml-3"
            ></motion.div>
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: "-100vw" }}
              transition={{
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                duration: 7,
                delay: 0.05,
              }}
              className="h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC] rounded-2xl ml-[28vw]"
            ></motion.div>
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: "-100vw" }}
              transition={{
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                duration: 7,
                delay: 0.1,
              }}
              className="h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC] rounded-2xl ml-[55vw]"
            ></motion.div>
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: "-100vw" }}
              transition={{
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                duration: 7,
                delay: 0.16,
              }}
              className="h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC] rounded-2xl ml-[82vw]"
            ></motion.div>
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: "-100vw" }}
              transition={{
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                duration: 7,
                delay: 1.18,
              }}
              className="h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC] rounded-2xl ml-[82vw]"
            ></motion.div>
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: "-100vw" }}
              transition={{
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                duration: 7,
                delay: 2.2,
              }}
              className="h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC] rounded-2xl ml-[82vw]"
            ></motion.div>
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: "-100vw" }}
              transition={{
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                duration: 7,
                delay: 3.19,
              }}
              className="h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC] rounded-2xl ml-[82vw]"
            ></motion.div>
          </div>
          <div className="w-full h-[30vh] bg-[#E88D67] relative">
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: "-100vw" }}
              transition={{
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                duration: 7,
                delay: 0,
              }}
              className="h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC] rounded-2xl ml-3"
            ></motion.div>
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: "-100vw" }}
              transition={{
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                duration: 7,
                delay: 0.05,
              }}
              className="h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC] rounded-2xl ml-[28vw]"
            ></motion.div>
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: "-100vw" }}
              transition={{
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                duration: 7,
                delay: 0.1,
              }}
              className="h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC] rounded-2xl ml-[55vw]"
            ></motion.div>
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: "-100vw" }}
              transition={{
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                duration: 7,
                delay: 0.16,
              }}
              className="h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC] rounded-2xl ml-[82vw]"
            ></motion.div>
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: "-100vw" }}
              transition={{
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                duration: 7,
                delay: 1.18,
              }}
              className="h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC] rounded-2xl ml-[82vw]"
            ></motion.div>
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: "-100vw" }}
              transition={{
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                duration: 7,
                delay: 2.2,
              }}
              className="h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC] rounded-2xl ml-[82vw]"
            ></motion.div>
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: "-100vw" }}
              transition={{
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                duration: 7,
                delay: 3.19,
              }}
              className="h-[25vh] w-[26vw] absolute top-5 bg-[#F3F7EC] rounded-2xl ml-[82vw]"
            ></motion.div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Reviews Section */}
      <div className="md:hidden">
        <motion.h2
          // style={{ y: reviewsParallax }}
          className="text-8xl font-['Quick_Peachy'] text-[#E88D67] text-center py-0 relative z-10"
        >
          REVIEWS
        </motion.h2>

        <section className="w-full h-[50vh] bg-black relative overflow-hidden min-h-[80vh] bg-[url('./assets/icons/vintage-texture.png')] bg-blend-multiply bg-cover bg-center">
          <motion.div style={{ y: reviewsParallax }} className="absolute inset-0 bg-[#E88D67] overflow-hidden z-20">
            {/* Animated review cards */}
            {[0, 1, 2].map((row) => (
              <div key={row} className="h-1/3 w-full relative">
                <div className="absolute inset-0 flex space-x-4 space-y-[-5vh] animate-marquee">
                  {[0, 1, 2, 3, 4].map((card) => (
                    <motion.div key={card} style={{ y: reviewsParallax }} className="h-4/6 w-48 flex-shrink-0 bg-[#F3F7EC] rounded-xl my-auto shadow-inner border border-[#d4c4b0]"></motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </section>
      </div>
</>
  )
}

export default Work;