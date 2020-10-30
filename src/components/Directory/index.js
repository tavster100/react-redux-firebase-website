/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import ShopMen from './../../assets/shopMens1.jpg'
import ShopWomen from './../../assets/shopWomens2.jpg'
import './styles.scss'
const Directory = () => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopMen})`,
          }}
        >
          <a>Shop Mens</a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopWomen})`,
          }}
        >
          <a>Shop Womens</a>
        </div>
      </div>
    </div>
  )
}

export default Directory
