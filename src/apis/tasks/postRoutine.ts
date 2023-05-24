// src/apis/tasks/postRoutine.ts

import { TaskInfo } from '@/types/routine';
import { axiosCustom } from '../customAxios';

export async function postRoutine(taskData: TaskInfo) {
  console.log(taskData);
  return await axiosCustom
    .post<TaskInfo>('tasks', taskData)
    .then((res) => res.data);
}
