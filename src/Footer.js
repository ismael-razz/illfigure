import React from 'react'
import { FaInstagram, FaGithub } from "react-icons/fa"

export default function Footer() {
  return (
    <div>
      <footer id='contact'>
      <br></br>
      <a href='https://www.instagram.com/ismael.razz/' className='icons'><FaInstagram /></a>
      <a href='https://github.com/ismael-razz' className='icons'><FaGithub /></a>
      <a className='privacy' href='https://www.freeprivacypolicy.com/live/3f8e97c7-7ceb-4b13-aa0f-1c73820733be'>Privacy Policy</a>
      <p className='copyright'>© 2022 by Razz Illfigure</p>
      </footer>
    </div>
  )
}
