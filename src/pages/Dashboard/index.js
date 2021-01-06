import React, { useEffect } from 'react'
import './styles.scss'
import {useDispatch,useSelector} from 'react-redux'
import {getUserOrderHistory} from '../../redux/Orders/orders.actions'
import MetaDecorator from '../../Utils/MetaDecorator'

const mapState =({user})=>({
  currentUser:user.currentUser
})
const dashboardResume = require('./../../pagesResume/dashboardpage.json')
// eslint-disable-next-line no-unused-vars
const Dashboard = (props) => {
  const dispatch = useDispatch()
  const {currentUser} =useSelector(mapState)
  useEffect(()=>{
    dispatch(
      getUserOrderHistory(currentUser.id)
    )
  },[])

  return (
    <div className="profile">
      <MetaDecorator
        title={dashboardResume.pageTitle}
        description={dashboardResume.pageDescription}
      />
      <span role="img" aria-label="image">
        Welcome to you`r profile ! ✋
      </span>
    </div>
  )
}
export default Dashboard
