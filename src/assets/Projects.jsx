import React from 'react'
import ProjectContainer from './ProjectContainer'
import Analog_clock from "../../Image/Analog clock.png"
import Digital_clock from "../../Image/Digital clock.png"
import Form_Validator from "../../Image/Form Validator.png"
import Gym from "../../Image/Gym Page.png"
import "bootstrap/dist/css/bootstrap.min.css";

function Projects() {

    const CreateData = [
        {
            id: 1,
            logo: Analog_clock,
            title: "Analog Clock",
            detail: "A analog Clock, simply made by using html and css.",
            badge: ["Html", "css", "js"],
        },
        {
            id: 2,
            logo: Digital_clock,
            title: "Digital Clock",
            detail: "A digital clock, simply made by using html and css. Shows the accurate time digitally. Also show the Date month and Year.  A beautiful digital clock.",
            badge: ["Html", "css", "js"],

        },
        {
            id: 3,
            logo: Form_Validator,
            title: "Form Validator",
            detail: "A from validator, in this form you have to fill all the details otherswise sumbit button moves.",
            badge: ["Html", "css", "js"],

        },
        {
            id: 4,
            logo: Gym,
            title: "Gym ",
            detail: "A simple zym site, where you can apply for zym, and also choose your favourite time go to gym. This site is also made using Html Css and JS.",
            badge: ["Html", "css", "js"],
        },
    ]
    const Again = ["Name", "Data"]
    return (
        <ProjectContainer>
            <h2 name="Projects" className='display-5 fw-bold text-warning    link-success pe text-decoration-underline'>Projects</h2>
            <div className='d-flex flex-lg-row p-2 flex-md-column  max-w-secreen-2x1'>

                {
                    CreateData.flat().map(({ id, logo, title, detail, badge }) => {
                        return (
                            <div className='w-100 m-2 text-light fw-bold border border-warning border-3 rounded-4 p-2' key={id}>
                                <img className='w-75  rounded-4 hover' src={logo} alt="" />
                                <h5 className='m-3 text-center text-info'>{title}</h5>
                                <p>{detail}</p>
                                <span className='badge text-bg-warning m-2'>{badge}</span>

                                <button className='p-2 hover rounded-4 bg-dark text-info fw-bold' type='button'>Source code</button>

                            </div>
                        )
                    })

                }



            </div>
        </ProjectContainer >

    )
}

export default Projects
