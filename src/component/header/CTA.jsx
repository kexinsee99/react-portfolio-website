import React from 'react'
import CV from '../../assets/See Ke Xin Resume.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} target='_blank' className='btn'>Open CV</a>
            <a href={CV} className='btn' download>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default CTA