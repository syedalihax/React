import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
      Navbar
      <Link className="link" to={'/'}>Home</Link>
      <Link className="link" to={'/about'}>About</Link>
      <Link className="link" to={'/contact'}>Contact</Link>
      <Link className="link" to={'/login'}>Login</Link>
      <Link className="link" to={'/register'}>Sign Up</Link>
    </nav>      
  )
}

export default Navbar