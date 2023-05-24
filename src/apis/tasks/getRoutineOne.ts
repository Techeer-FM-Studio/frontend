// src/apis/tasks/getRoutineOne.ts
import { TaskInfo } from '@/types/routine';
import { axiosCustom } from '../customAxios';

export async function getRoutineOne(taskId: number) {
  return await axiosCustom
    .get<TaskInfo>(`tasks/${taskId}`)
    .then((res) => res.data);
}
// 이 부분을 모두 템플릿 리터럴 형식으로 바꿔볼까 생각 중
