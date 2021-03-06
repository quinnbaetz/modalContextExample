import React, {useContext} from 'react';
import Modal from './Modal'
import ModalContext from './ModalContext'

/*
  Simpler as we don't need to maintain state in this component itself
*/

function DeeplyNestedComponent() {
  const {openModal} = useContext(ModalContext)
  function showModal() {
    openModal(<Modal />)
  }

  return (
    <button onClick={showModal}>Show Modal</button>
  );
}

export default DeeplyNestedComponent;
