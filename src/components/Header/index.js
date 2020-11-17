import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { signOutUserStart } from './../../redux/User/user.actions'
import './styles.scss'
import { Link } from 'react-router-dom'
// import { auth } from './../../firebase/utils'
import Logo from './../../assets/logo.png'

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
})
//eslint-disable-next-line
const Header = (props) => {
  const dispatch = useDispatch()
  const { currentUser } = useSelector(mapState)
  const signOut = () => {
    dispatch(signOutUserStart())
  }

  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="ShopLogo"></img>
          </Link>
        </div>

        <div className="callToActions">
          {currentUser && (
            <ul>
              <li>
                <Link to={'/dashboard'}>Profile </Link>
              </li>
              <li>
                <button className="btn" onClick={() => signOut()}>
                  LogOut
                </button>
              </li>
            </ul>
          )}
          {!currentUser && (
            <ul>
              <li>
                <Link to={'/registration'}>Register </Link>
              </li>
              <li>
                <Link to={'/login'}>Login </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  )
}
Header.defaultProps = {
  currentUser: null,
}

export default Header
