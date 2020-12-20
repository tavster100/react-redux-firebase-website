import React from 'react'
import './styles.scss'
import MetaDecorator from '../../Utils/MetaDecorator'

const dashboardResume = require('./../../pagesResume/dashboardpage.json')
// eslint-disable-next-line no-unused-vars
const Dashboard = (props) => {
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
