import React from 'react'

function Copy() {
    const date = new Date().getFullYear();
    return date ;
}


export default function Copyright() {
  return (
    <div>
      <p className='copyright'>© + {Copy()} + by Razz Illfigure</p>
    </div>
  )
}
