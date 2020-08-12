import api from '.api-helper';

export const readAllMuscles = async () => {
  const resp = await api.get('/muscles')
  return resp.data;
}

