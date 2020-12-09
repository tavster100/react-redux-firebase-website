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
        <span className="name" title={productName}>{productName}</span>
        <span className="price">RON{productPrice}</span>
        <div className="addToCart">
          <Button {...configAddToCartBtn}>Add to cart</Button>
        </div>
      </div>
    </div>
  )
}
export default Product
