import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { Issue, IssueLabel } from '../../types/githubIssues';
import { style } from './style';

interface Props {
  issue: Issue;
};

export const GithubIssueItem: React.FC<Props> = props => {
  const { issue } = props;

  const goToDetails = () => {
    // props.navigation.push('IssueDetails', { issue });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8} onPress={goToDetails} style={style.card}
    >
      <Text style={style.title}>{issue.title}</Text>
      <View style={style.labels}>
        {issue.labels.map((label: IssueLabel) => (
          <View key={label.id} style={[style.label, { backgroundColor: '#' + label.color }]}>
            <Text style={style.labelText}>
              {label.name}
            </Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );
};
