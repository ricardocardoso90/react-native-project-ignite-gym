import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerHeader: {
    flex: 1,
    backgroundColor: "#121214",
  },
  containerExercise: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  groupList: {
    paddingHorizontal: 8,
  },
  groupListSpacing: {
    maxHeight: 40,
    marginVertical: 24,
  },
  exerciseContainer: {
    flex: 1,
    paddingTop: 16,
  },
  exerciseHeader: {
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  exerciseTitle: {
    flex: 1,
    fontSize: 20,
    color: "#E1E1E6",
    fontWeight: "bold",
  },
  exerciseCount: {
    color: "#7C7C8A",
    fontSize: 14,
  },
  exerciseList: {
    paddingBottom: 100,
  },
});