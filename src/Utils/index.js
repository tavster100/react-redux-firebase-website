export const checkUserIsAdmin = (currentUser) => {
  if (!currentUser || !Array.isArray(currentUser.userRoles)) return false //conditions
  const { userRoles } = currentUser
  if (userRoles.includes('admin')) return true

  return false
}
