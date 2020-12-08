import { firestore } from './../../firebase/utils'

export const handleAddProduct = (product) => {
    return new Promise((resolve, reject) => {
        firestore //using firestore
            .collection('products') //look for products collection
            .doc() //create a new document
            .set(product) // set the values of this document with the value that we pass to the helper function (product)
            .then(() => {
                //then callback (if succes =>resolve , if we catch err =>reject and pass the err)
                resolve()
            })
            .catch((err) => {
                reject(err)
            })
    })
}
export const handleFetchProducts = () => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('products')
            .orderBy('createdDate')
            .get()
            .then((snapshot) => {
                const productsArray = snapshot.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        documentID: doc.id,
                    }
                })
                resolve(productsArray)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
export const handleDeleteProduct = (documentID) => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('products')
            .doc(documentID)
            .delete()
            .then(() => {
                resolve()
            })
            .catch((err) => {
                reject(err)
            })
    })
}