import React from 'react'

const About = () => {
  return (
    <>
    <div className='h-screen  w-full bg-[#F3F7EC] '>
        <div className='h-[35vh] w-full bg-[#F3F7EC] top-[20vh] relative z-10 leading-none'>
        <h1 className='text-[11vh] text-black ml-[10vw]  font-["Quick_Peachy"] '>Hello,<br /> I'm Percy</h1>
            <div className='h-[53vh] w-full bg-[#F3F7EC] top-[5vh]  relative z-10 leading-tight'>
                <h1 className='text-[4vh] text-black  font-["Radley"] ml-[10vw]'>I create my client's ideas into frames <br /> with my web development , video<br />  editing and 3D modeling skills.</h1>
                    <h1 className='text-[16vh] text-[#005C78] mt-[24vh] ml-[10vw]  font-["Quick_Peachy"] '>ABOUT ME</h1>

            </div>

        </div>
        <div className='h-[90vh] w-[25vw] bg-[#005C78] top-[10vh] ml-[63vw] relative z-10'>
            <div className='h-[8vh] w-[11vw] bg-[#E88D67] absolute top-[18vh] ml-[-5vw] rounded-lg'></div>
            <div className='h-[8vh] w-[11vw] bg-[#E88D67]  absolute top-[-3vh] ml-[17vw] rounded-lg'></div>

            <div className=' h-[40vh] w-full bg-black  absolute top-[50vh] '></div>
        </div>

    </div>
    <div className='h-screen  w-full bg-[#005C78]  '>
        <div className='h-screen w-full bg-[#005C78] t relative leading-none'></div>
    </div>
    
    </>
    
  )
}

export default About