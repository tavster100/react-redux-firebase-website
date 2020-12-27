import React from 'react'
import {Link} from 'react-router-dom'
import Button from './../../forms/Button'
const Product = ({ documentID,ProductImageURL, productName, productPrice }) => {
  if (!documentID || !ProductImageURL || !productName || typeof productPrice === 'undefined')
    return null
  const configAddToCartBtn = {
    type: 'button',
  }
  return (
    <div className="product">
      <div className="icon">
        <Link to={`/product/${documentID}`}>
          <img src={ProductImageURL} alt={productName} />
        </Link>
      </div>
      <div className="details">
        <ul>
          <li>
            <Link to={`/product/${documentID}`}>
              <span className="name" >{productName}</span>
            </Link>
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
