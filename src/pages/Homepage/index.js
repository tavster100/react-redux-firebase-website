import React from 'react'
import Directory from './../../components/Directory'
import './styles.scss'
import MetaDecorator from '../../Utils/MetaDecorator'
import SlideShow from '../../components/SlideShow'

const homepageResume = require('./../../pagesResume/homepage.json')
// eslint-disable-next-line no-unused-vars
const Homepage = (props) => {
  return (
    <div className="homepage">
      <MetaDecorator
        title={homepageResume.pageTitle}
        description={homepageResume.pageDescription}
      />
      <Directory />
      <SlideShow/>
    </div>
  )
}
export default Homepage
