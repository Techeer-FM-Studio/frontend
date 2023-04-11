import { NextApiRequest, NextApiResponse } from 'next';
import { TaskInfo, TaskInfoListResponse } from '../../../../types/routine';
// TaskInfo를 import 하지 않으면, TaskInfoListResponse에서 TaskInfo를 사용할 때 TypeScript에서
// TaskInfo 타입이 정의되지 않았다는 오류가 발생합니다. 이 경우, TaskInfo 타입을 사용하는 다른 부분에서도 마찬가지 오류가 발생할 수 있으므로
// TaskInfo를 import해주는 것이 좋습니다.

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Object>
) {
  const mockData: TaskInfoListResponse[] = [
    {
      year: 2023,
      month: 4,
      taskInfoList: [
        {
          writer: 'Alice',
          title: 'Task 1',
          memo: 'Task 1 memo',
          startAt: '2023-04-11T18:25:00.000',
          endAt: '2023-04-11T18:27:00.000',
          isFinished: false,
          isOpened: true,
          sharedMemberInfo: [
            {
              sharedMember: 'Bob',
            },
            {
              sharedMember: 'Charlie',
            },
          ],
        },
        {
          writer: 'Bob',
          title: 'Task 2',
          memo: 'Task 2 memo',
          startAt: '2023-04-11T09:00:00.000',
          endAt: '2023-04-11T11:00:00.000',
          isFinished: false,
          isOpened: true,
          sharedMemberInfo: [
            {
              sharedMember: 'Alice',
            },
            {
              sharedMember: 'Dave',
            },
          ],
        },
        {
          writer: 'Charlie',
          title: 'Task 3',
          memo: '',
          startAt: '2023-04-12T13:00:00.000',
          endAt: '2023-04-12T14:00:00.000',
          isFinished: false,
          isOpened: true,
          sharedMemberInfo: [],
        },
      ],
    },
  ];
  return res.status(200).json(mockData);
}
