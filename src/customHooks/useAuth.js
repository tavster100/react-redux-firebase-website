import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
})

const useAuth = (props) => {
  const { currentUser } = useSelector(mapState)
  useEffect(() => {
    if (!currentUser) {
      props.history.push('/login') // acces to history from ./hoc/withRouter
    }
    //eslint-disable-next-line
  }, [currentUser])
  return currentUser
}
export default useAuth
