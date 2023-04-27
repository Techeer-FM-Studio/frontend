// src/pages/api/v1/tasks/list.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { TaskInfo } from '../../../../types/routine';
// TaskInfo를 import 하지 않으면, TaskInfoListResponse에서 TaskInfo를 사용할 때 TypeScript에서
// TaskInfo 타입이 정의되지 않았다는 오류가 발생합니다. 이 경우, TaskInfo 타입을 사용하는 다른 부분에서도 마찬가지 오류가 발생할 수 있으므로
// TaskInfo를 import해주는 것이 좋습니다.

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Object>
) {
  const mockData: TaskInfo[] = [
    {
      taskId: 1,
      writer: 'Alice',
      title: 'Buy groceries',
      memo: 'Milk, bread, eggs',
      startAt: '2023-04-16 09:00:00',
      endAt: '2023-04-16 10:00:00',
      isFinished: false,
      sharedMemberNicknameList: ['Bob'],
    },
    {
      taskId: 2,
      writer: 'Bob',
      title: 'Go to the gym',
      memo: 'Cardio and weights',
      startAt: '2023-04-16 11:00:00',
      endAt: '2023-04-17 12:00:00',
      isFinished: false,
      sharedMemberNicknameList: ['Alice'],
    },
    {
      taskId: 3,
      writer: 'Charlie',
      title: 'Attend meeting',
      memo: 'Discuss project status',
      startAt: '2023-04-16 14:00:00',
      endAt: '2023-04-18 15:00:00',
      isFinished: false,
      sharedMemberNicknameList: [],
    },
    {
      taskId: 4,
      writer: 'David',
      title: 'Submit report',
      memo: 'Monthly sales figures',
      startAt: '2023-04-16 10:00:00',
      endAt: '2023-04-19 12:00:00',
      isFinished: false,
      sharedMemberNicknameList: [],
    },
    {
      taskId: 5,
      writer: 'Eve',
      title: 'Take a break',
      memo: 'Read a book or watch TV',
      startAt: '2023-04-16 15:00:00',
      endAt: '2023-04-20 16:00:00',
      isFinished: false,
      sharedMemberNicknameList: [],
    },
    {
      taskId: 6,
      writer: 'Frank',
      title: 'Call customer',
      memo: 'Discuss contract terms',
      startAt: '2023-04-16 16:00:00',
      endAt: '2023-04-21 17:00:00',
      isFinished: false,
      sharedMemberNicknameList: [],
    },
    {
      taskId: 7,
      writer: 'Grace',
      title: 'Work on project',
      memo: 'Coding and debugging',
      startAt: '2023-04-25 09:00:00',
      endAt: '2023-04-26 12:00:00',
      isFinished: false,
      sharedMemberNicknameList: [],
    },
  ];
  return res.status(200).json(mockData);
}
