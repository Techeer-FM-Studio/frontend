// src/apis/tasks/postBannerRoutine.ts

import { BannerTaskInfoType } from '@/types/routine';
import { customAxios } from '../customAxios';

export async function postBannerRoutine(taskData: BannerTaskInfoType) {
  return await customAxios
    .post<BannerTaskInfoType>('tasks', taskData)
    .then((res) => res.data);
}
