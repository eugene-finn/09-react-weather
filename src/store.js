import logger from 'redux-logger'; // allows to see the state of the app
import thunk from 'redux-thunk'; // allows you to write action creators that return a function instead of an action
import { applyMiddleware, createStore } from 'redux'; // redux
import Reducers from './reducers/reducers'; // add the reducers


const middlewaer = applyMiddleware(logger, thunk);

// this is the store
const StoreRef = createStore(Reducers, middlewaer);

export default StoreRef;