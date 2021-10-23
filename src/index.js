import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import  burgerBuilderReducer from './components/store/reducers/burgerBuilder';
import orderReducer from './components/store/reducers/order';

const rootReducer = combineReducers({
  burgerReducer:burgerBuilderReducer,
  order:orderReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(
  applyMiddleware(thunk)
));
const app = (
 <Provider store={store}>
  <BrowserRouter>
   <App/>
  </BrowserRouter>
 </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);

reportWebVitals();
