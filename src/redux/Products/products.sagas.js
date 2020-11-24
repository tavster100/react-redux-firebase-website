import { auth } from './../../firebase/utils'
import { takeLatest, put, all, call /* take  */ } from 'redux-saga/effects'
import {
    handleAddProduct,
    handleFetchProducts,
    handleDeleteProduct,
} from './products.helpers'
import productsTypes from './products.types'
import { setProducts, fetchProductsStart } from './products.actions'

export function* addProduct({
    //adding product to database
    payload: { productCategory, productName, ProductImageURL, productPrice },
}) {
    try {
        const timestamp = new Date()
        yield handleAddProduct({
            productCategory,
            productName,
            ProductImageURL,
            productPrice,
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

export function* fetchProducts() {
    try {
        const products = yield handleFetchProducts()
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

export function* onDeleteProductStart() {
    yield takeLatest(productsTypes.DELETE_PRODUCT_START, deleteProduct)
}
export default function* productsSagas() {
    yield all([
        call(onAddProductStart),
        call(onFetchProductsStart),
        call(onDeleteProductStart),
    ])
}