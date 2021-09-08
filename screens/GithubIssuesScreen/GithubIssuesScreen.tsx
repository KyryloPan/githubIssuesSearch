import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { GithubIssuesList } from '../../components/GithubIssuesList/GithubIssuesList';
import { Search } from '../../components/Search/Search';

export const GithubIssuesScreen: React.FC = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Search />
      <GithubIssuesList />
    </SafeAreaView>

  );
};
