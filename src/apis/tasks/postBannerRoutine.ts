// src/apis/tasks/postBannerRoutine.ts

import { BannerTaskInfo } from '@/types/routine';
import { axiosCustom } from '../customAxios';

export async function postBannerRoutine(taskData: BannerTaskInfo) {
  return await axiosCustom
    .post<BannerTaskInfo>('tasks', taskData)
    .then((res) => res.data);
}
