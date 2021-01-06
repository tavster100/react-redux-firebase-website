/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useMemo } from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import './styles.scss'
import {useSelector} from 'react-redux'
import Product from '../ProductResults/Product'

import slide2 from '../../assets/about-us1.jpg'
import slide3 from '../../assets/logo.png'

const mapState = ({productsData})=>({
  products:productsData.products,
})

//eslint-disable-next-line
const SlideShow = () => {
  const {products: { data }} = useSelector(mapState);
  const [productsInSlide, setProductsInSlide] = useState(4);

  useEffect(() => {
    const listener = () => {
      if (window.innerWidth < 720) {
        setProductsInSlide(2);
      } else if (window.innerWidth < 1280) {
        setProductsInSlide(3);
      } else {
        setProductsInSlide(4);
      }
    };

    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    }
  }, []);

  const slides = useMemo(() => (
    !data ? null : data.reduce((acc, product) => {
      let slideIndex = acc.length - 1;

      if (acc[slideIndex].length === productsInSlide) {
        acc.push([]);
        slideIndex = acc.length - 1;
      }

      acc[slideIndex].push(product);

      return acc;
    }, [[]])
  ), [data, productsInSlide]);

  if (!slides) return null;

  if (data.length < 1) {
    return (
      <div>No items to display</div>
    )
  }

  const slideElements = slides.map((slide, index) => (
    <div className="each-slide" key={index}>
      <div className="slide-background">
        {slide.map((product)=>{
          const {
            ProductImageURL,
            productName,
            productPrice,
            documentID,
          } = product;

          if(!ProductImageURL || !productName || typeof productPrice == 'undefined') return null;

          return (
            <Product
              key={documentID}
              product={product}
              containerStyle={{ width: `${100 / productsInSlide}%` }}
            />
          )
        })}
      </div>
    </div>
  ));

  return(
    <section className='slide-container'>
      <Slide>
        {slideElements}
        {/*<div className='each-slide'>*/}
        {/*  <div className='slide-background'>*/}
        {/*    /!* eslint-disable-next-line no-unused-vars *!/*/}
        {/*    {data.map((product)=>{*/}
        {/*      const {*/}
        {/*        ProductImageURL,*/}
        {/*        productName,*/}
        {/*        productPrice,*/}
        {/*        documentID,*/}
        {/*      } = product*/}
        {/*      if(!ProductImageURL || !productName || typeof productPrice == 'undefined') return null;*/}

        {/*      const configProduct = {*/}
        {/*        ...product*/}
        {/*      }*/}
        {/*      return <Product key={documentID} {...configProduct} />*/}
        {/*    })}*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className='each-slide'>*/}
        {/*  <div className='slide-background2' style={{backgroundImage:`url(${slide2})`, flex: 1}}>*/}
        {/*    <button  className='slide-text'>About US</button>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className='each-slide'>*/}
        {/*  <div className='slide-background3' style={{backgroundImage:`url(${slide3})`, flex: 1}}>*/}
        {/*    <span className='slide-text'>3</span>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </Slide>
    </section>
  )
}
export default SlideShow