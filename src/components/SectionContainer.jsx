import React from 'react'

const SectionContainer = ({ children, id }) => {
  return (
    <div className='w-full mx-auto my-5' id={id}>
        {children}
    </div>
  )
}

export default SectionContainer