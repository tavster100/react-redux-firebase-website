import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { checkUserIsAdmin } from './../../Utils'
import './styles.scss'
//eslint-disable-next-line

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
})
//eslint-disable-next-line
const AdminToolbar = (props) => {
  const { currentUser } = useSelector(mapState)
  const isAdmin = checkUserIsAdmin(currentUser)
  if (!isAdmin) return null //component will not render
  return (
    <div className="adminToolbar">
      <ul>
        <li>
          <Link to="/admin">My Admin</Link>
        </li>
      </ul>
    </div>
  )
}
export default AdminToolbar
