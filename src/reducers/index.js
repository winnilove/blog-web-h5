import {
  combineReducers
} from 'redux';
import {
  user
} from './login'
import {
  chatuser
} from './chatuser'
import {
  chat
} from './chat'
import {
  list
} from './list'

export default combineReducers({
  user,
  chatuser,
  chat,
  list
})