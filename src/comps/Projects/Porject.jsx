import React, { forwardRef, useRef } from 'react'
import img from "../img.jpg";
import img1 from "../img1.jpg";
import img2 from "../img2.jpg";
import img4 from "../img4.avif";
import img5 from "../img5.jpeg";
import img6 from "../img6.webp";
import img7 from "../img7.webp";


function Porject(props, ref) {
  return (
    <div ref={ref} className='bg-gray-50 10 w-full h-screen flex justify-center items-center px-14 border'>

      {/* project1 */}
      <div className='bg-gray-50 h-fit w-[25%] flex flex-col justify-center items-center  scale-90'>
        <div className='border rounded-2xl w-full flex justify-center items-end h-fit '>
          <a href="#">
            <img className='z-0 h-52 pro-img rounded-2xl hover:translate-y-[-10px] transition-all'
              src={img4}
              alt="project1" />
          </a>
        </div>
        <div className='w-full h-[50%] '>
          <div className='flex flex-row'>
            <button className='input-text border border-blue-700 text-blue-700 rounded-3xl px-5 py-1 m-2 ml-0 text-sm'>2023</button>
            <button className='input-text border border-blue-700 text-blue-700 rounded-3xl px-4 py-1 m-2 ml-0 text-sm overflow-hidden'> React • Appwrite • Tailwind</button>
          </div>
          <p className='About-title font-bold text-xl my-1 mb-2'>LANGUAGE EXCHANGE PAGE</p>
          <p className='input-text text-gray-800'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod nemo assumenda quas. Quo perferendis ratione impedit esse! Ullam commodi culpa voluptates officia ex mollitia quibusdam quasi necessitatibus iste asperiores, quia fuga, doloribus ea nam architecto?</p>
        </div>
      </div>

      {/* project2 */}
      <div className='h-fit w-[25%] flex flex-col justify-center items-center  scale-90'>
        <div className=' border hover:border-none rounded-2xl w-full flex justify-center items-end h-[50%] '>
          <a href="#">
            <img className='h-52 pro-img rounded-2xl hover:translate-y-[-10px] transition-all'
              src={img5}
              alt="project2" />
          </a>
        </div>
        <div className='w-full h-[50%] '>
          <div className='flex flex-row'>
            <button className='input-text border border-blue-700 text-blue-700 rounded-3xl px-5 py-1 m-2 ml-0 text-sm'>2023</button>
            <button className='input-text border border-blue-700 text-blue-700 rounded-3xl px-4 py-1 m-2 ml-0 text-sm'>React • Tailwind • JavaScript</button>
          </div>
          <p className='About-title font-bold text-xl my-1 mb-2'>E-COM WEBSITE CLONE</p>
          <p className='input-text text-gray-800'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod nemo assumenda quas. Quo perferendis ratione impedit esse! Ullam commodi culpa voluptates officia ex mollitia quibusdam quasi necessitatibus iste asperiores, quia fuga, doloribus ea nam architecto?</p>
        </div>
      </div>

      {/* project3 */}
      <div className='h-fit w-[25%] flex flex-col justify-center items-center  scale-90'>
        <div className='border hover:border-none rounded-2xl w-full flex justify-center items-end h-[50%] '>
          <a href="#">
            <img className='h-52 pro-img rounded-2xl hover:translate-y-[-10px] transition-all'
              src={img6}
              alt="project3" />
          </a>
        </div>
        <div className='w-full h-[50%] '>
          <div className='flex flex-row'>
            <button className='input-text border border-blue-700 text-blue-700 rounded-3xl px-5 py-1 m-2 ml-0 text-sm'>2023</button>
            <button className='input-text border border-blue-700 text-blue-700 rounded-3xl px-4 py-1 m-2 ml-0 text-sm'>React • Tailwind • Socket.io </button>
          </div>
          <p className='About-title font-bold text-xl my-1 mb-2'>CHAT APPLICATION</p>
          <p className='input-text text-gray-800'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod nemo assumenda quas. Quo perferendis ratione impedit esse! Ullam commodi culpa voluptates officia ex mollitia quibusdam quasi necessitatibus iste asperiores, quia fuga, doloribus ea nam architecto?</p>
        </div>
      </div>

      {/* project4 */}
      <div className='h-fit w-[25%] flex flex-col justify-center items-center  scale-90'>
        <div className='border hover:border-none rounded-2xl w-full flex justify-center items-end h-[50%] '>
          <a href="#">
            <img className='h-52 pro-img rounded-2xl hover:translate-y-[-10px] transition-all'
              src={img7}
              alt="project4" />
          </a>
        </div>
        <div className='w-full h-[50%] '>
          <div className='flex flex-row'>
            <button className='input-text border border-blue-700 text-blue-700 rounded-3xl px-5 py-1 m-2 ml-0 text-sm'>2023</button>
            <button className='input-text border border-blue-700 text-blue-700 rounded-3xl px-4 py-1 m-2 ml-0 text-sm'>Tailwind • React • Appwrite</button>
          </div>
          <p className='About-title font-bold text-xl my-1 mb-2'>ACCOUNTING AGENCY PAGE</p>
          <p className='input-text text-gray-800'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod nemo assumenda quas. Quo perferendis ratione impedit esse! Ullam commodi culpa voluptates officia ex mollitia quibusdam quasi necessitatibus iste asperiores, quia fuga, doloribus ea nam architecto?</p>
        </div>
      </div>

    </div>
  )
}

export default forwardRef(Porject);