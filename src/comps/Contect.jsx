import React, { forwardRef, useRef } from 'react'
import Clock from './CurTime'



function Contect(props, ref) {
  return (
    <div ref={ref} className='flex w-full h-screen bg-gray-50 px-14'>

      <div className='flex flex-col  w-[60%] h-screen'>
        <div className='mt-14'>
          <p className='heading  text-5xl '>
            Let's make something <br /> <span className='text-blue-700'>better</span> together.
          </p>
        </div>
        <div className=' flex mt-14'>
          <div className=' w-[50%] flex flex-col mr-8'>
            <label className='input-text text-sm text-gray-800' htmlFor="name">Your name</label>
            <input id='name' type="text" className='input-text py-2 outline-none border-b border-black bg-gray-50' />
          </div>
          <div className=' w-[50%] flex flex-col'>
            <label className='input-text text-sm text-gray-800' htmlFor="email">Your email</label>
            <input id='email' type="email" className='input-text py-2 outline-none border-b border-black bg-gray-50' />
          </div>
        </div>
        <div className='flex flex-col mt-14'>
          <label htmlFor="text-aria" className='input-text text-sm text-gray-800'>Your message</label>
          <textarea id="text-aria" cols="50" rows="3" className='input-text py-2 outline-none border-b border-black bg-gray-50'>
          </textarea>
          <div>
            <button className='mt-10 border rounded-full input-text text-blue-700  border-blue-700 py-3 px-6 outline-none active:bg-blue-700 active:text-gray-50'>
              Send Message
            </button>
          </div>
        </div>
      </div>


      <div className='flex flex-col  w-[40%] h-screen'>
        <div className='pt-14 pl-16'>
          <p className='heading text-2xl text-gray-800'>Contact Detail</p>
          <ul className='pt-3 input-text text-gray-800'>
            <li>Dennyoxford@gmail.com</li>
          </ul>
        </div>
        <div className='pt-14 pl-16'>
          <p className='heading text-2xl text-gray-800'>My Digital Spaces</p>
          <ul className='pt-3 input-text text-gray-800'>
            <li>Github</li>
            <li>LinkedIn</li>
            <li>Twitter</li>
            <li>Discord</li>
          </ul>
        </div>

        <div className='pt-14 pl-16'>
          <p className='heading text-2xl text-gray-800'>From</p>
          <ul className='pt-3 input-text text-gray-800'>
            <li>Ahmedabad, INDIA</li>
            <li><Clock /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default forwardRef(Contect)