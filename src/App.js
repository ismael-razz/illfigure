import React from 'react'
import Intro from './Intro'
import Work from './Work'
import Web from "./Web"
import Footer from './Footer'
import Copyright from './Copyright'


export default function App() {
  return (
    <div className='container'>
      <Work />
      <Intro />
      <Web />
      <Footer />
    </div>
  )
}
