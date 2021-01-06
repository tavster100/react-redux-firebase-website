import React, { useState,useEffect } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import FormInput from '../forms/FormInput'
import Button from '../forms/Button'
import { CountryDropdown } from 'react-country-region-selector'
import './styles.scss'
import { apiInstance } from '../../Utils'
import { selectCartItemsCount, selectCartTotal ,selectCartItems} from '../../redux/Cart/cart.selectors'
import {saveOrderHistory} from '../../redux/Orders/orders.actions'
import { createStructuredSelector } from 'reselect'
import { useSelector ,useDispatch } from 'react-redux'
//import {clearCart} from '../../redux/Cart/cart.actions'
import {useHistory} from 'react-router-dom'

const initialAddressState = {
  line1: '',
  line2: '',
  city: '',
  state: '',
  postal_code: '',
  country: '',
}
const mapState = createStructuredSelector({
  total: selectCartTotal,
  itemCount:selectCartItemsCount,
  cartItems:selectCartItems,
})
const PaymentDetails = () => {
  //eslint-disable-next-line
  const history = useHistory()
  const dispatch = useDispatch()
  const stripe = useStripe()
  const elements = useElements()
  const { total ,itemCount ,cartItems } = useSelector(mapState)
  //creating a basic object that can handle shipping and billing
  const [billingAddress, setBillingAddress] = useState({
    ...initialAddressState,
  })
  const [shippingAddress, setShippingAddress] = useState({
    ...initialAddressState,
  })
  const [recipientName, setRecipientName] = useState('')
  const [nameOnCard, setNameOnCard] = useState('')

  useEffect(()=>{
    if(itemCount<1){
      history.push('/dashboard')
    }
  },[itemCount])
  const handleShipping = (evt) => {
    const { name, value } = evt.target
    setShippingAddress({
      ...shippingAddress,
      [name]: value, //the new value
    })
  }
  const handleBilling = (evt) => {
    const { name, value } = evt.target
    setBillingAddress({
      ...billingAddress,
      [name]: value, //the new value
    })
  }
  const handleFormSubmit = async (evt) => {
    evt.preventDefault()
    const cardElement = elements.getElement('card')

    if (
      !shippingAddress.line1 ||
      !shippingAddress.city ||
      !shippingAddress.state ||
      !shippingAddress.postal_code ||
      !shippingAddress.country ||
      !billingAddress.line1 ||
      !billingAddress.city ||
      !billingAddress.state ||
      !billingAddress.postal_code ||
      !billingAddress.country ||
      !recipientName ||
      !nameOnCard
    ) {
      return
    }
    apiInstance
      .post('/payments/create', {
        amount: total *100,
        shipping: {
          name: recipientName,
          address: {
            ...shippingAddress,
          },
        },
      })
      .then(({ data: clientSecret }) => {
        stripe
          .createPaymentMethod({
            type: 'card',
            card: cardElement,
            billing_details: {
              name: nameOnCard,
              address: {
                ...billingAddress,
              },
            },
          })
          .then(({ paymentMethod }) => {
            stripe
              .confirmCardPayment(clientSecret, {
                payment_method: paymentMethod.id,
              })
              // eslint-disable-next-line no-unused-vars
              .then(({ paymentIntent }) => {

                const configOrder = {
                  orderTotal: total,
                  orderItems: cartItems.map(item => {
                    const {documentID,ProductImageURL,productName,productPrice,quantity} = item
                    return{
                      documentID,
                      ProductImageURL,
                      productPrice,
                      productName,
                      quantity
                    }
                  })
                }
                dispatch(saveOrderHistory(configOrder))

              })
          })
      })
  }
  const configCardElement = {
    iconStyle: 'solid',
    style: {
      base: {
        fontSize: '16px',
      },
    },
    hidePostalCode: true,
  }
  return (
    <div className="paymentDetails">
      <form onSubmit={handleFormSubmit}>
        <div className="group">
          <h2>Shipping Address</h2>
          <FormInput
            required
            placeholder="Recipient Name"
            name="recipientName"
            value={recipientName}
            type="text"
            handleChange={(evt) => setRecipientName(evt.target.value)}
          />
          <FormInput
            required
            placeholder="Line 1"
            name="line1"
            type="text"
            value={shippingAddress.line1}
            handleChange={(evt) => handleShipping(evt)}
          />
          <FormInput
            placeholder="Line 2"
            name="line2"
            type="text"
            value={shippingAddress.line2}
            handleChange={(evt) => handleShipping(evt)}
          />
          <FormInput
            required
            placeholder="City"
            name="city"
            type="text"
            value={shippingAddress.city}
            handleChange={(evt) => handleShipping(evt)}
          />
          <FormInput
            required
            placeholder="State"
            name="state"
            type="text"
            value={shippingAddress.state}
            handleChange={(evt) => handleShipping(evt)}
          />
          <FormInput
            required
            placeholder="Postal Code"
            name="postal_code"
            type="text"
            value={shippingAddress.postal_code}
            handleChange={(evt) => handleShipping(evt)}
          />
          <div className="formRow checkoutInput">
            <CountryDropdown
              required
              valueType="short"
              value={shippingAddress.country}
              onChange={(val) =>
                handleShipping({
                  target: {
                    name: 'country',
                    value: val,
                  },
                })
              }
            />
          </div>
        </div>

        <div className="group">
          <h2>Billing Address</h2>
          <FormInput
            required
            placeholder="Name on Card"
            type="text"
            name="nameOnCard"
            value={nameOnCard}
            handleChange={(evt) => setNameOnCard(evt.target.value)}
          />
          <FormInput
            required
            placeholder="Line 1"
            type="text"
            name="line1"
            value={billingAddress.line1}
            handleChange={(evt) => handleBilling(evt)}
          />
          <FormInput
            placeholder="Line 2"
            name="line2"
            type="text"
            value={billingAddress.line2}
            handleChange={(evt) => handleBilling(evt)}
          />
          <FormInput
            required
            placeholder="City"
            name="city"
            type="text"
            value={billingAddress.city}
            handleChange={(evt) => handleBilling(evt)}
          />
          <FormInput
            required
            placeholder="State"
            name="state"
            type="text"
            value={billingAddress.state}
            handleChange={(evt) => handleBilling(evt)}
          />
          <FormInput
            required
            placeholder="Postal Code"
            name="postal_code"
            type="text"
            value={billingAddress.postal_code}
            handleChange={(evt) => handleBilling(evt)}
          />
          <div className="formRow checkoutInput">
            <CountryDropdown
              required
              valueType="short"
              value={billingAddress.country}
              onChange={(val) =>
                handleBilling({
                  target: {
                    name: 'country',
                    value: val,
                  },
                })
              }
            />
          </div>
        </div>

        <div className="group">
          <h2>Card Details</h2>
          <CardElement options={configCardElement} />
        </div>
        <Button type='submit'>Pay Now</Button>
      </form>
    </div>
  )
}
export default PaymentDetails
