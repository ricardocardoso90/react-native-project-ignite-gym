import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 48,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#323238',
  },
  goBackButton: {
    paddingRight: 20,
    paddingVertical: 8,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    color: '#E1E1E6',
    fontSize: 20,
    fontWeight: 'bold',
  },
  groupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  groupText: {
    color: '#C4C4CC',
    marginLeft: 8,
    textTransform: 'capitalize',
    fontSize: 14,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  imageContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 12,
    height: 400,
    backgroundColor: '#29292E',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  detailsBox: {
    backgroundColor: '#323238',
    borderRadius: 8,
    padding: 16,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    color: '#C4C4CC',
    marginLeft: 8,
    fontSize: 16,
  },
});
