/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { request } from './axios';

interface Data {
  id: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  count: number;
}

interface IReturn {
  data: Data[] | null;
  error: string | null;
}

export const getAllUsersService = async (): Promise<IReturn> => {
  try {
    const { data } = await request.get('/ranking');

    return { data, error: null };
  } catch (error) {
    return { data: [], error: 'Falha ao cerregar lista de usuários' };
  }
};
