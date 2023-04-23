// src/apis/tasks/postRoutine.ts
import { TaskInfo } from '@/types/routine';
import { axiosCustom } from '../createAxios';

export async function postRoutine(taskData: TaskInfo) {
  return await axiosCustom
    .post<TaskInfo>('api/v1/tasks', taskData)
    .then((res) => res.data);
}
