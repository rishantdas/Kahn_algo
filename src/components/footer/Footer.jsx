import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
   <footer>
    <a href="#" className='footer__logo'>Rishant Das</a>
    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
     {/* <li><a href="#sevices">Services</a></li>*/}
      <li><a href="#portfolio">Portfolio</a></li>
      
      {/*<li><a href="#testimonnial">Testimonials</a></li>*/}
      <li><a href="#contacts">Contact</a></li>
      <li><a href="#">Home</a></li>
    </ul>
    <div className="footer__socials">
      <a href="https://facebook.com"><BsFacebook/></a>
      <a href="https://instagram.com"><BsInstagram/></a>
      <a href="https://twitter.com"><BsTwitter/></a>
    </div>
    <div className="footer__copyright">

      <small>&copy;Rishant.All rights reserved</small>
    </div>
   </footer>
  )
}

export default Footer
