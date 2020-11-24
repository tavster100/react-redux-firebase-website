import React from 'react'
import { useSelector } from 'react-redux'
import UserProfile from './../UserProfile'
import './styles.scss'

//redux mapState
const mapState = ({ user }) => ({
  currentUser: user.currentUser,
})

const VerticalNav = ({ children }) => {
  const { currentUser } = useSelector(mapState) //geting currentUser from redux-store

  const configUserProfile = {
    currentUser,
  }
  return (
    <div className="verticalNav">
      <UserProfile {...configUserProfile} />{' '}
      {/*Passing currentUser to UserProfile component*/}
      <div className="menu">
        {' '}
        {/* rendering the ul that i pass to this component */}
        {children}
      </div>
    </div>
  )
}
export default VerticalNav
