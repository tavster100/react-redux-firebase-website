import React from 'react'
import {Link} from 'react-router-dom'
import Button from './../../forms/Button'
import {useDispatch} from 'react-redux'
import {addProduct} from '../../../redux/Cart/cart.actions'

const Product = ({
  product,
  containerStyle,
}) => {
  const {
    documentID,
    ProductImageURL,
    productName,
    productPrice,
  } = product;

  const dispatch = useDispatch()

  if (!documentID || !ProductImageURL || !productName || typeof productPrice === 'undefined') {
    return null
  }

  const configAddToCartBtn = {
    type: 'button',
  }

  const handleAddToCart = (product)=>{
    if(!product) return;

    dispatch(
      addProduct(product)
    )
  }

  return (
    <div className="product-container" style={containerStyle}>
      <div className="product">
        <div className="icon">
          <Link to={`/product/${documentID}`}>
            <img src={ProductImageURL} alt={productName} />
          </Link>
        </div>
        <div className="details">
          <Link to={`/product/${documentID}`} className="name">
            {productName}
          </Link>
          <span className="price">RON{productPrice}</span>
          <div className="addToCart">
            <Button  {...configAddToCartBtn} onClick={()=>handleAddToCart(product)}>Add to cart</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Product
