import { api } from "@services/api";
import { UserDTO } from "@dtos/UserDTO";
import { createContext, useEffect, useState } from "react";
import { storageUserGet, storageUserRemove, storageUserSet } from "@storage/storageUser";

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

  async function signIn(email: string, password: string) {
    try {
      const { data } = await api.post('sessions', { email, password });
      if (data.user) {
        setUser(data.user);
        storageUserSet(data.user);
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

    } catch (error) {
      throw error;
    } finally {
      setIsLoadingStogareUserData(false);
    }
  };

  async function storageUserData() {
    try {
      const userLogged = await storageUserGet();

      if (userLogged) {
        setUser(userLogged);
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
    <AuthContext.Provider value={{ user, signIn, isLoadingStogareUserData, signOut }}>
      {children}
    </AuthContext.Provider>
  )
};