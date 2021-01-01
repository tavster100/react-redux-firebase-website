import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store,persistor}from './redux/createStore'
import {PersistGate} from 'redux-persist/integration/react'

import App from './App'
import Favicon from 'react-favicon'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/*make the redux store available for the entire application*/}
      <BrowserRouter>
        <div className="favicon">
          <Favicon url="https://cdn3.iconfinder.com/data/icons/gradient-circle/36/2018-512.png"/>
        </div>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
