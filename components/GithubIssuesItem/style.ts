import { Dimensions, StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 8,
    marginBottom: 16,
    elevation: 4,
    shadowColor: '#414d5b',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 0.1,
  },
  title: {
    maxWidth: Dimensions.get('screen').width - 16,
  },
  labels: {
    flexDirection: 'row',
    marginTop: 8,
    flexWrap: 'wrap',
  },
  label: {
    borderRadius: 16,
    paddingHorizontal: 10,
    height: 22,
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 8,
    marginTop: 8,
  },
  labelText: {
    fontSize: 12,
    fontFamily: 'muli-semi-bold',
  },
});