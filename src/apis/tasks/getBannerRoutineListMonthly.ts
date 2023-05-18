// src/apis/tasks/getRoutineListMonthly.ts
import { BannerTaskInfo } from '@/types/routine';
import { axiosCustom } from '../createAxios';

interface GetBannerRoutineListMonthlyParams {
  memberId: string;
  year: number;
  month: number;
}

export async function getBannerRoutineListMonthly(
  params: GetBannerRoutineListMonthlyParams,
) {
  return await axiosCustom
    .get<BannerTaskInfo[]>('banners/custom/mybanners/list', { params })
    .then((res) => res.data);
}
