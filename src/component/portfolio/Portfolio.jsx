import React from 'react'
import './portfolio.css'
import PP from '../../assets/personal-portfolio1.png'
import SG from '../../assets/silent-gestures1.png'
import VA from '../../assets/viscene-admin-User73Video1-edited.png'
import CELS from '../../assets/CELS.png'

const data = [
  {
    id: 1,
    image: PP,
    title: "Personal Portfolio",
    github: "https://github.com/kexinsee99/react-portfolio-website",
    demo: "https://dribbble.com/shots/22652908-Personal-Portfolio",
    language: "React JS, CSS",
    year: 2023
  },
  {
    id: 2,
    image: SG,
    title: "Silent Gestures",
    github: "https://github.com/kexinsee99/translate-android",
    demo: "https://dribbble.com/shots/22635758-Silent-Gestures",
    language: "Kotlin",
    year: 2023
  },
  {
    id: 3,
    image: VA,
    title: "Viscene Admin",
    github: "",
    demo: "https://dribbble.com/shots/22630119-Viscene-Admin",
    language: "TypeScript",
    year: 2022
  },
  {
    id: 4,
    image: CELS,
    title: "Celebrate Every Little Success",
    github: "",
    demo: "https://dribbble.com/shots/22629222-Celebrate-Every-Little-Success",
    language: "HTML, CSS, jQuery, PHP, Cordova",
    year: 2019
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo, language, year}) => {
            let disabledClass = '';
            if (!github) {
              disabledClass = 'disabled';
            }
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>
                  <span>{title}</span>
                  <span className='portfolio__item-year'>{year}</span>
                  <div className='portfolio__item-language'>{language}</div>
                </h3>
                <div className="portfolio__item-cta">
                  <a href={github} className={`btn ${disabledClass}`}  target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio