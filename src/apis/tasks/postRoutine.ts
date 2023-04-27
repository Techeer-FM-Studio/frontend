// src/apis/tasks/postRoutine.ts

import { TaskInfo } from '@/types/routine';
import { axiosCustom } from '../createAxios';

export async function postRoutine(taskData: TaskInfo) {
  return await axiosCustom
    .post<TaskInfo>('tasks', taskData)
    .then((res) => res.data);
}
