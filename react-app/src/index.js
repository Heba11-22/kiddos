import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import configureStore from './store';
// import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./context/Modal";

const store = configureStore();

const loader = document.querySelector('.loader');
const showLoader = () => loader.classList.remove('loader--hide');

const hideLoader = () => loader.classList.add('loader--hide');

// I added the timeout just to show it :)
// I searched for the spinnig circle online
setTimeout(() => 
ReactDOM.render(
  <React.StrictMode>
  
      <Provider store={store}>
        <ModalProvider>
          <App 
            hideLoader={hideLoader}
            showLoader={showLoader}
          />
        </ModalProvider>
      </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
)
, 1000);
