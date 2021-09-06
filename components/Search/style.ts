import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  searchCont: {
    flex: 1,
    padding: 10,
  },
  inputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 6,
    height: 39,
    paddingRight: 25,
    paddingLeft: 13,
  },
  buttonsCont: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
});