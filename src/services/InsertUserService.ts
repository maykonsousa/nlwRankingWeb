/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { request, requestSkylab } from './axios';

interface IReturn {
  id: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  count: number;
}

export const InsertUserService = async (username: string): Promise<IReturn> => {
  const { data } = await request.post('/users', {
    username,
  });
  const url = `https://skylab-api.rocketseat.com.br/public/event/nlw-copa/referral/${username}`;
  const count = await requestSkylab
    .get(url)
    .then((response) => response.data.totalCount);
  return { ...data, count: count || 0 };
};
