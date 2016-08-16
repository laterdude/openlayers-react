import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers);
store.subscribe(() => console.log("Current State:", store.getState()));

export default store;