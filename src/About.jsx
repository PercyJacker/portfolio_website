import React, { useState } from 'react';

const About = () => {
  // State to manage background color
  const [bgColor, setBgColor] = useState('#F3F7EC'); // Default color

  // Function to change the background color
  const changeBackgroundColor = () => {
    setBgColor('#6A0DAD'); // Purple color
  };

  // Function to scroll down to a specific position
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight, // Scroll down by one screen height
      behavior: 'smooth', // Smooth scrolling
    });
  };

  return (
    <>
      <div className='h-screen w-full' style={{ backgroundColor: bgColor }}>
        <div className='h-[35vh] w-full' style={{ backgroundColor: bgColor }} top='[20vh]' relative='z-10' leading='none'>
          <h1 className='text-[11vh] text-black ml-[10vw] font-["Quick_Peachy"]'>
            Hello,<br /> I'm Percy
          </h1>
          <div className='h-[53vh] w-full' style={{ backgroundColor: bgColor }} top='[5vh]' relative='z-10' leading='tight'>
            <h1 className='text-[4vh] text-black font-["Radley"] ml-[10vw]'>
              I create my client's ideas into frames <br /> with my web development, video<br /> editing, and 3D modeling skills.
            </h1>
            <h1 className='text-[16vh] text-[#005C78] mt-[24vh] ml-[10vw] font-["Quick_Peachy"]'>
              ABOUT ME
            </h1>
          </div>
        </div>

        <div className='h-[90vh] w-[25vw] bg-[#005C78] top-[10vh] ml-[63vw] relative z-10'>
          <div className='h-[8vh] w-[11vw] bg-[#E88D67] absolute top-[18vh] ml-[-5vw] rounded-lg'></div>
          <div className='h-[8vh] w-[11vw] bg-[#E88D67] absolute top-[-3vh] ml-[17vw] rounded-lg'></div>
          <div className='h-[40vh] w-full bg-black absolute top-[50vh]'></div>
        </div>
      </div>

      <div className='h-screen w-full bg-[#005C78]'>
        <div className='h-screen w-full bg-[#005C78] relative leading-none'></div>
      </div>

      {/* Button to scroll down */}
      <button
        onClick={scrollToNextSection} // Scroll down on click
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '10px 20px',
          backgroundColor: '#E88D67',
          color: 'white',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Scroll Down
      </button>

      {/* Button to change background color */}
      <button
        onClick={changeBackgroundColor}
        style={{
          position: 'fixed',
          bottom: '70px',
          right: '20px',
          padding: '10px 20px',
          backgroundColor: '#E88D67',
          color: 'white',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Change Background to Purple
      </button>
    </>
  );
};

export default About;
