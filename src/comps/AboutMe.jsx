import React, { forwardRef, useRef, useState } from 'react'
import img1 from "./img1.jpg";
import img from "./img.jpg";
import img2 from "./img2.jpg";


function AboutMe(props,ref) {
  
  return ( 
    <div ref={ref} className='w-full h-screen flex justify-center items-center bg-gray-50'>
      <div className=' flex justify-center items-center flex-row '>
        <div className='rounded-xl -ml-24 mr-14 relative'>
          <img src={img1} alt="img" className='rounded-xl h-72' />
          {/* <div id='circle' className='border h-24 w-24 rounded-full bottom-0 right-0 z-50 -mr-4 -mb-4 absolute'>
          </div> */}
        </div>

        <div className='h-80 w-96 '>
          <p className='text-blue-700 aboutMe mt-2 mb-1'>ABOUT ME</p>
          <h1 className='About-title font-bold text-2xl mb-2'>A dedicated Front-end developer.<br /> base in Ahmedabad, India</h1>
          <p className='About-discription text-gray-800'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate quo libero consequatur hic odit sequi dolorum velit optio debitis. Maiores, inventore nisi, eligendi dolorem, obcaecati mollitia cum perspiciatis atque officiis culpa facere a non quod ipsum sunt soluta qui totam odio quaerat magni. Qui iste, vero aspernatur beatae et eos!
          </p>
        </div>

      </div>
    </div>
  )
}

export default forwardRef(AboutMe)