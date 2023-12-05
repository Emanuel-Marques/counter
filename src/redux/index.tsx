import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

type ActionType = {
  type: string;
}
const INITIAL_STATE = { count: 10 }

const reducer = (state = INITIAL_STATE, action: ActionType) => state;

const store = createStore(reducer, composeWithDevTools());

export default store;