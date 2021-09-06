import {
  ACTIONS_GITHUB_CLEAR_ISSUES,
  ACTIONS_GITHUB_ISSUES_LOAD,
  ACTIONS_GITHUB_SET_ORGANIZATION_ID,
  ACTIONS_GITHUB_SET_PAGE,
  ACTIONS_GITHUB_SET_REPO_ID,
  ACTION_GITHUB_GET_ISSUES_PENDING,
} from '../constst/actions';
import { Issue, LoadStatus } from '../types/githubIssues';

export const getIssuesPending = () => ({
  type: ACTION_GITHUB_GET_ISSUES_PENDING,
});

export const loadIssues = (issues?: Issue[], status?: LoadStatus, error?: any) => {
  const payload = issues === undefined ? { status, error } : { issues, status, error }
  return {
    type: ACTIONS_GITHUB_ISSUES_LOAD,
    payload,
  }
};

export const clearIssues = () => ({
  type: ACTIONS_GITHUB_CLEAR_ISSUES,
});

export const setOrganizationId = (orgId: string) => ({
  type: ACTIONS_GITHUB_SET_ORGANIZATION_ID,
  payload: orgId,
});

export const setRepoId = (repoId: string) => ({
  type: ACTIONS_GITHUB_SET_REPO_ID,
  payload: repoId,
});

export const setPage = (pageNumber: number) => ({
  type: ACTIONS_GITHUB_SET_PAGE,
  payload: pageNumber,
});


