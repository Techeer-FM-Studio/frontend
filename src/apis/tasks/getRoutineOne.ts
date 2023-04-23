// src/apis/tasks/getRoutineOne.ts
import { TaskInfo } from '@/types/routine';
import { axiosCustom } from '../createAxios';

export async function getRoutineOne(taskId: number) {
  return await axiosCustom
    .get<TaskInfo>(`api/v1/tasks/${taskId}`)
    .then((res) => res.data);
}
