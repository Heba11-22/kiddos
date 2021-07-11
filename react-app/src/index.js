import React from 'react';
import ReactDOM from 'react-dom';
import {  transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import configureStore from './store';
import { ModalProvider } from "./context/Modal";

const store = configureStore();

const loader = document.querySelector('.loader');
const showLoader = () => loader.classList.remove('loader--hide');
const hideLoader = () => loader.classList.add('loader--hide');

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.MIDDLE,
  timeout: 3000,
  offset: '40px',
  // you can also just use 'scale'
  transition: transitions.SCALE,
}


// I added the timeout just to show it :)
// I searched for the spinnig circle online
setTimeout(() => 
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} color={"red"} {...options}>
        <ModalProvider>
          <App 
            hideLoader={hideLoader}
            showLoader={showLoader}
          />
        </ModalProvider>
      </AlertProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
, 1000);
