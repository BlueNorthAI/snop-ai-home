// Gradient.jsx

import React from 'react'

const Gradient = ({ id, color, gradientTransform }) => (
  <linearGradient id={id} gradientTransform={gradientTransform}>
    <stop offset="0%" stopColor={color} />
    <stop offset="100%" stopColor={color} />
  </linearGradient>
)

export default Gradient
