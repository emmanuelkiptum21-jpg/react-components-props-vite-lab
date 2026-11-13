import React from 'react'

const Header = ({ name = 'My Blog' }) => {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  )
}

export default Header
