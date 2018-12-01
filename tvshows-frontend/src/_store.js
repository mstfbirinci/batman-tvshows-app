import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './redux/reducers';
import rootEpic from './redux/epics';
const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware)
);
epicMiddleware.run(rootEpic);

export default store;