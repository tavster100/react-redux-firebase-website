import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/createStore'
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
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
