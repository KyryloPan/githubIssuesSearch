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
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    width: '100%',
    paddingHorizontal: 16,
    alignSelf: 'center',
  },
  button: {
    borderWidth: 1,
    borderColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  buttonText: {
    color: 'blue',
    fontSize: 14,
    fontFamily: 'bold',
  },
  disableText: {
    color: 'grey',
  },
});