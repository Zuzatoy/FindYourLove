import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className="nav">
      <h1>Me</h1>
      <Link to='/others'><h1>Others</h1></Link>
    </div>
  )
}

export default Nav
