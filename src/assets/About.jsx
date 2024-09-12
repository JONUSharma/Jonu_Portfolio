import React from 'react'
import { ReactTyped } from "react-typed";


function About() {
  
    return (
        <div name ="About" className="bg-warning rounded-5 mt-2  px-4 py-5 mx-2 mb-3 text-center">
            <div className="py-5">
                <h1 className="display-5 fw-bold text-dark link-success pe text-decoration-underline">About</h1>
                <div className="col-lg-6 mx-auto">
                    <ol className='list-unstyled'>
                        <li className='fs-5'>"I am a web development enthusiast currently pursuing my studies at BTKIT DWARAHAT. With a strong passion for building responsive and dynamic web applications, I have gained experience in a wide range of programming languages and frameworks.<br /> My core skills include:</li>
                        <li> <h4 className='m-3'> <b className='text-success opacity-70'>
                            Languages : <ReactTyped
                                strings={["HTML", "CSS", "JAVASCRIPT", "C++", "C", "PYHTON"]}
                                typeSpeed={50}
                                backSpeed={50}
                                loop={true}
                            /></b></h4>
                        </li>
                        <li>
                            <h4 className='m-3'> <b className='text-success opacity-70'>
                                FrameWork/Libraries : <ReactTyped
                                    strings={["REACT", "NODE.JS", "EXPRESS", "BOOTSTRAP",]}
                                    typeSpeed={50}
                                    backSpeed={50}
                                    loop={true}
                                /></b></h4></li>

                        <li> I enjoy learning new technologies and am always eager to take on challenges that help me grow as a developer.</li>
                    </ol>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">

                    </div>
                </div>
            </div>
        </div >
    )
}

export default About
