import React, {useState, createContext} from 'react';
import logo from './logo.svg';
import './App.css'
import Modal from './Modal'
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
