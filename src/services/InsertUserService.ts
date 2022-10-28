/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { request } from './axios';

interface IData {
  id: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  count?: number;
}

interface IReturn {
  data: IData | null;
  error: string | null;
}

export const InsertUserService = async (username: string): Promise<IReturn> => {
  try {
    const { data } = await request.post('/users', {
      username,
    });
    return { data, error: null };
  } catch (error) {
    return { data: null, error: 'Usuário inválido' };
  }
};
