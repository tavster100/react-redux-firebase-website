import React from 'react'
import './styles.scss'

const Modal = ({ hideModal, toggleModal, children }) => {
  if (hideModal) return null
  return (
    <>
      <button className="modalOverlay" onClick={() => toggleModal(true)} />
      <div className="modal">{children}</div>
    </>
  )
}
export default Modal
