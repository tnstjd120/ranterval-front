import { fetchInstance } from './fetchInstance';

export const get = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const response = await fetchInstance(url, { method: 'GET', ...options });
  const json = await response.json();
  return json;
};

export const post = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const response = await fetchInstance(url, { method: 'POST', ...options });
  const json = await response.json();
  return json;
};

export const put = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const response = await fetchInstance(url, { method: 'PUT', ...options });
  const json = await response.json();
  return json;
};

export const patch = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const response = await fetchInstance(url, { method: 'PATCH', ...options });
  const json = await response.json();
  return json;
};

export const del = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const response = await fetchInstance(url, { method: 'DELETE', ...options });
  const json = await response.json();
  return json;
};
