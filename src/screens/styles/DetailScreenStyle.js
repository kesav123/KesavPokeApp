import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.light,
    padding: 0,
  },
  cardContainer: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  },
  image: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'capitalize',
  },
  pokeId: {
    color: '#fff',
    fontWeight: '600',
    marginTop: 4,
  },
  typeContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  typeBadge: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 15,
  },
  typeText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  tabText: {
    fontSize: 16,
    color: '#888',
  },
  activeTabText: {
    color: colors.primary,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
    paddingBottom: 4,
  },
  section: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  detailLabel: {
    fontWeight: 'bold',
    color: colors.text,
  },
  detailValue: {
    color: colors.text,
  },
  statRow: {
    marginBottom: 12,
  },
  statLabel: {
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 6,
    textTransform: 'capitalize',
  },
  statBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statBar: {
    height: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
    marginRight: 10,
    flex: 1,
    overflow: 'hidden',
  },
  statFill: {
    height: '100%',
    borderRadius: 5,
    backgroundColor: colors.secondary,
  },
  statValue: {
    color: colors.text,
    fontWeight: 'bold',
  },
});
