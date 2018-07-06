import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import { 
  RECEIVE_USER, 
  RECEIVE_ALL_USERS 
} from '../actions/user_actions'

export default (state = {}, action) => {
  Object.freeze(state)
  const newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_USER:
    case RECEIVE_CURRENT_USER:
      newState[action.user.id] = action.user
      return newState

    case RECEIVE_ALL_USERS:
      return action.payload.users
      
    default:
      return state
  }
}