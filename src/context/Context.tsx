/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import { getAllUsersService } from '../services/getAllUsersService';
import { InsertUserService } from '../services/InsertUserService';

interface IUser {
  id: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  count: number;
}

interface IProviderProps {
  children: ReactNode;
}

interface IUserContextData {
  users: IUser[];
  createNewUser: (username: string) => Promise<void>;
  getUsersList: () => Promise<void>;
  loading: boolean;
  userError: string;
  listError: string;
}

export const UserContext = createContext<IUserContextData>(
  {} as IUserContextData
);

export function UserProvider({ children }: IProviderProps) {
  const [users, setUsers] = useState<IUser[]>([] as IUser[]);
  const [userError, setUserError] = useState('');
  const [listError, setListError] = useState('');
  const [loading, setLoading] = useState(true);

  const getUsersList = async (): Promise<void> => {
    setLoading(true);
    try {
      const { data, error } = await getAllUsersService();
      setUsers(data as IUser[]);
      if (error) {
        setListError(error);
        setLoading(false);
        return;
      }
      setLoading(false);
    } catch {
      setListError('Erro ao atualizar a lista de usuários');
    }
  };

  const createNewUser = async (username: string) => {
    setUserError('');
    const userNameAlreadyExists = users.find(
      (user) => user.username === username
    );
    if (userNameAlreadyExists) {
      setUserError('Usuário já existe');
      return;
    }
    setLoading(true);
    const { error } = await InsertUserService(username);
    if (error) {
      setUserError(error);
      setLoading(false);
      return;
    }
    await getUsersList();

    setLoading(false);
  };

  useEffect(() => {
    getUsersList();
  }, []);

  const values = useMemo(
    () => ({
      users,
      getUsersList,
      loading,
      userError,
      listError,
    }),
    [users, userError, listError, loading]
  );

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{ ...values, createNewUser }}>
      {children}
    </UserContext.Provider>
  );
}
