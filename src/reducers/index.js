import {combineReducers} from 'redux'
import  breakReducer from './breakReducer'


export default combineReducers({
  break: breakReducer
})