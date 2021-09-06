import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { githubIssuesReducer } from './reducers/githubIssuesReducer';


const rootReducer = combineReducers({ githubIssuesReducer });

export type ApplicationState = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
