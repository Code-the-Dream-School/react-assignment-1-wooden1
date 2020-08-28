import React from 'react'
import Logo from '../images/logo.png'
const Header = (props) => {
  return (
    <div className="container">
      <div className="center">
        <img src={Logo} alt="Logo" className="logo" />
        <h1 className="niceFont text-uppercase">tic tac toe</h1>
        <button className="btn btn-dark niceFont"></button>
      </div>
    </div>
  )
}

export default Header
