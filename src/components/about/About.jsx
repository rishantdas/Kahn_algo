import React from 'react'
import ME from '../../assets/me-about.jpg'
import {TbAward} from 'react-icons/tb'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import './about.css'


const About = () => {
  return (
    <section id='about'>
       <h5>Get to Know</h5>
       <h2>About Me</h2>
       <div className="container about__container">
         <div className="about__me">
           <div className="about__me-image">
             <img src={ME}alt="About Image" />
           </div>

         </div>
         <div className="about__content">
           <div className="about__cards">
             <article className='about__card'>
              <TbAward className='about__icon'/>
               <h5>Experience</h5>
              <small>No Experience</small>

             </article>
             <article className='about__card'>
              <FiUsers className='about__icon'/>
               <h5>Clients</h5>
              <small>No clients</small>

             </article>
             <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
               <h5>Projects</h5>
              <small>2 projects</small>

             </article>
             
             
           </div>
           <p>
            Hello there! I'm Rishant Das, a passionate and innovative web developer dedicated to crafting exceptional online experiences. With a keen eye for design, a love for clean and efficient code, and an unwavering commitment to staying up-to-date with the latest web technologies, I bring a unique blend of creativity and technical expertise to every project I undertake.
           </p>
           <p>
           My journey in the world of web development began just a normal 1st year student who was curious about web and all started with youtube tutorials. Since then, I have been on a constant quest to push the boundaries of what's possible in the digital realm. Whether it's building responsive and user-friendly websites, developing interactive web applications, or optimizing for performance and accessibility, I thrive on turning ideas into reality through elegant and functional web solutions.
           </p>
           <a href="#contact" className='btn btn-primary'>Let's Talk</a>

         </div>

       </div>
      
     </section>
    
  )
}

export default About

