import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 40, // px={10} => 10*4
    paddingBottom: 64,     // pb={16} => 16*4
    backgroundColor: "#121214", // gray.700
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  logoContainer: {
    alignItems: "center",
    marginVertical: 96, // my={24} => 24*4
  },
  subtitle: {
    color: "#E1E1E6", // gray.100
    fontSize: 14, // sm
    marginTop: 8,
  },
  formContainer: {
    alignItems: "center",
  },
  heading: {
    color: "#E1E1E6", // gray.100
    fontSize: 20, // xl
    fontFamily: "Roboto_700Bold",
    marginBottom: 24, // mb={6} => 6*4
  },
  footer: {
    alignItems: "center",
    marginTop: 96, // mt={24} => 24*4
  },
  footerText: {
    color: "#E1E1E6", // gray.100
    fontSize: 14, // sm
    marginBottom: 12, // mb={3} => 3*4
    fontFamily: "Roboto_400Regular",
  },
});
