import React from 'react'
import './styles.scss'
import SignIn from './../../components/SignIn'
import MetaDecorator from '../../Utils/MetaDecorator'
const loginResume = require('./../../pagesResume/loginpage.json')
// eslint-disable-next-line no-unused-vars
const Login = (props) => {
  return (
    <section className="login">
      <MetaDecorator
        title={loginResume.pageTitle}
        description={loginResume.pageDescription}
      />
      <SignIn />
    </section>
  )
}
export default Login
