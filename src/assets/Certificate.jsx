import React from 'react'
import frontendMicrosoft from "../../Image/Frontend microsoft.png"
import frontendAmazon from "../../Image/Frontend amazon.png"
import frontendGoogle from "../../Image/frontend google.png"
import frontendDevtown from "../../Image/Frontend devtown.png"
import ProjectContainer from './ProjectContainer'

const certificate = [
    {
        id: 1,
        logo: frontendMicrosoft,
        about: "",
    },
    {
        id: 2,
        logo: frontendAmazon,
        about: "",
    },
    {
        id: 3,
        logo: frontendGoogle,
        about: "",
    },
    {
        id: 4,
        logo: frontendDevtown,
        about: "",
    },
]

function Certificate() {
    return (
        <ProjectContainer>
            <h2 name="Certificate" className='display-5 fw-bold text-warning    link-success pe text-decoration-underline'>Certificate</h2>
            <div  className='d-flex flex-lg-row p-2 flex-md-column  max-w-secreen-2x1'>
                {
                    certificate.map(({ id, logo, about }) => {
                        return (
                            <div className='w-100 m-2 text-light fw-bold border border-warning border-3 rounded-4 p-2' key={id}>
                                <img className='w-75  rounded-4 hover' src={logo} alt="" />
                                <span>
                                    <p>{about}</p></span>
                            </div>
                        )
                    })
                }
            </div>
        </ProjectContainer>
    )
}

export default Certificate  
