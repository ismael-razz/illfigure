import React from 'react'
import MovingComponent from 'react-moving-text'

const Text = () => {
  return (
    <MovingComponent
  type="slideInFromBottom"
  duration="1000ms"
  delay="0s"
  direction="normal"
  timing="linear"
  iteration="1"
  fillMode="forwards">
  Welcome
</MovingComponent>
  )
}

export default Text