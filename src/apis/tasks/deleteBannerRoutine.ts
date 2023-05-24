// src/apis/tasks/deleteBannerRoutine.ts
import { axiosCustom } from '../customAxios';

export interface DeleteRoutineResponse {
  nickname: string;
}

export async function deleteBannerRoutine(bannerId: number) {
  return await axiosCustom
    .delete<DeleteRoutineResponse>(`banners/mybanners/${bannerId}`)
    .then((res) => res.data);
}
