import { UserDTO } from "@dtos/UserDTO";
import { AUTH_USER_STORAGE } from "./storageConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function storageUserSave(user: UserDTO) {
  await AsyncStorage.setItem(AUTH_USER_STORAGE, JSON.stringify(user));
};

export async function storageUserGet() {
  const storage = await AsyncStorage.getItem(AUTH_USER_STORAGE);
  const user: UserDTO = storage ? JSON.parse(storage) : {};

  return user;
};

export async function storageUserRemove() {
  await AsyncStorage.removeItem(AUTH_USER_STORAGE);
};