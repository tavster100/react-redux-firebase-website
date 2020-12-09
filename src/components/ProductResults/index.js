/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsStart } from '../../redux/Products/products.actions'
import Product from './Product'
import FormSelect from '../forms/FormSelect'
import './styles.scss'
const mapState = ({ productsData }) => ({
  products: productsData.products,
})
// eslint-disable-next-line no-empty-pattern
const ProductResults = ({}) => {
  const dispatch = useDispatch()
  const { products } = useSelector(mapState)

  useEffect(() => {
    dispatch(fetchProductsStart())
  }, [dispatch])

  if (!Array.isArray(products)) return null
  if (products.length < 1) {
    return (
      <div className="products">
        <p>No search results.</p>
      </div>
    )
  }
  return (
    <div className="products">
      <h1>Browse Products</h1>
      <FormSelect />
      <div className="productResults">
        {products.map((product, pos) => {
          const { ProductImageURL, productName, productPrice, documentID } = product;

          if (
            !ProductImageURL ||
            !productName ||
            typeof productPrice === 'undefined'
          )
            return null
          const configProduct = {
            ProductImageURL,
            productName,
            productPrice,
          }

          return <Product key={documentID} {...configProduct} />
        })}
      </div>
    </div>
  )
}
export default ProductResults
