import { combineReducers } from 'redux';
import {betReducer} from './betReducer';
import { appReducer } from './appReducer';


export default combineReducers({
  bet: betReducer,
  app: appReducer
});
