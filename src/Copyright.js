import React from 'react'
import { useState } from 'react'

function Copy() {
    const date = new Date().getFullYear();
    return "© " + date + "by Razz Illfigure"
}


export default function Copyright() {
  return (
    <div className='copyright'>
      {Copy}
    </div>
  )
}
