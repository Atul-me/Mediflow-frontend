import axios from 'axios';
export const api = axios.create({ baseURL: import.meta.env.VITE_API_URL || 'https://mediflow-5djn.onrender.com' });
api.interceptors.request.use(config => {
  const token = localStorage.getItem('medflow_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
export function setSession(data) {
  localStorage.setItem('medflow_token', data.token);
  localStorage.setItem('medflow_user', JSON.stringify(data.user));
}
export function getUser() {
  try { return JSON.parse(localStorage.getItem('medflow_user') || 'null'); } catch { return null; }
}
export function logout() { localStorage.removeItem('medflow_token'); localStorage.removeItem('medflow_user'); window.location.href = '/'; }
