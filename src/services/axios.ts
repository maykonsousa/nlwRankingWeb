import axios from 'axios';

export const request = axios.create({
  baseURL: 'https://nlwrankingserver-production.up.railway.app/',
});

export const requestSkylab = axios.create();
