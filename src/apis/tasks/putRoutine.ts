// src/apis/tasks/putRoutine.ts
import { TaskInfo } from '@/types/routine';
import { axiosCustom } from '../customAxios';

export async function putRoutine(taskData: TaskInfo) {
  return await axiosCustom
    .put<TaskInfo>('tasks', taskData)
    .then((res) => res.data);
}
