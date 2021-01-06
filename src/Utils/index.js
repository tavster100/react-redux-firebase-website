import axios from 'axios'


export const checkUserIsAdmin = (currentUser) => {
  if (!currentUser || !Array.isArray(currentUser.userRoles)) return false //conditions
  const { userRoles } = currentUser
  if (userRoles.includes('admin')) return true

  return false
}

//creating an instance of the api
export const apiInstance = axios.create({
  baseURL:"http://localhost:5001/ecommerce-website-86978/us-central1/api"
  }
)