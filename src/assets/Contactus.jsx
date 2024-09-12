import React from 'react'
import ProjectContainer from './ProjectContainer'
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from "react-icons/fa";

function Contactus() {
    return (<>
        <ProjectContainer>
            <h1 name = "Contact" className="display-5 fw-bold text-warning link-success pe text-decoration-underline">Contact me</h1>
            <div>
                <div className="col-md-10 mx-auto col-lg-5 z-n1">
                    <form className="p-4 p-md-5 border rounded-3 bg-warning-subtle ">
                        <div className="form-floating mb-3 ">
                            <input type="text" className="form-control " id="floatingInput" placeholder="name@example.com" fdprocessedid="amzzhk" />
                            <label htmlFor="floatingInput">Enter your full name...</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" fdprocessedid="amzzhk" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea id="floatingMessage" name="message" className="form-control" required placeholder='name@example.' ></textarea>
                            <label htmlFor="floatingMessage">Message</label>

                        </div>
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit" fdprocessedid="1k84ys">Send message</button>
                        <hr className="my-4" />
                        <div className="contact-info m-2">
                            <p>Or email me directly at <a href="mailto:jonusharma4440@gmail.com" target='_blank'>Gmail</a></p>
                            <p>Find me on:</p>
                            <div className="social-links   ">
                                <a href="https://github.com/JONUSharma" className='fs-4 m-4 text-dark text-decoration-none pe' target="_blank">
                                    <FaGithub className='hover' />Github
                                </a>
                                <a href="https://linkedin.com/in/jonu-sharma-a316b3275" className='pe fs-4 m-4 text-decoration-none hover' target="_blank">
                                    <FaLinkedin className='hover' /> Linkedin
                                </a>
                            </div>
                        </div>
                    </form>Name
                </div>
            </div>

        </ProjectContainer>


    </>
    )
}

export default Contactus
