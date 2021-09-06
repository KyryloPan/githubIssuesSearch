import React from 'react';
import { SafeAreaView } from 'react-native';
import { GithubIssuesList } from '../../components/GithubIssuesList/GithubIssuesList';
import { Search } from '../../components/Search/Search';

export const GithubIssuesScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <Search />
      <GithubIssuesList />
    </SafeAreaView>
  );
};
