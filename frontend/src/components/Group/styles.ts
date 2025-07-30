import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginRight: 12,
    width: 96,
    height: 40,
    backgroundColor: '#505050',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  activeBorder: {
    borderColor: '#22C55E',
    borderWidth: 1,
  },
  text: {
    color: '#E1E1E6',
    fontSize: 12,
    fontWeight: 'bold',
  },
  activeText: {
    color: '#22C55E',
  },
});