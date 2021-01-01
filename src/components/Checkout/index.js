import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectCartItems,selectCartTotal } from '../../redux/Cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import './styles.scss'
import Button from '../forms/Button'
import Item from './Item'

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  total:selectCartTotal
})

//eslint-disable-next-line
const Checkout = ({}) => {
  const { cartItems ,total } = useSelector(mapState)
  const errMsg = "You have no items in your cart";
  const history = useHistory()
  return (
    <div className="checkout">
      <h1>MY CART</h1>
      <div className="cart">
        {cartItems.length>0 ? (
        <table border="0" cellPadding="0" cellSpacing="10">
          <tbody>
            <tr>
              <table
                className="checkoutHeader"
                border="0"
                cellPadding="0"
                cellSpacing="10"
              >
                <tbody>
                  <tr>
                    <th>Product</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Remove</th>
                  </tr>
                </tbody>
              </table>
            </tr>
            <tr>
              <table border="0" cellPadding="0" cellSpacing="0">
                <tbody>
                  {cartItems.map((item, pos) => {
                    return (
                      <tr key={pos}>
                        <td>
                          <Item {...item}/>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </tr>
            <tr>
              <table align="right" border="0" cellSpacing="0" cellPadding="10">
                <tr align="left">
                  <td>
                    <h3>Total: {total} RON </h3>
                  </td>
                </tr>
                <tr>
                  <table border="0" cellPadding="10" cellSpacing="0">
                    <tbody>
                      <tr>
                        <td>
                          <Button onClick={()=>history.goBack()}>Continue Shopping</Button>
                        </td>
                        <td>
                          <Button>Checkout</Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </tr>
              </table>
            </tr>
          </tbody>
        </table>
        ) : (
          <div className="noItems">
            <h1 className="text">{errMsg}</h1>
            <Button onClick={()=>history.push('/search')}>
              Back to shop
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
export default Checkout
