import React from 'react'

function ProjectContainer({children}) {
  return (
    <div className='ml-5 bg-dark rounded-5 mt-2  px-4 py-5 mx-2 mb-3 text-center p-4 m-4'>
      {children}
    </div>
  )
}

export default ProjectContainer
