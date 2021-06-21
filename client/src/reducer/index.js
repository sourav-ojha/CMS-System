import { combineReducers } from 'redux';
import group from './admin';
import authReducer from './auth';

export default combineReducers({ 
    group, authReducer
})