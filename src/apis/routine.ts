import { customAxios } from './customAxios';
import { TaskInfo } from '@/types/routine';
import { BannerTaskInfo } from '@/types/routine';

export const putRoutine = async (taskData: TaskInfo) => {
  return await customAxios
    .put<TaskInfo>('tasks', taskData)
    .then((res) => res.data);
};

export const postRoutine = async (taskData: TaskInfo) => {
  return await customAxios
    .post<TaskInfo>('tasks', taskData)
    .then((res) => res.data);
};

export const getRoutineOne = async (taskId: number) => {
  return await customAxios
    .get<TaskInfo>(`tasks/${taskId}`)
    .then((res) => res.data);
};

export const getRoutineListMonthly = async (
  memberId: string,
  year: number,
  month: number,
) => {
  return await customAxios
    .get<TaskInfo[]>('tasks/list', { params: { memberId, year, month } })
    .then((res) => res.data);
};

export const getBannerRoutineListMonthly = async (
  memberId: string,
  year: number,
  month: number,
) => {
  return await customAxios
    .get<BannerTaskInfo[]>('banners/custom/mybanners/list', {
      params: { memberId, year, month },
    })
    .then((res) => res.data);
};

export type DeleteRoutineResponse = {
  nickname: string;
};

export const deleteRoutine = async (taskId: number) => {
  return await customAxios
    .delete<DeleteRoutineResponse>(`tasks/${taskId}`)
    .then((res) => res.data);
};

export const deleteBannerRoutine = async (bannerId: number) => {
  return await customAxios
    .delete<DeleteRoutineResponse>(`banners/mybanners/${bannerId}`)
    .then((res) => res.data);
};
