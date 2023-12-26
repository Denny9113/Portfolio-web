import React, { forwardRef, useRef } from 'react'
import Top from './comps/SVJ\'s/Top'
import useScroll from '../src/Context'

function Footer(props, ref) {

    const { setComps, Comps, handleClick } = useScroll()

    return (
        <div ref={ref} className='flex justify-center '>
            <p className='input-text mb-3 text-gray-700'>Site designed and coded with ❤️‍🔥</p>
            <div
                onClick={() => {
                    handleClick("Hero1");
                }}
                className='absolute right-10 flex cursor-pointer
            '>
                <p className='heading mr-2'>BACK TO TOP</p>
                <Top />
            </div>
        </div>
    )
}

export default forwardRef(Footer)