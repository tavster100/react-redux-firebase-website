import React from 'react'
import Directory from './../../components/Directory'
import './styles.scss'
import MetaDecorator from '../../Utils/MetaDecorator'

const homepageResume = require('./../../pagesResume/homepage.json')
// eslint-disable-next-line no-unused-vars
const Homepage = (props) => {
  return (
    <section className="homepage">
      <MetaDecorator
        title={homepageResume.pageTitle}
        description={homepageResume.pageDescription}
      />
      <Directory></Directory>
    </section>
  )
}
export default Homepage
