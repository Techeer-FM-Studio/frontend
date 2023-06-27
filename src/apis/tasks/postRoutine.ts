// src/apis/tasks/postRoutine.ts

import { TaskInfoType } from '@/types/routine';
import { customAxios } from '../customAxios';

export async function postRoutine(taskData: TaskInfoType) {
  console.log(taskData);
  return await customAxios
    .post<TaskInfoType>('tasks', taskData)
    .then((res) => res.data);
}
