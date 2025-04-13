import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  header: {
    backgroundColor: '#3c5aa6',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
  },
  headerText: {
    fontSize: 26,
    fontWeight: '700',
    color: '#fff',
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});
// This is the style for the home screen component.
