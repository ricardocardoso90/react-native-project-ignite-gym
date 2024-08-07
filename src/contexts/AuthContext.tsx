import { api } from "@services/api";
import { UserDTO } from "@dtos/UserDTO";
import { createContext, useEffect, useState } from "react";
import { storageUserSave, storageUserRemove, storageUserGet } from "@storage/storageAuthUser";
import { storageAuthTokenGet, storageAuthTokenRemove, storageAuthTokenSave } from "@storage/storageAuthToken";

type AuthContextDataProps = {
  user: UserDTO;
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

  async function storageUserAndTokenSave(userData: UserDTO, token: string) {
    try {
      setIsLoadingStogareUserData(true);

      await storageUserSave(userData);
      await storageAuthTokenSave(token);
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingStogareUserData(false);
    };
  };

  async function signIn(email: string, password: string) {
    try {
      const { data } = await api.post('/sessions', { email, password });

      if (data.user && data.token) {
        await storageUserAndTokenSave(data.user, data.token);
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

  async function storageUserData() {
    try {
      setIsLoadingStogareUserData(true);

      const userLogged = await storageUserGet();
      const token = await storageAuthTokenGet();

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
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, isLoadingStogareUserData}}>
      {children}
    </AuthContext.Provider>
  )
};