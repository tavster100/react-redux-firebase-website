import { auth } from './../../firebase/utils'
import { takeLatest, put, all, call /* take  */ } from 'redux-saga/effects'
import {
  handleAddProduct,
  handleFetchProducts,
  handleDeleteProduct,
  handleFetchProduct,
} from './products.helpers'
import productsTypes from './products.types'
import { setProducts, setProduct, fetchProductsStart } from './products.actions'
//adding product to database
export function* addProduct({ payload }) {
  try {
    const timestamp = new Date()
    yield handleAddProduct({
      ...payload,
      productAdminUserUID: auth.currentUser.uid, //uid of the logged in user
      createdDate: timestamp,
    })
    yield put(fetchProductsStart())
  } catch (err) {
    //console.log(err)
  }
}

export function* onAddProductStart() {
  yield takeLatest(productsTypes.ADD_NEW_PRODUCT_START, addProduct)
}

export function* fetchProducts({ payload }) {
  try {
    const products = yield handleFetchProducts(payload)
    yield put(setProducts(products))
  } catch (err) {
    //console.log(err)
  }
}
export function* onFetchProductsStart() {
  yield takeLatest(productsTypes.FETCH_PRODUCTS_START, fetchProducts)
}
export function* deleteProduct({ payload }) {
  try {
    yield handleDeleteProduct(payload)
    yield put(fetchProductsStart())
  } catch (err) {
    //console.log(err)
  }
}
export function* fetchProduct({ payload }) {
  try {
    const product = yield handleFetchProduct(payload)
    yield put(setProduct(product))
  } catch (err) {
    //console.log(err);
  }
}
export function* onFetchProductStart() {
  yield takeLatest(productsTypes.FETCH_PRODUCT_START, fetchProduct)
}

export function* onDeleteProductStart() {
  yield takeLatest(productsTypes.DELETE_PRODUCT_START, deleteProduct)
}
export default function* productsSagas() {
  yield all([
    call(onAddProductStart),
    call(onFetchProductsStart),
    call(onDeleteProductStart),
    call(onFetchProductStart),
  ])
}
