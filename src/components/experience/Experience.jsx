import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skill's I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">

        <div className="experience__frontend">
          <h3>Frontend development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='ec' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='ec' />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='ec' />
              <div>             
                <h4>Javascript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
 
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='ec' />
              <div> 
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='ec' />
              <div> 
              <h4>React Js</h4>
              <small className='text-light'>Experienced</small>
              </div> 
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='ec' />
              <div> 
              <h4>Angular Js</h4>
              <small className='text-light'>Experienced</small>
              </div> 
            </article>


          </div>

        </div>
        <div className="experience__backend">
          <h3>Backend development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='ec' />
              <div>
              <h4>Node Js</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='ec' />
              <div>
              <h4>Express Js</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='ec' />
              <div>
              <h4>SQL</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='ec' />
              <div>
              <h4>Mongo DB</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='ec' />
              <div>
              <h4>elk and Kiban</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>



          </div>

        </div>
        
      </div>
    </section>
  )
}

export default Experience