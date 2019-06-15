import React from 'react';
import {ModalWrapper} from './ModalContext'
import DeeplyNestedComponent from './DeeplyNestedComponent';

function App() {
  return (
    <ModalWrapper>
      <DeeplyNestedComponent />
    </ModalWrapper>
  );
}

export default App;
