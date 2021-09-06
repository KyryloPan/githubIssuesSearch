import { LOAD_STATUS_ERROR, LOAD_STATUS_INIT, LOAD_STATUS_LOADED, LOAD_STATUS_LOADING } from "../constst/constants";

export interface Issue {
  url: string;
  id: number;
  number: string;
  title: string;
  body: string;
  user: IssueUser;
  labels: IssueLabel[];
  created_at: string;
  state: 'open' | 'closed';
  comments_url: string;
  pull_request?: object;
  isBookmarked?: boolean;
};

export interface IssueUser {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  html_url: string;
};

export interface IssueLabel {
  id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: string;
};

export interface Issue {
  url: string;
  id: number;
  number: string;
  title: string;
  body: string;
  user: IssueUser;
  labels: IssueLabel[];
  created_at: string;
  state: 'open' | 'closed';
  comments_url: string;
  pull_request?: object;
  isBookmarked?: boolean;
};

export interface IssueUser {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  html_url: string;
};

export interface IssueLabel {
  id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: string;
};

export type LoadStatus =
| typeof LOAD_STATUS_INIT
| typeof LOAD_STATUS_LOADING
| typeof LOAD_STATUS_LOADED
| typeof LOAD_STATUS_ERROR;
