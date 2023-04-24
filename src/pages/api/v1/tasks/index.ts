// src/pages/api/v1/tasks/index.ts

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
    startAt: '2023-04-16 09:00:00',
    endAt: '2023-04-16 10:00:00',
    isFinished: false,
    sharedMemberNicknameList: ['Bob'],
  };

  return res.status(200).json(req.body);
}
