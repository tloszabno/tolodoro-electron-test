import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { reducer as todoReducer } from '../store/reducer';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    todos: todoReducer
  });
}
