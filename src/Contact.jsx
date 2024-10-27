import React from 'react'
import phone from './assets/images/Group.png'
import discord from './assets/icons/discord 2.png'
import insta from './assets/icons/instagram 2.png'
import link from './assets/icons/Vector.png'
const Contact = () => {
  return (
    <div className=' h-screen w-full bg-black relative'>
        <div className='h-[80vh] w-[46vw] bg-black mt-[10vh] absolute ml-[7vw]'>
            <h1 className='text-[10vh] text-[#E88D67]  font-["Quick_Peachy"] leading-none '>Get in touch </h1>
            <h1 className='text-[10vh] text-[#F3F7EC]  font-["Quick_Peachy"] leading-none'>with us.</h1>
            <div className='logo h-[40vh] w-[30vw] ml-[7vw] mt-10 bg-black '>
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
  )
}

export default Contact