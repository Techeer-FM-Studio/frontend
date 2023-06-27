// src/apis/tasks/getRoutineOne.ts
import { TaskInfoType } from '@/types/routine';
import { customAxios } from '../customAxios';

export async function getRoutineOne(taskId: number) {
  return await customAxios
    .get<TaskInfoType>(`tasks/${taskId}`)
    .then((res) => res.data);
}
// 이 부분을 모두 템플릿 리터럴 형식으로 바꿔볼까 생각 중
