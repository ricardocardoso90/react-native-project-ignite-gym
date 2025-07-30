import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#505050', // equivalente ao gray.500
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginBottom: 12,
  },
  thumb: {
    width: 64,
    height: 64,
    borderRadius: 6,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 14,
    color: '#CFCFCF',
    marginTop: 4,
  },
});