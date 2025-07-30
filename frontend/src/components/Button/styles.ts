import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 56, // 14 do NativeBase equivale a ~56px
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
  },
  solidButton: {
    backgroundColor: '#047857', // equivalente a green.700
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#22C55E', // equivalente a green.500
  },
  disabledButton: {
    opacity: 0.6,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold', // substituindo fontFamily="heading"
  },
  solidText: {
    color: '#FFFFFF',
  },
  outlineText: {
    color: '#22C55E',
  },
});