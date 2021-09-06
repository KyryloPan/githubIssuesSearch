import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  issuesContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 80,
  },
  loading: {
    marginTop: 24,
    alignSelf: 'center',
  },
  errorCont: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  errorText: {
    fontSize: 20,
  },
  paginationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: 'blue',
    fontSize: 12,
    fontFamily: 'muli-extra-bold',
    letterSpacing: 0.8,
  },
});