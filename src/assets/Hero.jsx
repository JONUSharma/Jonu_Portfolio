import React from 'react'
import Avalilable from './Available'
import Working from './Working'
import { ReactTyped } from "react-typed";

function Home() {

    return (
        <div name = "Home" className="container max-w-screen-2x1 col-xxl-8 px-4 py-5 md:mx-4 text-center mt-2 bg-dark text-secondary rounded-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src="../.././Image/download.jpeg" className="pe d-block mx-lg-auto img-fluid rounded-circle body-img focus-ring-success" alt="Bootstrap Themes" width="300" height="500" loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <div className='flex'>
                        <h2 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Hello, I'm a web <br /><span className='link-warning'>
                            <ReactTyped
                                strings={["Developer", "coder", "Nothing"]}
                                typeSpeed={50}
                                backSpeed={50}
                                loop={true}
                            />
                        </span><b>!</b></h2></div>
                    <p className="lead">Hello, I'm <b className="pe  nav1">Jonu Sharma</b> a passionate web developer... </p>
                    <Avalilable />
                    <Working></Working>
                </div>
            </div>
        </div>
    )
}

export default Home
