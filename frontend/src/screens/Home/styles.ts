import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121214", // cor de fundo típica de apps de treino
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  groupList: {
    paddingHorizontal: 8,
  },
  groupListSpacing: {
    marginVertical: 24,
    maxHeight: 40,
  },
  exerciseContainer: {
    flex: 1,
    paddingTop: 16,
  },
  exerciseHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  exerciseTitle: {
    flex: 1,
    color: "#E1E1E6",
    fontSize: 20,
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