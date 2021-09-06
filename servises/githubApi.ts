import store from '../redux';
import axios from 'axios';
import { getIssuesPending, loadIssues } from '../actions/githubIssuesActions';
import { Issue } from '../types/githubIssues';
import { LOAD_STATUS_ERROR, LOAD_STATUS_LOADED, LOAD_STATUS_LOADING } from '../constst/constants';

export const githubApi = (() => {
  const getIssues = () => {
    const { organizationId, repoId, currentPage } = store.getState().githubIssues;
    console.log('currentPage from api =====>', currentPage);

    const baseUrl = 'https://api.github.com';
    let fullUrl = `${baseUrl}/${`repos/${organizationId}/${repoId}/issues?&page=${currentPage}`}`;
    store.dispatch(getIssuesPending())

    store.dispatch(loadIssues([], LOAD_STATUS_LOADING, null));

    return axios.get(fullUrl)
      .then(response => {
        const data: Issue[] = response.data;
        store.dispatch(loadIssues(data, LOAD_STATUS_LOADED, null));
      })
      .catch(error => {
        store.dispatch(loadIssues([], LOAD_STATUS_ERROR, error));
      });
  }
  return {
    getIssues,
  }
})();
