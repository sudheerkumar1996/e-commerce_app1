//2
import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';

export default combineReducers ({
    user: userReducer//goes to the actual reducer we want
});