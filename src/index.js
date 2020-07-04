import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore , combineReducers} from 'redux'
import {Provider} from 'react-redux'

//import reducer from './component/Reducers'
import reducerA from './component/reducerA'
import reducerB from './component/reducerB'

const rootStore = combineReducers({
  rootA:reducerA,
  rootB:reducerB
})

const stor = createStore(rootStore)

ReactDOM.render(
  <Provider store={stor}>
  <React.StrictMode>
    <App />
  </React.StrictMode> 
  </Provider>
   ,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
