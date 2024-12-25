import React from 'react'
import Navbar_Component from '../Components/NavBar/Navbar_Component'

const Default_layout = (Component) => ({...props}) => {
  return (
    <div>
        <Navbar_Component/>
        <Component {...props}/>
        <h1>Footer</h1>
    </div>
  )
}

export default Default_layout