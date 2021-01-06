import { firestore } from '../../firebase/utils'

export const handleSaveOrder = (order) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('orders') //if it doesnt exist it will create it
      .doc()
      .set(order)
      .then(() => {
        resolve()
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export const handleGetUserOrderHistory = (uid) => {
  return new Promise((resolve, reject) => {
    //storing firestore collection in a variable
    let ref = firestore.collection('orders').orderBy('orderCreatedDate')
    //filter the collection by orderUserID
    ref = ref.where('orderUserID', '==', uid)
    ref
      .get()
      .then((snap) => {
        const data = [
          ...snap.docs.map((doc) => {
            return {
              ...doc.data(),
              documentID: doc.id,
            }
          }),
        ]

        resolve({ data })
      })
      .catch((err) => {
        reject(err)
      })
  })
}
