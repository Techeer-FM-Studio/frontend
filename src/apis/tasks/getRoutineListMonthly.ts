// src/apis/tasks/getRoutineListMonthly.ts
import { TaskInfoType } from '@/types/routine';
import { customAxios } from '../customAxios';

interface GetRoutineListMonthlyParams {
  memberId: string;
  year: number;
  month: number;
}

export async function getRoutineListMonthly(
  params: GetRoutineListMonthlyParams,
) {
  return await customAxios
    .get<TaskInfoType[]>('tasks/list', { params })
    .then((res) => res.data);
}
