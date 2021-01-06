import { combineReducers } from 'redux'
import userReducer from './User/user.reducer'
import productsReducer from './Products/products.reducer'
import cartReducer from './Cart/cart.reducer'
import {persistReducer} from 'redux-persist'
import ordersReducer from './Orders/orders.reducers'
import storage from 'redux-persist/lib/storage'

export const rootReducer = combineReducers({
    user: userReducer,
    productsData: productsReducer,
    cartData: cartReducer,
    ordersData: ordersReducer,
})

const configStorage = {
    key:'root',
    storage,
    whitelist:['cartData']
}
export default persistReducer(configStorage, rootReducer)