import axios from 'axios';
import { Invocation, Sniffer, SnifferCreateConfig } from '../types/types';

export const createSniffer = (config: SnifferCreateConfig) => {
  return axios.post('/sharkio/sniffer', JSON.stringify(config), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const getSniffers = () => {
  return axios.get<Sniffer[]>('/sharkio/sniffer');
};

export const getSniffer = (port: number) => {
  return axios.get(`/sharkio/sniffer/${port}`);
};

export const stopSniffer = (port: number) => {
  return axios.post(`/sharkio/sniffer/${port}/actions/stop`);
};

export const startSniffer = async (port: number) => {
  return await axios.post(`/sharkio/sniffer/${port}/actions/start`);
};
export const deleteSniffer = async (port: number) => {
  return await axios.delete(`/sharkio/sniffer/${port}`);
};
export const editSniffer = async (newConfig: SnifferCreateConfig) => {
  return axios.put(
    `/sharkio/sniffer/${newConfig.id}`,
    JSON.stringify(newConfig),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};

export const getRequests = () => {
  return axios.get('/sharkio/sniffer/invocation');
};

export const executeRequest = (
  port: number,
  url: string,
  method: string,
  invocation: Invocation,
) => {
  return axios.post(
    `http://localhost:5173/sharkio/sniffer/${port}/actions/execute`,
    { url, method, invocation },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};

export const getAllMocks = () => {
  return axios.get('/sharkio/sniffer/action/getMocks');
};

export const createMock = (
  port: number,
  method: string,
  endpoint: string,
  status: number,
  data: any,
) => {
  return axios.post(
    `/sharkio/sniffer/${port}/mock`,
    JSON.stringify({ method, endpoint, data, status }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};

export const editMock = (
  id: string,
  port: number,
  method: string,
  endpoint: string,
  status: number,
  data: any,
) => {
  return axios.put(
    `/sharkio/sniffer/${port}/mock`,
    JSON.stringify({ mockId: id, method, endpoint, data, status }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};

export const deleteMock = (id: string, port: number) => {
  return axios.delete(`/sharkio/sniffer/${port}/mock`, {
    data: { mockId: id },
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const activateMock = (
  port: number,
  method: string,
  endpoint: string,
) => {
  return axios.post(
    `/sharkio/sniffer/${port}/mock/actions/activate`,
    JSON.stringify({ mockId: `${method} ${endpoint}` }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};

export const deactivateMock = (
  port: number,
  method: string,
  endpoint: string,
) => {
  return axios.post(
    `/sharkio/sniffer/${port}/mock/actions/deactivate`,
    JSON.stringify({ mockId: `${method} ${endpoint}` }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};
