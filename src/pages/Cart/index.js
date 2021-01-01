import React from 'react'
import Checkout from '../../components/Checkout'
import MetaDecorator from '../../Utils/MetaDecorator'


const cartResume=require('../../pagesResume/cartpage.json')

//eslint-disable-next-line
const Cart = ({})=>{

  return  (
    <section className="cart">
      <MetaDecorator
        title={cartResume.pageTitle}
        description={cartResume.pageDescription}
      />
      <div>
        <Checkout/>
      </div>
    </section>

  )
}
export default Cart
