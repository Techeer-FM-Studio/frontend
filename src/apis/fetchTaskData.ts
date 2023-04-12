import { TaskInfo, TaskInfoListResponse } from '@/types/routine';
import { axiosCustom } from './createAxios';

export async function fetchTaskData(year: number, month: number) {
  return await axiosCustom
    .get<TaskInfoListResponse[]>('tasks/list', { params: { year, month } })
    .then((res) => res.data);
}
