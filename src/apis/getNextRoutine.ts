import { axiosCustom } from './createAxios';

export async function getNextRoutine(page: number, size: number) {
  return await axiosCustom
    .get('tasks/list', { params: { page, size } })
    .then((res) => res.data);
}
