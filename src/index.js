import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/createStore'
import App from './App'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/*make the redux store available for the entire application*/}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
