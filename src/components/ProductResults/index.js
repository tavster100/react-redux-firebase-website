/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { fetchProductsStart } from '../../redux/Products/products.actions'
import Product from './Product'
import FormSelect from '../forms/FormSelect'
import LoadMore from '../LoadMore'
import './styles.scss'

const mapState = ({ productsData }) => ({
  products: productsData.products,
})
// eslint-disable-next-line no-empty-pattern
const ProductResults = ({}) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const {filterType} =useParams()
  const { products } = useSelector(mapState)

  const {data, queryDoc, isLastPage} = products;

  useEffect(() => {
    dispatch(fetchProductsStart({filterType}))
  }, [filterType])

  const handleFilter = (e) => {
    const nextFilter = e.target.value
    history.push(`/search/${nextFilter}`);
  }

  if (!Array.isArray(data)) return null
  if (data.length < 1) {
    return (
      <div className="products">
        <p>No search results.</p>
      </div>
    )
  }
  const configFilters = {
    defaultValue: filterType,
    options: [
      {
        name: 'Show all',
        value: '',
      },
      {
        name: 'Mens',
        value: 'mens',
      },
      {
        name: 'Womens',
        value: 'womens',
      }]
    ,
    handleChange: handleFilter
  }
  const handleLoadMore=()=>{
    dispatch(fetchProductsStart({filterType, startAfterDoc: queryDoc, persistProducts: data}))
  }
  const configLoadMore={
    onLoadMoreEvt:handleLoadMore
  }
  return (
    <div className="products" >
      <h1>Browse Products</h1>
      <FormSelect  {...configFilters}/>
      <div className="productResults">
        {data.map((product) => {
          const {
            ProductImageURL,
            productName,
            productPrice,
            documentID,
          } = product

          if (
            !ProductImageURL ||
            !productName ||
            typeof productPrice === 'undefined'
          ) {
            return null;
          }


          return <Product key={documentID} product={product} />
        })
        }
      </div>
      {!isLastPage &&(<LoadMore {...configLoadMore}/>)}

    </div>
  )
}
export default ProductResults
