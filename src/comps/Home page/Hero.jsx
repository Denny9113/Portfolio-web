import React, { forwardRef, useRef, useState } from 'react'
import img from './img.avif'
import LinkedIn from '../SVJ\'s/LinkedIn'
import Git from '../SVJ\'s/Git'
import Html from '../SVJ\'s/Html'
import Css from '../SVJ\'s/Css'
import JavaS from '../SVJ\'s/JavaS'
import Reactsvj from '../SVJ\'s/Reactsvj'
import TailW from '../SVJ\'s/TailW'
import BootS from '../SVJ\'s/BootS'



function Hero(props, ref) {

  const [fill, setFill] = useState("#4B5563")
  const [height, setHeight] = useState('35')


  return (
    <div ref={ref}>
      <div className='w-full h-[80vh] flex pt-24'>
        <div className='  w-[50%] h-full what flex justify-center items-center'>
          <div className='flex justify-start flex-col'>
            <p className='heading  text-7xl text-blue-600'>Front-End React<br />Developer 👋</p>
            <p className='tagLine text-gray-600 mt-7'>Hi i'm Sakib Zalori. A pessinate Front-End Developer. <br />
              based in Ahmedabad, India</p>
            <div className='mt-7 flex items-center'>
              <a href="#" className='m-1'><LinkedIn fill={fill} /></a>
              <a href="#" className='m-1'><Git fill={fill} /> </a>
              <button className='button bg-[#4B5563] text-gray-50 px-2  rounded h-7 m-1'>Download CV</button>
            </div>
          </div>
        </div>



        <div className=' w-[50%] h-full bg-gray-50 flex justify-center items-center'>
          <img className='img h-[23rem] w-[28rem]' src={img} alt="" />
        </div>
      </div>


      <div className=' bg-gray-50 w-full h-[20vh] flex flex-row '>
        <div className='flex my-auto ml-[3.4rem]'>
          <p className='techStack my-auto mr-6'>
            Tech Stack
          </p>
          <span className='my-auto opacity-50 mr-14' >|</span>
          <p className='teckI my-auto mr-14'><Html fill={fill} height={height} /></p>
          <p className='teckI my-auto mr-14'><Css fill={fill} height={height} /></p>
          <p className='teckI my-auto mr-14'><JavaS fill={fill} height={height} /></p>
          <p className='teckI my-auto mr-14'><Reactsvj fill={fill} height={height} /></p>
          <p className='teckI my-auto mr-14'><TailW fill={fill} height={height} /></p>
          <p className='teckI my-auto mr-14'><BootS fill={fill} height={height} /></p>
        </div>
      </div>
    </div>
  )
}

export default forwardRef(Hero)