import React from 'react'
import './about.css'

import ME from '../../assets/me-about3.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section >
      <h5 className='about__center'> Get To Know </h5>
      <h2 className='about__center'> About Me </h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Nikhil" />
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Year's Working</small>

            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>2+ Worldwide</small>

            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>

            </article>
          </div>

          <p>
            Innovative Front End Developer with 1+ years’ experience building and maintaining responsive websites in the recruiting industry. Proficient in HTML, CSS, jQuery, SQL, JavaScript, React Js and Angular, plus modern libraries and frameworks. Passionate about usability and possess working knowledge of Jira, Bit bucket & GitHub.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>

    </section>
  )
}

export default About