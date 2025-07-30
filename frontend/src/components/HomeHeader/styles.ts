import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#505050',
    paddingTop: 64,
    paddingBottom: 20, 
    paddingHorizontal: 32, 
    alignItems: 'center',
  },
  userPhoto: {
    marginRight: 16, 
  },
  textContainer: {
    flex: 1,
  },
  greeting: {
    color: '#E1E1E6', 
    fontSize: 16,
  },
  username: {
    color: '#E1E1E6',
    fontSize: 16,
    fontWeight: 'bold',
  },
});