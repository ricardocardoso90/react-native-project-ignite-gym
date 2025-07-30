import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
  },
  scrollContent: {
    paddingBottom: 36
  },
  centerContent: {
    alignItems: 'center',
    marginTop: 24,
    paddingHorizontal: 40,
  },
  changePhotoText: {
    color: '#00B37E',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 8,
    marginBottom: 32
  },
  sectionTitle: {
    color: '#E1E1E6',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 32,
    marginBottom: 8
  },
  updateButton: {
    marginTop: 16
  },
  // photoLoader: {
  //   width: PHOTO_SIZE,
  //   height: PHOTO_SIZE,
  //   marginBottom: 16
  // }
});