import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  return (
    <div className='flex gap-4 container mx-auto' >
    <NavLink to={'/home'}>
        Home
    </NavLink>
    <NavLink to={"/statistics"}>
        Statistics
    </NavLink>
    <NavLink to={"/login"}>
       Login
    </NavLink>

    </div>
  )
}

export default React.memo(Header)