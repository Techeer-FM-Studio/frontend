// src/apis/tasks/postBannerRoutine.ts

import { BannerTaskInfo } from '@/types/routine';
import { customAxios } from '../customAxios';

export async function postBannerRoutine(taskData: BannerTaskInfo) {
  return await customAxios
    .post<BannerTaskInfo>('tasks', taskData)
    .then((res) => res.data);
}
