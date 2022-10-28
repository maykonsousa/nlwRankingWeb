/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { request } from './axios';

interface IReturn {
  id: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  count: number;
}

export const getAllUsersService = async (): Promise<IReturn[]> => {
  const { data } = await request.get('/ranking');

  return data;
};
