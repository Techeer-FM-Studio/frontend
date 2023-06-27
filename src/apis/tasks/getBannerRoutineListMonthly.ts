// src/apis/tasks/getRoutineListMonthly.ts
import { BannerTaskInfoType } from '@/types/routine';
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
    .get<BannerTaskInfoType[]>('banners/custom/mybanners/list', { params })
    .then((res) => res.data);
}
