// src/apis/tasks/postRoutine.ts

import { TaskInfo } from '@/types/routine';
import { customAxios } from '../customAxios';

export async function postRoutine(taskData: TaskInfo) {
  console.log(taskData);
  return await customAxios
    .post<TaskInfo>('tasks', taskData)
    .then((res) => res.data);
}
