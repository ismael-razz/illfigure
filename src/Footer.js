import React from 'react'
import { FaInstagram, FaGithub } from "react-icons/fa"

export default function Footer() {
  return (
    <div id='contact'>
    <section>  
      <footer>
      <div>
      <a href='https://www.instagram.com/ismael.razz/' className='icons'><FaInstagram /></a>
      <a href='https://github.com/ismael-razz' className='icons'><FaGithub /></a>
      <div className='privacy'> 
        <a  href='https://www.freeprivacypolicy.com/live/3f8e97c7-7ceb-4b13-aa0f-1c73820733be'>Privacy Policy</a>
        </div>
      <p className='privacy'>© 2022 by Ismael Razzaque</p>
      </div>
        
      </footer>
      </section>
    </div>
  
  )
}
