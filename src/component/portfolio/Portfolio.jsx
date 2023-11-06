import React from 'react'
import './portfolio.css'
import PersonalPortfolio from '../../assets/project-images/personal-portfolio1.png'
import SilentGestures from '../../assets/project-images/silent-gestures1.png'
import VisceneAdmin from '../../assets/project-images/viscene-admin-User73Video1-edited.png'
import ArtHome from '../../assets/project-images/arthome3.jpg'
import CELS from '../../assets/project-images/CELS.png'

const data = [
  {
    id: 1,
    image: PersonalPortfolio,
    title: "Personal Portfolio",
    github: "https://github.com/kexinsee99/react-portfolio-website",
    screenshot: "https://dribbble.com/shots/22652908-Personal-Portfolio",
    language: "React JS, CSS",
    year: 2023
  },
  {
    id: 2,
    image: SilentGestures,
    title: "Silent Gestures",
    github: "https://github.com/kexinsee99/translate-android",
    screenshot: "https://dribbble.com/shots/22635758-Silent-Gestures",
    language: "Kotlin",
    year: 2023
  },
  {
    id: 3,
    image: VisceneAdmin,
    title: "Viscene Admin",
    github: "",
    screenshot: "https://dribbble.com/shots/22630119-Viscene-Admin",
    language: "TypeScript",
    year: 2022
  },
  {
    id: 4,
    image: ArtHome,
    title: "ArtHome (Design Prototype)",
    github: "",
    screenshot: "https://dribbble.com/shots/22986862-ArtHome",
    language: "Figma, Adobe Premiere Pro",
    year: 2020
  },
  {
    id: 5,
    image: CELS,
    title: "Celebrate Every Little Success",
    github: "",
    screenshot: "https://dribbble.com/shots/22629222-Celebrate-Every-Little-Success",
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
          data.map(({id, image, title, github, screenshot, language, year}) => {
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
                  <a href={screenshot} className='btn btn-primary' target='_blank'>Screenshots</a>
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