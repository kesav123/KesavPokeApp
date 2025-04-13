import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    padding: 16,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    textTransform: 'capitalize',
  },
  typeContainer: {
    flexDirection: 'row',
    gap: 6,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  typeBadge: {
    backgroundColor: '#ffffff30',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 2,
  },
  typeText: {
    color: '#fff',
    fontSize: 14,
    textTransform: 'capitalize',
  },
});
