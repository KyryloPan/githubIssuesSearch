import { ACTIONS_GITHUB_CLEAR_ISSUES, ACTIONS_GITHUB_ISSUES_LOAD, ACTIONS_GITHUB_SET_ORGANIZATION_ID, ACTIONS_GITHUB_SET_PAGE, ACTIONS_GITHUB_SET_REPO_ID } from "../../constst/actions";
import { LOAD_STATUS_INIT, LOAD_STATUS_LOADED } from "../../constst/constants";
import { githubIssuesReducer, initState } from "./githubIssuesReducer";


describe('githubIssuesReducer test suite ===>', () => {
  it('should return initial state', () => {
    expect(githubIssuesReducer(undefined, {})).toEqual(initState);
  });

  it('should handle ACTIONS_GITHUB_ISSUES_LOAD and update state', () => {
    const action = {
      type: ACTIONS_GITHUB_ISSUES_LOAD,
      payload: {
        issues: [{mockedVal: 123}],
        loading: false,
        organizationId: '',
        repoId: '',
        status: LOAD_STATUS_LOADED,
        error: null,
        currentPage: 1,
      },
    };

    expect(githubIssuesReducer(initState, action)).toEqual({
      issues: [{mockedVal: 123}],
      loading: false,
      organizationId: '',
      repoId: '',
      status: LOAD_STATUS_LOADED,
      error: null,
      currentPage: 1,
    });
  });

  it('should handle ACTIONS_GITHUB_CLEAR_ISSUES and return init state', () => {
    const action = {
      type: ACTIONS_GITHUB_CLEAR_ISSUES,
      payload: {
        issues: [{mockedVal: 123}],
        loading: false,
        organizationId: '',
        repoId: '',
        status: LOAD_STATUS_LOADED,
        error: null,
        currentPage: 1,
      },
    };

    expect(githubIssuesReducer(initState, action)).toEqual({
      issues: [],
      loading: false,
      organizationId: '',
      repoId: '',
      status: LOAD_STATUS_INIT,
      error: null,
      currentPage: 1,
    });
  });

  it('should handle ACTIONS_GITHUB_SET_ORGANIZATION_ID and update state', () => {
    const action = {
      type: ACTIONS_GITHUB_SET_ORGANIZATION_ID,
      payload: 'organizationId',
    };

    expect(githubIssuesReducer(initState, action)).toEqual({
      issues: [],
      loading: false,
      organizationId: 'organizationId',
      repoId: '',
      status: LOAD_STATUS_INIT,
      error: null,
      currentPage: 1,
    });
  });

  it('should handle ACTIONS_GITHUB_SET_REPO_ID and update state', () => {
    const action = {
      type: ACTIONS_GITHUB_SET_REPO_ID,
      payload: 'repoId',
    };

    expect(githubIssuesReducer(initState, action)).toEqual({
      issues: [],
      loading: false,
      organizationId: '',
      repoId: 'repoId',
      status: LOAD_STATUS_INIT,
      error: null,
      currentPage: 1,
    });
  });

  it('should handle ACTIONS_GITHUB_SET_PAGE and update state', () => {
    const action = {
      type: ACTIONS_GITHUB_SET_PAGE,
      payload: 3,
    };

    expect(githubIssuesReducer(initState, action)).toEqual({
      issues: [],
      loading: false,
      organizationId: '',
      repoId: '',
      status: LOAD_STATUS_INIT,
      error: null,
      currentPage: 3,
    });
  });

});
