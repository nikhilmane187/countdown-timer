import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const headerSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/nikhil-mane-a7a09420a" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/nikhilmane187" target="_blank"><BsGithub/></a>
        <a href="https://twitter.com/NikhilM92473871" target="_blank"><BsTwitter/></a>
    </div>
  )
}

export default headerSocials