import React from 'react'
import { FaHtml5 } from 'react-icons/fa6'
import { FaCss3 } from 'react-icons/fa6'
import { FaJs } from 'react-icons/fa6'
import { FaReact } from 'react-icons/fa6'
function Working() {
    return (
        <div className=" d-flex flex-row flex-sm-row align-items-center g-2 py-3">
            <h3 className='px-3  text-decoration-underline  link-success'>Currently working on</h3>
            <h2 className='px-3 py-3 hover'><FaHtml5 /> </h2>
            <h2 className='px-3 py-3 hover'><FaCss3 /></h2>
            <h2 className='px-3 py-3 hover'><FaJs></FaJs></h2>
            <h2 className='px-3 py-3 hover'><FaReact></FaReact></h2>
        </div>
    )
}

export default Working
