// src/pages/api/v1/banners/custom/mybanners/list.ts
// 여기에 배너에서 가져온 Mock Data List 넣어두기
// src/pages/api/v1/tasks/list.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { BannerTaskInfo } from '../../../../../../types/routine';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Object>,
) {
  const mockData: BannerTaskInfo[] = [
    {
      type: 'CUSTOM',
      bannerId: 1,
      writer: '백이요',
      title: '프로그래밍 스터디 참여자 모집',
      memo: '함께 모여서 함께 프로그래밍을 공부하고 개발하는 스터디를 시작합니다. 관심 있으신 분들은 연락 주세요.',
      startAt: '2023-05-01T18:00:00Z',
      endAt: '2023-05-01T20:00:00Z',
      imageUrl: [
        'https://i.pinimg.com/564x/1a/b7/94/1ab794d8c0b5fc5c5f52e5d5d545ee5e.jpg',
        'https://i.pinimg.com/564x/f5/5a/35/f55a35f3dab5d7c2b71da9a18a2a308d.jpg',
      ],
      isFinished: false,
    },
    {
      type: 'CUSTOM',
      bannerId: 2,
      writer: 'David',
      title: 'Spring hiking in the mountains',
      memo: "We'll hike up to the top of the mountain to see the beautiful spring scenery. Please bring your own water and snacks.",
      startAt: '2023-05-08T08:00:00Z',
      endAt: '2023-05-08T15:00:00Z',
      imageUrl: [
        'https://i.pinimg.com/564x/1f/72/08/1f7208d0c3036a09793fb85c558d63e7.jpg',
        'https://i.pinimg.com/564x/f5/5a/35/f55a35f3dab5d7c2b71da9a18a2a308d.jpg',
      ],
      isFinished: false,
    },
    {
      type: 'CUSTOM',
      bannerId: 3,
      writer: 'Jane',
      title: 'Volunteer work at the animal shelter',
      memo: "Let's help the animals at the local shelter by volunteering our time and effort. Please wear comfortable clothes and bring some snacks for the break.",
      startAt: '2023-05-15T10:00:00Z',
      endAt: '2023-05-15T16:00:00Z',
      imageUrl: [
        'https://i.pinimg.com/564x/fe/ce/c0/fecec070536f7a090cc050d4cc7c4f1a.jpg',
        'https://i.pinimg.com/564x/f5/5a/35/f55a35f3dab5d7c2b71da9a18a2a308d.jpg',
      ],
      isFinished: false,
    },
    {
      type: 'CUSTOM',
      bannerId: 4,
      writer: 'Max',
      title: 'Guitar jam session',
      memo: 'Bring your guitar and join us for a fun jam session. All levels are welcome!',
      startAt: '2023-05-21T14:00:00Z',
      endAt: '2023-05-21T16:00:00Z',
      imageUrl: [
        'https://i.pinimg.com/564x/f5/5a/35/f55a35f3dab5d7c2b71da9a18a2a308d.jpg',
        'https://i.pinimg.com/564x/f5/5a/35/f55a35f3dab5d7c2b71da9a18a2a308d.jpg',
      ],
      isFinished: false,
    },
  ];
  return res.status(200).json(mockData);
}
