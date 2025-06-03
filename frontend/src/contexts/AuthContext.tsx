import { api } from "../services/api";
import { UserDTO } from "../dtos/UserDTO";
import { createContext, useEffect, useState } from "react";
import { storageUserSave, storageUserRemove, storageUserGet } from "../storage/storageAuthUser";
import { storageAuthTokenGet, storageAuthTokenRemove, storageAuthTokenSave } from "../storage/storageAuthToken";

type AuthContextDataProps = {
  user: UserDTO;
  updateUserProfile: (userUpdated: UserDTO) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isLoadingStogareUserData: boolean;
};

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export type AuthContextProviderProps = {
  children: React.ReactNode;
};

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO);
  const [isLoadingStogareUserData, setIsLoadingStogareUserData] = useState(true);

  async function userAndTokenUpdate(userData: UserDTO, token: string) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setUser(userData);
  };

  async function storageUserAndTokenSave(userData: UserDTO, token: string, refresh_token: string) {
    try {
      setIsLoadingStogareUserData(true);

      await storageUserSave(userData);
      await storageAuthTokenSave({ token, refresh_token });
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingStogareUserData(false);
    };
  };

  async function signIn(email: string, password: string) {
    try {
      const { data } = await api.post('/sessions', { email, password });

      if (data.user && data.token && data.refresh_token) {
        await storageUserAndTokenSave(data.user, data.token, data.refresh_token);
        userAndTokenUpdate(data.user, data.token);
      };

    } catch (error) {
      throw error;
    };
  };

  async function signOut() {
    try {
      setIsLoadingStogareUserData(true);
      setUser({} as UserDTO);
      await storageUserRemove();
      await storageAuthTokenRemove();

    } catch (error) {
      throw error;
    } finally {
      setIsLoadingStogareUserData(false);
    };
  };

  async function updateUserProfile(userUpdated: UserDTO) {
    try {
      setUser(userUpdated);
      storageUserSave(userUpdated);

    } catch (error) {
      throw error;
    };
  };

  async function storageUserData() {
    try {
      setIsLoadingStogareUserData(true);

      const userLogged = await storageUserGet();
      const { token } = await storageAuthTokenGet();

      if (token && userLogged) {
        userAndTokenUpdate(userLogged, token);
      };
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingStogareUserData(false);
    };
  };

  useEffect(() => {
    storageUserData();
  }, []);

  useEffect(() => {
    const subscribe = api.registerInterceptTokenManager(signOut);

    return () => {
      subscribe();
    };
  }, [signOut]);

  return (
    <AuthContext.Provider value={
      {
        user,
        signIn,
        signOut,
        updateUserProfile,
        isLoadingStogareUserData
      }
    }>
      {children}
    </AuthContext.Provider>
  )
};