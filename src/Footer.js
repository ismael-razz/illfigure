import React from 'react'
import Copyright from './Copyright'
import Privacy from './Privacy'
import { FaInstagram, FaGithub } from "react-icons/fa"

export default function Footer() {
  return (
    <div>
      <footer id='contact'>
      <br></br>
      <a href='https://www.instagram.com/ismael.razz/' className='icons'><FaInstagram /></a>
      <a href='https://github.com/ismael-razz' className='icons'><FaGithub /></a>
      <Copyright />
      <Privacy />
      </footer>
    </div>
  )
}
