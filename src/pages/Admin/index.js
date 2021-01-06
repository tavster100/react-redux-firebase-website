import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addProductStart,
  fetchProductsStart,
  deleteProductStart,
} from './../../redux/Products/products.actions'
import './styles.scss'
import bin from './../../assets/bin.png'
import Modal from './../../components/Modal'
import FormInput from './../../components/forms/FormInput'
import FormSelect from './../../components/forms/FormSelect'
import Button from './../../components/forms/Button'
import MetaDecorator from './../../Utils/MetaDecorator'
import LoadMore from '../../components/LoadMore'
import CKEditor from 'ckeditor4-react'

const adminResume = require('../../pagesResume/adminpages.json')

const mapState = ({ productsData }) => ({
  products: productsData.products,
})
//eslint-disable-next-line
const Admin = (props) => {
  const { products } = useSelector(mapState)
  const dispatch = useDispatch()
  const [hideModal, setHideModal] = useState(true)
  //eslint-disable-next-line
  const [productCategory, setProductCategory] = useState('mens')
  const [productName, setProductName] = useState('')
  const [ProductImageURL, setProductImageURL] = useState('')
  const [productPrice, setProductPrice] = useState(0)
  const [productDescription, setProductDescription] = useState('')
  const { data, queryDoc, isLastPage } = products
  useEffect(() => {
    dispatch(fetchProductsStart())
  }, []) //if (![]) =>rerender and dispatch over and over again

  const toggleModal = () => setHideModal(!hideModal)
  const configModal = {
    hideModal,
    toggleModal,
  }
  const resetForm = () => {
    setHideModal(true)
    setProductCategory('mens')
    setProductName('')
    setProductImageURL('')
    setProductPrice(0)
    setProductDescription('')
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
      addProductStart({
        productCategory,
        productName,
        ProductImageURL,
        productPrice,
        productDescription,
      }),
    )
    resetForm()
  }
  const handleLoadMore = () => {
    dispatch(
      fetchProductsStart({
        startAfterDoc: queryDoc,
        persistProducts: data,
      }),
    )
  }
  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  }

  return (
    <div className="admin">
      <MetaDecorator
        title={adminResume.pageTitle}
        description={adminResume.pageDescription}
      />
      <div className="callToActions">
        <ul>
          <li>
            <Button onClick={() => toggleModal()}>Add new product</Button>
          </li>
        </ul>
      </div>
      <Modal {...configModal}>
        <div className="addNewProductForm">
          <form onSubmit={handleSubmit}>
            <h2>Add new product</h2>
            <FormSelect
              label="Category"
              options={[
                {
                  value: 'mens',
                  name: 'Mens',
                },
                {
                  value: 'womens',
                  name: 'Womens',
                },
              ]}
              handleChange={(e) => setProductCategory(e.target.value)}
            />
            <FormInput
              label="Name"
              type="text"
              name="productName"
              value={productName}
              placeholder="Product Name"
              handleChange={(e) => setProductName(e.target.value)}
            />

            <FormInput
              label="Image URL"
              type="url"
              name="ProductImageURL"
              value={ProductImageURL}
              placeholder="Product Image URL"
              handleChange={(e) => setProductImageURL(e.target.value)}
            />

            <FormInput
              label="Price"
              type="number"
              min="0.00"
              max="10000.0"
              step="0.50"
              name="productPrice"
              value={productPrice}
              placeholder="Price"
              handleChange={(e) => setProductPrice(e.target.value)}
            />
            <CKEditor onChange={(e) =>setProductDescription(e.editor.getData())}/>
          <br/>
            <Button type="submit">Add product</Button>
          </form>
        </div>
      </Modal>
      <div className="manageProducts">
        <table border="0" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <th>
                <h1>Manage Products</h1>
              </th>
            </tr>
            <tr>
              <td>
                <table
                  className="results"
                  border="0"
                  cellPadding="10"
                  cellSpacing="0"
                >
                  <tbody>
                    {Array.isArray(data) &&
                      data.length > 0 &&
                      data.map((product, index) => {
                        const {
                          productName,
                          ProductImageURL,
                          productPrice,
                          documentID,
                        } = product
                        return (
                          <tr key={index}>
                            <td>
                              <img
                                className="img"
                                src={ProductImageURL}
                                alt="product-img"
                              />
                            </td>
                            <td>{productName}</td>
                            <td>RON {productPrice}</td>
                            <td>
                              <Button className="deleteicon"
                                onClick={() =>
                                  dispatch(deleteProductStart(documentID))
                                }
                              >
                                <img
                                  src={bin}
                                  alt="ShopLogo"
                                />
                              </Button>
                            </td>
                          </tr>
                        )
                      })}
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td>
                <table border="0" cellPadding="10" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td>{!isLastPage && <LoadMore {...configLoadMore} />}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Admin
