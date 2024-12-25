import React from 'react'
import MovieNavbar_Component from '../Components/NavBar/MovieNavbar_Component'

const Movie_layout = (Component) => ({...props}) => {
  return (
    <>
      <MovieNavbar_Component/>
      <Component {...props}/>
      <h1>Footer</h1>
    </>
  )
}

export default Movie_layout
