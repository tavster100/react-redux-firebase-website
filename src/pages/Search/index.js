import React from 'react'
import ProductResults from './../../components/ProductResults'
import MetaDecorator from '../../Utils/MetaDecorator'

const searchResume=require('./../../pagesResume/searchpage.json')
// eslint-disable-next-line no-empty-pattern
const Search = ({}) => {
  return (
    <div className="searchPage">
      <MetaDecorator title={searchResume.pageTitle} description={searchResume.pageDescription}/>
      <ProductResults />
    </div>
  )
}
export default Search
