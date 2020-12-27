import React from 'react'
import Button from '../forms/Button'
import './styles.scss'
//eslint-disable-next-line
const LoadMore = ({ onLoadMoreEvt = () => {} }) => {
  return (
    <div className="loadMoreBtn">
      <Button onClick={() => onLoadMoreEvt()}>Load More</Button>
    </div>
    )

}
export default LoadMore
