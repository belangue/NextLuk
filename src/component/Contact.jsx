import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
    <h1>Contact</h1>
    <Link to='/Home' >Home</Link><br />
    <Link to='/About' >About</Link>
    <a href='#' style={{
      textDecoration:'none',
    }}>link</a>
    </div>
  )
}

export default Contact