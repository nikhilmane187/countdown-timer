import React from 'react'
import CV from '../../assets/Nikhil_Resume_JS.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>let's Talk</a>
    </div>
  )
}

export default CTA