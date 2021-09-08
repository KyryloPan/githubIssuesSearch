import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  searchCont: {
    flex: 1,
    padding: 10,
    marginTop: 30,
    maxHeight: 230,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  inputCont: {
    marginBottom: 10,
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