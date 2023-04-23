// src/apis/tasks/getRoutineListMonthly.ts
import { TaskInfo } from '@/types/routine';
import { axiosCustom } from '../createAxios';

interface GetRoutineListMonthlyParams {
  memberId: string;
  year: number;
  month: number;
}

export async function getRoutineListMonthly(
  params: GetRoutineListMonthlyParams
) {
  return await axiosCustom
    .get<TaskInfo[]>('api/v1/tasks/list', { params })
    .then((res) => res.data);
}
