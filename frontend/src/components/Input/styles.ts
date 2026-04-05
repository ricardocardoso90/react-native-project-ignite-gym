import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16
  },
  input: {
    height: 56, 
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#FFFFFF',
    borderRadius: 4,
    borderWidth: 0,
    backgroundColor: '#121214', 
    
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