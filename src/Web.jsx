import React from 'react'
import star from './assets/icons/star.svg'


const Web = () => {
  return (
    <>
    {/* page1 */}
    <div className='  h-[140vh] w-full bg-slate-500 relative '>
    <div className="flex space-x-[3vw] p-4 absolute">
      {/* Left Column */}
      <div className="flex flex-col space-y-[3vh] w-1/2 rounded-lg">
        <div className="bg-black h-[30vh] w-[25vw]">Box 1</div>
        <div className="bg-black h-[30vh]">Box 2</div>
        <div className="bg-black h-[30vh]">Box 3</div>
        <div className="bg-black h-[30vh]">Box 4</div>
      </div>
      {/* Right Column */}
      <div className="flex flex-col space-y-[3vh] w-1/2">
        <div className="bg-black h-[30vh] w-[25vw]">Box A</div>
        <div className="bg-black h-[30vh]">Box B</div>
        <div className="bg-black h-[30vh]">Box C</div>
        <div className="bg-black h-[30vh]">Box D</div>
      </div>
      <div className="flex flex-col space-y-[3vh] w-1/2">
        <div className="bg-black h-[30vh] w-[25vw]">Box A</div>
        <div className="bg-black h-[30vh]">Box B</div>
        <div className="bg-black h-[30vh]">Box C</div>
        <div className="bg-black h-[30vh]">Box D</div>
      </div>
      <div className="flex flex-col space-y-[3vh] w-1/2">
        <div className="bg-black h-[30vh] w-[25vw]">Box A</div>
        <div className="bg-black h-[30vh]">Box B</div>
        <div className="bg-black h-[30vh]">Box C</div>
        <div className="bg-black h-[30vh]">Box D</div>
      </div>
    </div>


    <nav className=' h-[12vh] w-full  bg-[#005C78] flex sticky top-0'>
    <div className='mt-8 flex '>
      <img className='h-10 w-10 ml-[10vw] ' src={star} alt=""  />
        <h1 className='text-4xl text-white ml-6 font-["Quick_Peachy"] '>Percy Jacker </h1>
        <h1 className='text-2xl text-white ml-[30vw] font-["Quick_Peachy"] '>About us </h1>
        <h1 className='text-2xl text-white ml-[5vw] font-["Quick_Peachy"] '>Work </h1>
    <button className='text-2xl text-white ml-[4vw]  rounded-2xl bg-[#E88D67] h-[5vh] w-[10vw] font-["Quick_Peachy"] '>Contact us </button>
    </div>
    </nav>
    <div className='h-[30vh] w-[60vw] mt-[20vh] ml-[10vw] absolute  bg-slate-900'>
    <h2 className='text-[16vh] text-[#F3F7EC] mt-[2vh]  font-["Quick_Peachy"]   leading-none'>WEB <br /> DEVLOPMENT</h2>

    </div>

    </div>
{/* page2 */}
    <div className=' h-screen w-full bg-slate-600 relative'> 
    <div className='h-[50vh] w-[40vw] mt-[10vh] ml-[10vw] bg-slate-200 absolute'>
        <div className='h-[40vh] w-[35vw] bg-black mt-[10vh] '></div>
        
        <div className='h-[40vh] w-[35vw] bg-slate-700  absolute top-[2vh] ml-[6vw] '></div>

    </div>
    <div className=' h-[50vh] w-[40vw] bg-slate-300 absolute top-[10vh] ml-[55vw] '>
    <h1 className='text-6xl text-white ml-6 mt-6 font-["Quick_Peachy"] '>E-commerce website </h1>
    <h1 className='text-2xl text-white ml-6 mt-2 font-["Radley"] '>let's create your best video, but first....</h1>
    <button className='text-2xl text-white ml-[1vw] mt-[2vh] rounded-2xl bg-[#E88D67] h-[5vh] w-[7vw] font-["Quick_Peachy"] '>Visit</button>
    <button className='bg-[#E88D67] rounded-full px-5 py-3 absolute mt-[20vh] ml-[-12vh] '>L</button>
    <button className='bg-[#E88D67] rounded-full px-5 py-3 absolute mt-[20vh] ml-[-5vh] '>R</button>

    
    <h1 className='text '></h1>

    </div>
        
</div>
    
    

    </>
    
    )
}

export default Web