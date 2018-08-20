import { combineReducers } from 'redux';
import sales from './sales';
import loading from './loading';

export default combineReducers({ sales, loading });
