import React from 'react'
import { Link } from 'react-router-dom'
import './Welcomepage.css'
import welcomeimage from './images/welcomeimage.jpeg'

const Welcomepage = () => {
  return (
    <div className='container'>
      <div className='backgroundimage'>
        <div className='overlay'>
          <div className='textcontent'>
            <h1 className='title'>Welcome to NEXTLUK</h1>
            <p className='subtitle'>Discover the power of our amazing services</p>
            <div className='buttoncontainer'>
              <Link to="/Login" className='buttonprimary' style={{textDecoration:'none'}}>Login</Link>
              <Link to="/Signup" className='button'style={{textDecoration:'none'}}>Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcomepage