import React ,{useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { fetchProductStart, setProduct} from '../../redux/Products/products.actions'
import {addProduct} from '../../redux/Cart/cart.actions'
import Button from '../forms/Button'
import './styles.scss'

const mapState = state =>({
  product:state.productsData.product
})
//eslint-disable-next-line
const ProductCard = ({})=>{
  const dispatch = useDispatch()
  const { productID } = useParams()
  const { product } = useSelector(mapState)

  const {
    productName,
    ProductImageURL,
    productPrice,
    productDescription,
  } = product
  useEffect(()=>{
    dispatch(fetchProductStart(productID))

    return ()=>{
      dispatch(
        setProduct({})
      )
    }
  },[])
  const handleAddToCart = (product)=>{
    if(!product) return;
    dispatch(
      addProduct(product)
    )
  }
  const configAddToCartBtn = {
    type:'button',
  }
  return(
    <div className="productCard">
      <div className='hero'>
        <img src={ProductImageURL} alt="productImage"/>
      </div>
      <div className="productDetails">
        <ul>
          <li>
            <h1>
              {productName}
            </h1>
          </li>
          <li>
            <span>
              {productPrice} RON
            </span>
          </li>
          <li>
            <div className='addToCart'>
              <Button {...configAddToCartBtn} onClick={()=>handleAddToCart(product)}>
                Add to cart
              </Button>
            </div>
          </li>
          <li>
            <span dangerouslySetInnerHTML={{__html:productDescription}}  className='prodDesc'/>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default ProductCard