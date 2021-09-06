import React from 'react';
import { connect } from 'react-redux';
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { style } from './style';
import { Issue, LoadStatus } from '../../types/githubIssues';
import { GlobalStateFull } from '../../redux';
import { LOAD_STATUS_ERROR, LOAD_STATUS_LOADING } from '../../constst/constants';
import { GithubIssueItem } from '../GithubIssuesItem/GithubIssuesItem';
import { setPage } from '../../actions/githubIssuesActions';
import { githubApi } from '../../servises/githubApi';

interface StateProps {
  issues: Issue[];
  status: LoadStatus;
  currentPage: number;
};

interface DispatchProps {
  setPage: typeof setPage;
};

type Props = StateProps & DispatchProps;

const GithubIssuesListRaw: React.FC<Props> = props => {
  const { issues, status, currentPage } = props;

  if (status === LOAD_STATUS_ERROR) {
    return (
      <View style={style.errorCont}>
        <Text style={style.errorText}>Can not find issues..</Text>
      </View>
    )
  }

  return (
    <View>
      {status === LOAD_STATUS_LOADING ? (
        <View style={style.loading}>
        <ActivityIndicator color={'#00aaff'} />
      </View>
      ) : (
        <FlatList
          data={issues}
          keyExtractor={(item) => item.id + ''}
          contentContainerStyle={style.issuesContainer}
          renderItem={({ item }) => (
            <GithubIssueItem
              issue={item}
              // navigation={props.navigation}
            />
          )}
        />
      )}

      <View pointerEvents="box-none" style={style.paginationButtons}>
        <TouchableOpacity
          style={{ width: 120 }}
          disabled={currentPage < 2}
          onPress={() => {
            props.setPage(currentPage - 1);
            githubApi.getIssues();
          }}
        >
          <Text style={style.buttonText}>{'Previous'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          testID="nextPageButton"
          style={{ width: 120 }}
          onPress={() => {
            props.setPage(currentPage + 1);
            githubApi.getIssues();
          }}
        >
          <Text style={style.buttonText}>{'Next'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state: GlobalStateFull): StateProps => {
  const { issues, status, currentPage } = state.githubIssues;

  return {
    issues,
    status,
    currentPage,
  };
};

const mapDispatchToProps: DispatchProps = {
  setPage,
};

export const GithubIssuesList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GithubIssuesListRaw);
