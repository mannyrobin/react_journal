import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { loadState, saveState } from '../commons/localStorage';

const persistedState = loadState();
const allEnhancers = compose(applyMiddleware(thunk));

const store = createStore(reducer, allEnhancers);

store.subscribe(() => {});

export default store;
