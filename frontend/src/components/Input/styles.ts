import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 16
  },
  input: {
    backgroundColor: '#323238', 
    height: 56, 
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#FFFFFF',
    borderRadius: 4,
    borderWidth: 0,
  },
  inputInvalid: {
    borderWidth: 1,
    borderColor: '#F75A68',
  },
  errorText: {
    color: '#F75A68',
    fontSize: 14,
    marginTop: 4,
  },
});