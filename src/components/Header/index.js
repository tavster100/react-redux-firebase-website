import React from 'react'
import './styles.scss'
import Logo from './../../assets/logo.png'
// eslint-disable-next-line no-unused-vars
const Header = (props) => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="ShopLogo"></img>
        </div>
      </div>
    </header>
  )
}
export default Header
