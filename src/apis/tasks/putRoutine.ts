// src/apis/tasks/putRoutine.ts
import { TaskInfo } from '@/types/routine';
import { customAxios } from '../customAxios';

export async function putRoutine(taskData: TaskInfo) {
  return await customAxios
    .put<TaskInfo>('tasks', taskData)
    .then((res) => res.data);
}
