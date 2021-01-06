import orderTypes from './orders.types'

const INITIAL_STATE = {
  orderHistory:[],
}
const ordersReducer = (state=INITIAL_STATE,action) =>{
  switch (action.type) {
    case orderTypes.SET_USER_ORDER_HISTORY:
      return{
        ...state,
        orderHistory: action.payload
      }
    default:
      return state;
  }
}
export default ordersReducer