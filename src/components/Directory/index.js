/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import ShopMen from './../../assets/shopMens1.jpg'
import ShopWomen from './../../assets/shopWomens2.jpg'
import { Link } from 'react-router-dom'
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
          <Link to={'/search/mens'} >
            <span className="linkShops"> Shop Mens </span>
          </Link>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopWomen})`,
          }}
        >
          <Link to={'/search/womens'}>
          <span className='linkShops'> Shop Womens </span>
        </Link>

        </div>
      </div>
    </div>
  )
}

export default Directory
