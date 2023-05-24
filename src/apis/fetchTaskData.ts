import { axiosCustom } from './customAxios';

export async function fetchTaskData(year: number, month: number) {
  return await axiosCustom
    .get('tasks/list', { params: { year, month } })
    .then((res) => res.data);
}
