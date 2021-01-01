import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCartItem, addProduct,reduceCartItem } from '../../../redux/Cart/cart.actions'
import Button from '../../forms/Button'
//eslint-disable-next-line
const Item = (product) => {
  const dispatch = useDispatch()
  const {
    productName,
    ProductImageURL,
    productPrice,
    quantity,
    documentID,
  } = product
  const handleRemoveCartItem = (documentID) => {
    dispatch(
      removeCartItem({
        documentID,
      }),
    )
  }
  const handleAddProduct = (product) =>{
    dispatch(
      addProduct(product)
    )
  }
  const handleReduceItem = (product)=>{
    dispatch(
      reduceCartItem(product)
    )
  }
  return (
    <table className="cartItem" border="0" cellSpacing="0" cellPadding="10">
      <tbody>
        <tr>
          <td>
            <img src={ProductImageURL} alt={productName} />
          </td>
          <td>{productName}</td>

          <td>
            <Button className="cartBtn" onClick={()=>handleReduceItem(product)}>{`◄`}</Button>
            <span> { quantity } </span>
            <Button className="cartBtn" onClick={()=>handleAddProduct(product)}>{`►`}</Button>
          </td>

          <td>{productPrice} RON</td>
          <td align="left">
            <Button
              className="cartBtn"
              onClick={() => handleRemoveCartItem(documentID)}
            >
              {`🗑️`}
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
export default Item
