import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
  },
  sectionHeader: {
    color: '#E1E1E6',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 12,
    paddingHorizontal: 32,
    fontFamily: 'System', // ajuste conforme fonte da plataforma
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  emptyText: {
    color: '#E1E1E6',
    textAlign: 'center',
    fontSize: 16,
  },
  sectionList: {
    paddingHorizontal: 32,
  },
});