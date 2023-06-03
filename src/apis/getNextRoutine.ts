import { customAxios } from './customAxios';

export async function getNextRoutine(year: number, month: number) {
  return await customAxios
    .get('tasks/list', { params: { year, month } })
    .then((res) => res.data);
}
