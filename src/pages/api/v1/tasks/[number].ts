// src/pages/api/v1/tasks/list.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { TaskInfo } from '../../../../types/routine';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Object>
) {
  const mockData: TaskInfo = {
    taskId: 1,
    writer: 'Alice',
    title: 'Buy groceries',
    memo: 'Milk, bread, eggs',
    startAt: '2023-04-26 09:00:00',
    endAt: '2023-04-27 10:00:00',
    isFinished: false,
    sharedMemberNicknameList: ['Bob'],
  };

  return res.status(200).json(mockData);
}
