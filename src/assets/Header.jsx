import React from 'react'
import Photo from './Photo'
import { Link } from 'react-scroll'
function Header() {
    const headerItems = [
        {
            id: 1,
            text: "Home",
        },
        {
            id: 2,
            text: "About",
        },
        {
            id: 3,
            text: "Projects",
        },
        {
            id: 4,
            text: "Certificate",
        },
        {
            id: 5,
            text: "Contact",
        },

    ]
    return (
        <>
            <header className="position-sticky max-w-secreen-2x1 rounded top-2 height-10vh start-0 border-bottom fw-bold header bg-warning">
                <div className="container">

                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                        <span className='heading-span '><h4 className='heading ' ><b>W</b>eb developer<b>!</b></h4>
                        </span>
                        {
                            headerItems.map(({ id, text }) => {
                                return (
                                    <ul key={id} className="nav pe position-relative d-flex flex-sm-row col-12 col-lg-auto me-lg-auto mb-2 justify-content-between mb-md-0 nav-items ">
                                        <li>
                                            <Link to={text} smooth={true} default = "Home"
                                                duration={500} offset={-70} activeClass='avtive' className="nav-link nav1 px-0 pe hover text-dark link-success nav-link-action">{text}</Link>
                                        </li>
                                    </ul >
                                )
                            })
                        }
                        <div className=" text-end d-flex flex-row">

                            <Photo ></Photo>
                        </div>
                    </div >
                </div >
            </header >


        </>
    )
}

export default Header
