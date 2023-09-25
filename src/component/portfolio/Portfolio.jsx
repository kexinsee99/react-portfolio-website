import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/silent-gestures1.png'
import IMG2 from '../../assets/viscene-admin-User73Video1-edited.png'
import IMG3 from '../../assets/CELS.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Silent Gestures",
    github: "https://github.com/kexinsee99/translate-android",
    demo: "https://dribbble.com/shots/22635758-Silent-Gestures",
    language: "Kotlin",
    year: 2023
  },
  {
    id: 2,
    image: IMG2,
    title: "Viscene Admin",
    github: "",
    demo: "https://dribbble.com/shots/22630119-Viscene-Admin",
    language: "TypeScript",
    year: 2022
  },
  {
    id: 3,
    image: IMG3,
    title: "Celebrate Every Little Success",
    github: "",
    demo: "https://dribbble.com/shots/22629222-Celebrate-Every-Little-Success",
    language: "HTML, CSS, jQuery, PHP, Cordova",
    year: 2019
  },
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: "Burger Builder",
  //   github: "https://github.com",
  //   demo: "https://dribbble.com/Alien_pixels"
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: "Burger Builder",
  //   github: "https://github.com",
  //   demo: "https://dribbble.com/Alien_pixels"
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: "Burger Builder",
  //   github: "https://github.com",
  //   demo: "https://dribbble.com/Alien_pixels"
  // }
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