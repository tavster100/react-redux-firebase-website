import React from 'react'
import Button from './../../forms/Button'
const Product = ({ ProductImageURL, productName, productPrice }) => {
  if (!ProductImageURL || !productName || typeof productPrice === 'undefined')
    return null
  const configAddToCartBtn = {
    type: 'button',
  }
  return (
    <div className="product">
      <div className="icon">
        <img src={ProductImageURL} alt={productName} />
      </div>
      <div className="details">
        <ul>
          <li>
            <span className="name">{productName}</span>
          </li>
          <li>
            <span className="price">RON{productPrice}</span>
          </li>
          <li>
            <div className="addToCart">
              <Button {...configAddToCartBtn}>Add to cart</Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Product
