import { legacy_createStore as createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { StartState } from '../const/const';

const initialState = {
  contacts: StartState,
  filters: '',
};

const rootReducer = (state = initialState, action) => {
  return state;
};
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
