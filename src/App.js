/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { auth, handleUserProfile } from './firebase/utils'
import { setCurrentUser } from './redux/User/user.actions'
// import { useSelector, useDispatch } from 'react-redux'
// Higher Order Component
import WithAuth from './hoc/withAuth'

// layouts
import MainLayout from './layouts/MainLayout'
import HomepageLayout from './layouts/HomepageLayout'

// pages
import Homepage from './pages/Homepage'
import './default.scss'
import Login from './pages/Login'
import Recovery from './pages/Recovery'
import Registration from './pages/Registration'
import Dashboard from './pages/Dashboard'

const App = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth)
        userRef.onSnapshot((snapshot) => {
          dispatch(
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
            }),
          )
        })
      }
      dispatch(setCurrentUser(userAuth))
    })
    return () => {
      authListener()
    }
    //eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )}
        />
        <Route
          path="/registration"
          render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}
        />
        <Route
          path="/login"
          render={() => (
            <MainLayout>
              <Login />
            </MainLayout>
          )}
        />
        <Route
          path="/recovery"
          render={() => (
            <MainLayout>
              <Recovery />
            </MainLayout>
          )}
        />
        <Route
          path="/dashboard"
          render={() => (
            <WithAuth>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </WithAuth>
          )}
        />
      </Switch>
    </div>
  )
}
export default App
