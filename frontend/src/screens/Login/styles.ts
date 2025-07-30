import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingBottom: 64,
    paddingHorizontal: 40,
    backgroundColor: "#121214",
  },
  backgroundImage: {
    position: "absolute",
  },
  logoContainer: {
    alignItems: "center",
    marginVertical: 96,
  },
  subtitle: {
    color: "#E1E1E6",
    fontSize: 14, 
    marginTop: 8,
  },
  formContainer: {
    alignItems: "center",
  },
  heading: {
    color: "#E1E1E6",
    fontSize: 20,
    fontFamily: "Roboto_700Bold",
    marginBottom: 24,
  },
  footer: {
    alignItems: "center",
    marginTop: 96,
  },
  footerText: {
    color: "#E1E1E6",
    fontSize: 14,
    marginBottom: 12,
    fontFamily: "Roboto_400Regular",
  },
});
