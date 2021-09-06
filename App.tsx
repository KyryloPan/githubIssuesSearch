import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import store from './redux';
import { GithubIssuesScreen } from './screens/GithubIssuesScreen/GithubIssuesScreen';


export default function App() {
  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        <StatusBar style="dark" />
        <GithubIssuesScreen />
      </ReduxProvider>
    </SafeAreaProvider>
  );
}
