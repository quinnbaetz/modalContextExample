import React, {createContext, useState} from 'react';

const ModalContext = createContext()


export const ModalWrapper = function({children}){
  const [content, setContent] = useState(null)

  /* State management moved up to the top layer so the modal state management is in one place */
  function openModal(content) {
    setContent(content)
  }

  function closeModal() {
    setContent(null)
  }

  /*
    I packaged this all into one for simplicity,
    might be better if we break out the context from where the modals get rendered
  */
  return (
    <ModalContext.Provider value={{openModal, closeModal}}>
      {children}
      {content}
    </ModalContext.Provider>
  )
}

export default ModalContext
