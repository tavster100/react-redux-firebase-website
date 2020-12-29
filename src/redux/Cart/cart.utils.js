export const existingCartItem = ({ prevCartItems, nextCartItems }) => {
  return prevCartItems.find(
    (cartItem) => cartItem.documentID === nextCartItems.documentID,
  )
}

export const handleAddToCart = ({ prevCartItems, nextCartItems }) => {
  const quantityIncrement = 1
  const cartItemExists = existingCartItem({ prevCartItems, nextCartItems })

  if (cartItemExists) {
    return prevCartItems.map((cartItem) =>
      cartItem.documentID == nextCartItems.documentID
        ? {
            ...cartItem,
            quantity: cartItem.quantity + quantityIncrement,
          }
        : cartItem,
    )
  }
  return [
    ...prevCartItems,
    {
      ...nextCartItems,
      quantity: quantityIncrement,
    },
  ]
}

export const handleRemoveCartItem = ({ prevCartItems, cartItemRemove }) => {
  return prevCartItems.filter(
    (item) => item.documentID !== cartItemRemove.documentID,
  )
}
export const handleReduceCartItem = ({ prevCartItems, cartItemReduce }) => {
  const existingCartItem = prevCartItems.find(
    (cartItem) => cartItem.documentID === cartItemReduce.documentID,
  )

  if (existingCartItem.quantity === 1) {
    return prevCartItems.filter(
      (cartItem) => cartItem.documentID !== existingCartItem.documentID,
    )
  }
  return prevCartItems.map((cartItem) =>
    cartItem.documentID === existingCartItem.documentID
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem,
  )
}
