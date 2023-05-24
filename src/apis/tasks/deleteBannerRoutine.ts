// src/apis/tasks/deleteBannerRoutine.ts
import { customAxios } from '../customAxios';

export interface DeleteRoutineResponse {
  nickname: string;
}

export async function deleteBannerRoutine(bannerId: number) {
  return await customAxios
    .delete<DeleteRoutineResponse>(`banners/mybanners/${bannerId}`)
    .then((res) => res.data);
}
