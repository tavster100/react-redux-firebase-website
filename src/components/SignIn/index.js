import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import './styles.scss'
import {
  signInUser,
  signInWithGoogle,
  resetAllAuthForms,
} from './../../redux/User/user.actions'

import AuthWrapper from './../../components/AuthWrapper'
import Button from './../forms/Button'
import FormInput from './../forms/FormInput'

const mapState = ({ user }) => ({
  signInSucces: user.signInSucces,
})
// eslint-disable-next-line
const SignIn = (props) => {
  const { signInSucces } = useSelector(mapState)
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const resetForm = () => {
    setEmail('')
    setPassword('')
  }

  useEffect(() => {
    if (signInSucces) {
      resetForm()
      dispatch(resetAllAuthForms())
      props.history.push('/')
    }
  }, [signInSucces])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(signInUser({ email, password }))
  }
  const handleGoogleSignIn = () => {
    dispatch(signInWithGoogle())
  }
  const configAuthWrapper = {
    headline: 'LogIn',
  }
  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit">LogIn</Button>
          <div className="socialSignin">
            <div className="row">
              <Button onClick={handleGoogleSignIn}>Sign in with Google</Button>
            </div>
          </div>
          <div className="links">
            <Link to="/recovery">Reset Password</Link>
          </div>
        </form>
      </div>
    </AuthWrapper>
  )
}
export default withRouter(SignIn)
