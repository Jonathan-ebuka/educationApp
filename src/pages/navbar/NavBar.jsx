import React from "react"
import "./NavBar.css"

export default function NavBar() {
  return (
    <div className='nav__container'>
      <div>
        <a href='' className='nav__logo'>
          <span className='nav__logo-circle'>E</span>
          <h2 className='nav__logo-name'> EduApp.</h2>
        </a>
      </div>

      <div className='nav__links'>
        <a href='' className='nav__link'>
          Courses
        </a>

        <a href='' className='nav__link'>
          My Courses
        </a>
      </div>

      <a href='' className='nav__link'>
        Profile
      </a>

      <img
        src='https://images.unsplash.com/photo-1552234994-66ba234fd567?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        className='profile__img'
      />
    </div>
  )
}
