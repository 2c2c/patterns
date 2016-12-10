import React from 'react'
// Idempodent Functor
const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x)
})

const transform = (str) => Box(str)
  .map(s => s.toUpperCase())
  .fold(s => s + "!!")

const BoxOut = () => <div>
  {transform("hello")}
</div>

export default BoxOut;
