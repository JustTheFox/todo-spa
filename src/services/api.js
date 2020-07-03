import axios from 'axios';

const API_BASE_URL = 'http://localhost:3004';
const DEFAULT_SORT = '_sort=id&_order=asc';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchBoards = () => {
  return api.get(`/boards?_expand=color&${DEFAULT_SORT}`);
};

export const fetchBoard = (id) => {
  return api.get(`/boards/${id}?_expand=color`);
};

export const createBoard = (params) => {
  return api.post('/boards', { ...params });
};

export const editBoard = (id, params) => {
  return api.put(`/boards/${id}`, { ...params });
};

export const deleteBoard = (id) => {
  return api.delete(`/boards/${id}`);
};

export const fetchLists = (id) => {
  return api.get(`/lists?boardId=${id}&_embed=tasks&${DEFAULT_SORT}`);
};

export const createList = (params) => {
  return api.post('/lists', { ...params });
};

export const editList = (id, params) => {
  return api.put(`/lists/${id}`, { ...params });
};

export const deleteList = (id) => {
  return api.delete(`/lists/${id}`);
};

export const fetchTasks = () => {
  return api.get(`/tasks?${DEFAULT_SORT}`);
};

export const createTask = (params) => {
  return api.post('/tasks', { ...params });
};

export const editTask = (id, params) => {
  return api.put(`/tasks/${id}`, { ...params });
};

export const deleteTask = (id) => {
  return api.delete(`/tasks/${id}`);
};

export const fetchColors = (id) => {
  return api.get('/colors?_sort=id&_order=asc');
};
