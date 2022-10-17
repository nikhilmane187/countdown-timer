import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import {BiBook} from 'react-icons/bi'
import {FaFileCode} from 'react-icons/fa'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'



const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
<div className='nav'>
  <a href="#"><AiOutlineHome/></a>
  <a href="#about"><BsFillInfoCircleFill/></a>
  <a href="#experience"><BiBook/></a>
  <a href="#portfolio"><FaFileCode/></a>
  <a href="#contact"><BiMessageSquareDetail/></a>
 
</div>
  )
}

export default Nav