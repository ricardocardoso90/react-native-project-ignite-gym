import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: '100%',
    paddingHorizontal: 20, // px={5} = 5*4
    paddingVertical: 16, // py={4} = 4*4
    marginBottom: 12, // mb={3} = 3*4
    backgroundColor: '#505050', // gray.600 equivalente
    borderRadius: 8, // rounded="md"
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    marginRight: 20, // mr={5} = 5*4
  },
  group: {
    color: '#FFFFFF', // white
    fontSize: 16, // md
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  name: {
    color: '#E1E1E6', // gray.100
    fontSize: 18, // lg
  },
  hour: {
    color: '#A3A3A3', // gray.300
    fontSize: 16, // md
  },
});