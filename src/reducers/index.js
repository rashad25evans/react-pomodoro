import {combineReducers} from 'redux'
import  breakReducer from './break.reducer'
import  sessionReducer from './session.reducer'


export default combineReducers({
  break: breakReducer,
  session: sessionReducer
})