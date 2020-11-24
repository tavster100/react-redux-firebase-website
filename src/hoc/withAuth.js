import { useAuth } from './../customHooks'
// import { withRouter } from 'react-router-dom'
// custom react-hook
const WithAuth = (props) => useAuth(props) && props.children

export default WithAuth
