import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { checkUserSession } from './redux/User/user.actions'

//components
import AdminToolbar from './components/AdminToolbar'

// Higher Order Component
import WithAuth from './hoc/withAuth'
import WithAdminAuth from './hoc/withAdminAuth'

// layouts
import MainLayout from './layouts/MainLayout'
import HomepageLayout from './layouts/HomepageLayout'
import AdminLayout from './layouts/AdminLayout'
import DashBoardLayout from './layouts/DashboardLayout'

// pages
import Homepage from './pages/Homepage'
import Search from './pages/Search'
import './default.scss'
import Login from './pages/Login'
import Recovery from './pages/Recovery'
import Registration from './pages/Registration'
import Admin from './pages/Admin'
import Dashboard from './pages/Dashboard'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
    // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <AdminToolbar />
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
          exact
          path="/search"
          render={() => (
            <MainLayout>
              <Search />
            </MainLayout>
          )}
        />
        <Route
          path="/search/:filterType"
          render={() => (
            <MainLayout>
              <Search />
            </MainLayout>
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
              <DashBoardLayout>
                <Dashboard />
              </DashBoardLayout>
            </WithAuth>
          )}
        />
        <Route
          path="/admin"
          render={() => (
            <WithAdminAuth>
              <AdminLayout>
                <Admin />
              </AdminLayout>
            </WithAdminAuth>
          )}
        />
      </Switch>
    </div>
  )
}
export default App
