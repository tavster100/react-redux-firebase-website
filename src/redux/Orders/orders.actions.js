import orderTypes from './orders.types'
//save action
export const saveOrderHistory = order =>({
  type:orderTypes.SAVE_ORDER_HISTORY_START,
  payload:order
})
//get user order history
export const getUserOrderHistory = uid =>({
  type:orderTypes.GET_USER_ORDER_HISTORY_START,
  payload:uid
})
//set history in redux store
export const setUserOrderHistory = history =>({
  type:orderTypes.SET_USER_ORDER_HISTORY,
  payload:history
})