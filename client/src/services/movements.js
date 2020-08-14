import api from './api-helper';

export const readAllMovements = async () => {
  const resp = await api.get('/movements');
  return resp.data;
}

export const readOneMovement = async (id) => {
  const resp = await api.get(`/movements/${id}`);
  return resp.data;
}

export const postMovement = async (movementData) => {
  const resp = await api.post('/movements', { movement: movementData });
  return resp.data;
}

export const putMovement = async (id, movementData) => {
  const resp = await api.put(`/movements/${id}`, { movement: movementData });
  return resp.data;
}

export const destroyMovement = async (id, movementData) => {
  const resp = await api.delete(`/movements/${id}`);
  return resp;
}

export const addMuscle = async (muscleId, movementId) => {
  const resp = await api.put(`/muscles/${muscleId}/movements/${movementId}`);
  return resp.data;
}