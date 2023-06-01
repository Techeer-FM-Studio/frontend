import { customAxios } from './customAxios';
// prettier-ignore
import { TaskInfoType, BannerTaskInfoType, DeleteRoutineResponseType } from '@/types/routine';

// 네이밍 변경된 사항은 주석으로 설명, 후에 기존 파일들에 적용 후 주석 제거 요망

// Routine = 개인이 생성하고 관리하는 일정 관련 API

// putRoutine =
export const putRoutine = async (taskData: TaskInfoType) => {
  return await customAxios
    .put<TaskInfoType>('tasks', taskData)
    .then((res) => res.data);
};

export const postRoutine = async (taskData: TaskInfoType) => {
  return await customAxios
    .post<TaskInfoType>('tasks', taskData)
    .then((res) => res.data);
};

// getRoutineOne -> getSingleRoutine
export const getSingleRoutine = async (taskId: number) => {
  return await customAxios
    .get<TaskInfoType>(`tasks/${taskId}`)
    .then((res) => res.data);
};

// getRoutineListMonthly -> getMonthlyListRoutine
export const getMonthlyListRoutine = async (
  memberId: string,
  year: number,
  month: number,
) => {
  return await customAxios
    .get<TaskInfoType[]>('tasks/list', { params: { memberId, year, month } })
    .then((res) => res.data);
};

// getBannerRoutineListMonthly -> getMonthlyListBannerRoutine
export const getMonthlyListBannerRoutine = async (
  memberId: string,
  year: number,
  month: number,
) => {
  return await customAxios
    .get<BannerTaskInfoType[]>('banners/custom/mybanners/list', {
      params: { memberId, year, month },
    })
    .then((res) => res.data);
};

export const deleteRoutine = async (taskId: number) => {
  return await customAxios
    .delete<DeleteRoutineResponseType>(`tasks/${taskId}`)
    .then((res) => res.data);
};

export const deleteBannerRoutine = async (bannerId: number) => {
  return await customAxios
    .delete<DeleteRoutineResponseType>(`banners/mybanners/${bannerId}`)
    .then((res) => res.data);
};
