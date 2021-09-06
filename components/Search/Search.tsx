import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { clearIssues, setOrganizationId, setRepoId } from '../../actions/githubIssuesActions';
import { githubApi } from '../../servises/githubApi';
import { style } from '../Search/style';

interface DispatchProps {
  setOrganizationId: typeof setOrganizationId;
  setRepoId: typeof setRepoId;
  clearIssues: typeof clearIssues;
}

type Props = DispatchProps;

const SearchRaw: React.FC<Props> = (props) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [organizationInputVal, setOrganizationInputVal] = useState('');
  const [repoIdInputVal, setRepoIdInputVal] = useState('');

  const viewIssues = () => {
    props.setRepoId(repoIdInputVal);
    props.setOrganizationId(organizationInputVal);
    githubApi.getIssues();
  };

  const cancel = () => {
    props.clearIssues();
  };

  return (
    <View style={style.searchCont}>
      <View style={style.inputs}>
        <View>
          <Text>Organization:</Text>
          <TextInput
            value={organizationInputVal}
            onChangeText={setOrganizationInputVal}
            autoCapitalize='none'
            style={[style.input, { borderColor: isFocused ? 'orange' : 'grey' } ]}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </View>
        <View>
          <Text>Repository:</Text>
          <TextInput
            value={repoIdInputVal}
            onChangeText={setRepoIdInputVal}
            autoCapitalize='none'
            style={[style.input, { borderColor: isFocused ? 'orange' : 'grey' } ]}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </View>
      </View>

      <View style={style.buttonsCont}>
        <Button
          onPress={() => cancel()}
          title='Cancel'
          color='grey'
        />
        <Button
          onPress={() => viewIssues()}
          title='Search'
          color='green'
        />
      </View>

    </View>

  );
};

const mapDispatchToProps: DispatchProps = {
  setOrganizationId,
  setRepoId,
  clearIssues,
};

export const Search = connect<{}, DispatchProps>(
  null,
  mapDispatchToProps,
)(SearchRaw);
