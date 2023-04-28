// src/apis/tasks/getRoutineListMonthly.ts
import { BannerTaskInfo } from '@/types/routine';
import { axiosCustom } from '../createAxios';

interface GetRoutineListMonthlyParams {
  memberId: string;
  year: number;
  month: number;
}

export async function getBannerRoutineListMonthly(
  params: GetRoutineListMonthlyParams
) {
  return await axiosCustom
    .get<BannerTaskInfo[]>('mybanners/list', { params })
    .then((res) => res.data);
}
