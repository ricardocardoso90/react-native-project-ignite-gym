import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121214", // gray.700
  },
  groupList: {
    paddingHorizontal: 32, // px={8} → 8*4 = 32px
  },
  groupListSpacing: {
    marginVertical: 40, // my={10} → 10*4 = 40px
    maxHeight: 40,      // maxH={10} → 10*4 = 40px
  },
  exerciseContainer: {
    paddingHorizontal: 32, // px={8}
  },
  exerciseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20, // mb={5} → 5*4 = 20px
  },
  exerciseTitle: {
    color: "#E1E1E6", // gray.100
    fontSize: 16, // fontSize="md"
    fontFamily: "Roboto_700Bold",
  },
  exerciseCount: {
    color: "#E1E1E6", // gray.100
    fontSize: 14, // fontSize="sm"
  },
  exerciseList: {
    paddingBottom: 20,
  },
});