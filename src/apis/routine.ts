import { customAxios } from './customAxios';
import { TaskInfo } from '@/types/routine';
import { BannerTaskInfo } from '@/types/routine';

export async function putRoutine(taskData: TaskInfo) {
  return await customAxios
    .put<TaskInfo>('tasks', taskData)
    .then((res) => res.data);
}

export async function postRoutine(taskData: TaskInfo) {
  // console.log(taskData);
  return await customAxios
    .post<TaskInfo>('tasks', taskData)
    .then((res) => res.data);
}

export async function getRoutineOne(taskId: number) {
  return await customAxios
    .get<TaskInfo>(`tasks/${taskId}`)
    .then((res) => res.data);
}

interface GetRoutineListMonthlyParams {
  memberId: string;
  year: number;
  month: number;
}

export async function getRoutineListMonthly(
  params: GetRoutineListMonthlyParams,
) {
  return await customAxios
    .get<TaskInfo[]>('tasks/list', { params })
    .then((res) => res.data);
}

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

export interface DeleteRoutineResponse {
  message: string;
}

export async function deleteRoutine(taskId: number) {
  return await customAxios
    .delete<DeleteRoutineResponse>(`tasks/${taskId}`)
    .then((res) => res.data);
}

export interface DeleteRoutineResponse {
  nickname: string;
}

export async function deleteBannerRoutine(bannerId: number) {
  return await customAxios
    .delete<DeleteRoutineResponse>(`banners/mybanners/${bannerId}`)
    .then((res) => res.data);
}
