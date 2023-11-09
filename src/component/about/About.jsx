import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            Hello there! I am Ke Xin, a recent graduate from Singapore Management University (SMU) with a degree in Computer Science. I am currently a front-end developer, armed with a passion for turning lines of code into real-world solutions. 
          </p>
          <p>
            From tackling complex coding projects to collaborating on innovative solutions, my journey at SMU has equipped me with the skills to navigate the big world of computer science. I enjoy problem-solving, I am determine to keep pushing boundaries in this ever-expanding digital world.
          </p>
          <p>
            Whether it's crafting elegant algorithms, diving into data structures, or exploring the latest advancements in technology, I'm always up for the challenge. Let's code a brighter future together!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

      
    </section>
  )
}

export default About