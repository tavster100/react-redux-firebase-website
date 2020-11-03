import React from 'react'
import './styles.scss'
import Logo from './../../assets/logo.png'
import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
const Header = (props) => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="ShopLogo"></img>
          </Link>
        </div>

        <div className="callToActions">
          <ul>
            <li>
              <Link to={'/registration'}>Register </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
export default Header
