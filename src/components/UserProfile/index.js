import React from 'react'
import './styles.scss'
import UserIMG from './../../assets/user.jpg'

const UserProfile = (props) => {
  const { currentUser } = props
  const { displayName } = currentUser

  return (
    <div className="userProfile">
      <ul>
        <li>
          <div className="img">
            <img src={UserIMG} alt="userIcon" />
          </div>
        </li>
        <li>
          <span className="displayName">{displayName && displayName}</span>
        </li>
      </ul>
    </div>
  )
}
export default UserProfile
