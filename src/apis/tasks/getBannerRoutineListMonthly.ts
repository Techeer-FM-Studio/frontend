// src/apis/tasks/getRoutineListMonthly.ts
import { BannerTaskInfo } from '@/types/routine';
import { customAxios } from '../customAxios';

interface GetBannerRoutineListMonthlyParams {
  memberId: string;
  year: number;
  month: number;
}

export async function getBannerRoutineListMonthly(
  params: GetBannerRoutineListMonthlyParams,
) {
  return await customAxios
    .get<BannerTaskInfo[]>('banners/custom/mybanners/list', { params })
    .then((res) => res.data);
}
