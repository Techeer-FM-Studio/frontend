// src/apis/tasks/putRoutine.ts
import { TaskInfoType } from '@/types/routine';
import { customAxios } from '../customAxios';

export async function putRoutine(taskData: TaskInfoType) {
  return await customAxios
    .put<TaskInfoType>('tasks', taskData)
    .then((res) => res.data);
}
