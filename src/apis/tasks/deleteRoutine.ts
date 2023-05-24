// src/apis/tasks/deleteRoutine.ts
import { axiosCustom } from '../customAxios';

export interface DeleteRoutineResponse {
  message: string;
}

export async function deleteRoutine(taskId: number) {
  return await axiosCustom
    .delete<DeleteRoutineResponse>(`tasks/${taskId}`)
    .then((res) => res.data);
}
