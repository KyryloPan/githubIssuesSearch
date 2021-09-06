import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { githubIssuesReducer, GlobalIssuesState } from './reducers/githubIssuesReducer';

export interface GlobalStateFull {
  githubIssues: GlobalIssuesState;
}

const rootReducer = combineReducers<GlobalStateFull>({
  githubIssues: githubIssuesReducer
});

export type ApplicationState = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
