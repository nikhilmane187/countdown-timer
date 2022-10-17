import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Nikhil Mane</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      
        <a href="https://www.linkedin.com/in/nikhil-mane-a7a09420a" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/nikhilmane187" target="_blank"><BsGithub/></a>
        <a href="https://twitter.com/NikhilM92473871" target="_blank"><BsTwitter/></a>
    </div>
      
      <div className="footer__copyright">
        <small>&copy;Nikhil Portfolio:All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer