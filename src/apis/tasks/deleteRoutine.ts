// src/apis/tasks/deleteRoutine.ts
import { customAxios } from '../customAxios';

export interface DeleteRoutineResponse {
  message: string;
}

export async function deleteRoutine(taskId: number) {
  return await customAxios
    .delete<DeleteRoutineResponse>(`tasks/${taskId}`)
    .then((res) => res.data);
}
