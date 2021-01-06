import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signOutUserStart } from './../redux/User/user.actions'

import Header from './../components/Header'
import Footer from './../components/Footer'
import VerticalNav from './../components/VerticalNav'


//redux part

const DashBoardLayout = (props) => {
  const dispatch = useDispatch()

  const signOut = () => {
    dispatch(signOutUserStart())
  }
  return (
    <div className="dashboardLayout">
      <Header {...props} />
      <div className="controlPanel">
        <div className="sidebar">
          <VerticalNav>
            <ul>
              <li>
                <Link to="/dashboard">Home</Link>
              </li>
              <li>
                <Link to="/" className="signOut" onClick={() => signOut()}>
                  Sign Out
                </Link>
              </li>
            </ul>
          </VerticalNav>
        </div>
        <div className="content">{props.children}</div>
      </div>
      <Footer />
    </div>
  )
}
export default DashBoardLayout
