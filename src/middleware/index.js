import thunk from 'redux-thunk';
import { applyMiddleware, compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleWare = [ thunk ];

export default composeEnhancers(applyMiddleware(...middleWare));
