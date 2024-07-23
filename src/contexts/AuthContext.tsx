import { Routes } from "@routes/index";
import { UserDTO } from "@dtos/UserDTO";
import { createContext, useState } from "react";

type AuthContextDataProps = {
  user: UserDTO;
};

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState({
    id: '1',
    name: 'Ricardo',
    email: 'ricardo@gmail.com',
    avatar: 'ricardo.png'
  });

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
};