import { ACTIONS_GITHUB_CLEAR_ISSUES, ACTIONS_GITHUB_ISSUES_LOAD, ACTIONS_GITHUB_SET_ORGANIZATION_ID, ACTIONS_GITHUB_SET_PAGE, ACTIONS_GITHUB_SET_REPO_ID } from "../../constst/actions";
import { LOAD_STATUS_INIT } from "../../constst/constants";
import { Issue, LoadStatus } from "../../types/githubIssues";

export interface GlobalIssuesState {
  issues: Issue[];
  loading: boolean;
  organizationId: string;
  repoId: string;
  status: LoadStatus;
  error: any;
  currentPage: number;
}

export const initState: GlobalIssuesState = {
  issues: [],
  loading: false,
  organizationId: '',
  repoId: '',
  status: LOAD_STATUS_INIT,
  error: null,
  currentPage: 1,
};

export const githubIssuesReducer = (state: GlobalIssuesState = initState, action: any) => {
  const { type, payload } = action || {};

  if (type === ACTIONS_GITHUB_ISSUES_LOAD) {
    const { status, error } = action.payload;
    const issues = action.payload ? action.payload.issues : state.issues;
    return { ...state, status, error, issues };
  }

  if (type === ACTIONS_GITHUB_CLEAR_ISSUES) {
    return { ...initState };
  }

  if (type === ACTIONS_GITHUB_SET_ORGANIZATION_ID) {
    return { ...state, organizationId: payload };
  }

  if (type === ACTIONS_GITHUB_SET_REPO_ID) {
    return { ...state, repoId: payload };
  }

  if (type === ACTIONS_GITHUB_SET_PAGE) {
    return {  ...state, currentPage: payload };
  }

  return state;
};
