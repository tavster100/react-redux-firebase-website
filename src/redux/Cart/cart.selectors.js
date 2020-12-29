import { createSelector } from 'reselect'

export const selectCartData = (state) => state.cartData

export const selectCartItems = createSelector(
  [selectCartData],
  (cartData) => cartData.cartItems,
)

//custom selector to find how many unique items we have in redux store

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((quantity, cartItem) => quantity + cartItem.quantity, 0),
)
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (quantity, cartItem) =>
      quantity + cartItem.quantity * cartItem.productPrice,
    0,
  ),
)