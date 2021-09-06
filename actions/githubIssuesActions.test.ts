import { ACTIONS_GITHUB_CLEAR_ISSUES, ACTIONS_GITHUB_ISSUES_LOAD, ACTIONS_GITHUB_SET_ORGANIZATION_ID, ACTIONS_GITHUB_SET_PAGE, ACTIONS_GITHUB_SET_REPO_ID } from "../constst/actions";
import { LOAD_STATUS_LOADING } from "../constst/constants";
import { clearIssues, loadIssues, setOrganizationId, setPage, setRepoId } from "./githubIssuesActions";


  describe('githubIssuesActions unit tests', () => {
    it('loadIssues should return expected { type, payload }', () => {
      expect(loadIssues([], LOAD_STATUS_LOADING, null)).toEqual({type: ACTIONS_GITHUB_ISSUES_LOAD, payload: {error: null, issues: [], status: 'loading' }});
    });

    it('clearIssues should return expected { type }', () => {
      expect(clearIssues()).toEqual({ type: ACTIONS_GITHUB_CLEAR_ISSUES });
    });

    it('setOrganizationId should return expected { type, payload }', () => {
      expect(setOrganizationId('facebook')).toEqual({ type: ACTIONS_GITHUB_SET_ORGANIZATION_ID, payload: 'facebook' });
    });

    it('setRepoId should return expected { type, payload }', () => {
      expect(setRepoId('react')).toEqual({ type: ACTIONS_GITHUB_SET_REPO_ID, payload: 'react' });
    });

    it('setPage should return expected { type, payload }', () => {
      expect(setPage(3)).toEqual({ type: ACTIONS_GITHUB_SET_PAGE, payload: 3 });
    });

  });


