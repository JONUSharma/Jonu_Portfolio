import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
function Avalilable() {
    return (
        <div className=" pe d-flex flex-row flex-sm-row align-items-center g-2 py-3 cursor-pointer ">
            <h3 className='px-3 text-decoration-underline link-success z-n   '>Available on</h3>
            <h2 className='px-3 py-3 hover'><a className='link-light' target='_blank' href="https://www.facebook.com/jonu.sharma.988"><FaFacebook /> </a></h2>
            <h2 className='px-3 py-3  hover'><a className='link-light' target='_blank' href="https://www.linkedin.com/in/jonu-sharma-a316b3275"><FaLinkedin /></a></h2>
            <h2 className='px-3 py-3  hover'><a className='link-light' target='_blank' href="https://www.youtube.com/@JAI_SHREE_RAM__._"><FaYoutube></FaYoutube></a></h2>
            <h2 className='px-3 py-3 hover'>
                <a className='link-light' target='_blank' href="https://github.com/JONUSharma"><FaGithub /> </a></h2>

        </div>
    )
}

export default Avalilable
