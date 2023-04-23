// src/apis/tasks/putRoutine.ts
import { TaskInfo } from '@/types/routine';
import { axiosCustom } from '../createAxios';

export async function putRoutine(taskData: TaskInfo) {
  return await axiosCustom
    .put<TaskInfo>('api/v1/tasks', taskData)
    .then((res) => res.data);
}
