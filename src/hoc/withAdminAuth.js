import { useAdminAuth } from './../customHooks'
const WithAdminAuth = (props) => useAdminAuth(props) && props.children
//get currentUser from redux store / check if admin rights are assigned to account then redirect /access the page

export default WithAdminAuth
