import React, {useContext} from 'react';
import ModalContext from './ModalContext'

/*
  Having state be kept in a wrapper through context allows a modal to manage
  itself closing through that instead of through it's parent element
*/

export default () => {
  const {closeModal} = useContext(ModalContext)

  return (
    <div>
      <p>A bunch of modal content</p>
      <button onClick={closeModal}>Close</button>
    </div>
  )
}