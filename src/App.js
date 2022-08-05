import React from 'react'
import Intro from './Intro'

import Work from './Work'
import Web from "./Web"

import Footer from './Footer'
import Navbar from './Navbar'

export default function App() {
  return (
    <div className='container'>
    <Navbar />
      <Work />
      <Intro />
      <Web />
      <Footer />
    </div>
  )
}
