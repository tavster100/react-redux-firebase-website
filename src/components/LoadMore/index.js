import React from 'react'
import Button from '../forms/Button'

//eslint-disable-next-line
const LoadMore = ({ onLoadMoreEvt = () => {} }) => {
  return <Button onClick={() => onLoadMoreEvt()}>Load More</Button>
}
export default LoadMore
