import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
    <h1>About</h1>
       <Link to='/Home' >Home</Link><br />
       <Link to='/Contact' >Contact</Link>
    </div>
  )
}

export default About