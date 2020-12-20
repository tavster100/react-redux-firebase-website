import React, { Component } from 'react'
import Signup from './../../components/Signup'
import './styles.scss'
import MetaDecorator from '../../Utils/MetaDecorator'

const registrationResume = require('./../../pagesResume/registrationpage.json')
class Registration extends Component {
  render() {
    return (
      <div className="register">
        <MetaDecorator title={registrationResume.pageTitle} description={registrationResume.pageDescription} />
        <Signup></Signup>
      </div>
    )
  }
}
export default Registration
