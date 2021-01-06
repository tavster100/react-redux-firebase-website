import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { signOutUserStart } from '../../redux/User/user.actions'
import { selectCartItemsCount } from '../../redux/Cart/cart.selectors'
import './styles.scss'
import { Link } from 'react-router-dom'
// import { auth } from './../../firebase/utils'
import Logo from './../../assets/ShopLogo.jpg'
//eslint-disable-next-line
import cartLogo1 from './../../assets/cartLogo1.png'

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumberCartItems: selectCartItemsCount(state),
})
//eslint-disable-next-line
const Header = (props) => {
  const dispatch = useDispatch()
  const { currentUser, totalNumberCartItems } = useSelector(mapState)
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
        <nav>
          <ul >
            <li >
              <Link className='linksStyle' to={'/'}>Home</Link>
            </li >
            <li >
              <Link className='linksStyle' to={'/search'}>Search</Link>
            </li>
          </ul>
        </nav>
        <div className="callToActions">
          <ul>
            <li>
              <Link to={'/cart'} >
                  <img className='cartLogo' src={cartLogo1} alt={'cartLogo'} />
                  <p className='cartNumber'>{ totalNumberCartItems} </p>
              </Link>
            </li>
            {currentUser && [
              <li key={1}>
                <Link to={'/dashboard'}>My Account </Link>
              </li>,
              <li key={2}>
                <button className="btn" onClick={() => signOut()}>
                  LogOut
                </button>
              </li>,
            ]}

            {!currentUser && [
              <li key={1}>
                <Link to={'/registration'}>Register </Link>
              </li>,
              <li key={2}>
                <Link to={'/login'}>Login </Link>
              </li>,
            ]}
          </ul>
        </div>
      </div>
    </header>
  )
}
Header.defaultProps = {
  currentUser: null,
}

export default Header
