import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import csrfFetch, { restoreCSRF } from './store/csrf';
import { restoreSession } from './store/session';
import * as sessionActions from "./store/session"

const initialState = {}

const store = configureStore(initialState);

window.store = store

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

const renderApplication = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// if (
//   sessionStorage.getItem("currentUser") === null ||
//   sessionStorage.getItem("X-CSRF-Token") === null 
// ) {
  store.dispatch(sessionActions.restoreSession()).then(renderApplication);
// } else {
//   // debugger
//   renderApplication();
// }