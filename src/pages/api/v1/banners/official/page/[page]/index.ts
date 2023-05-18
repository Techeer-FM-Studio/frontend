import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Object>,
) {
  const mockData = {
    totalPages: 5,
    totalElements: 10,
    size: 2,
    page: 3,
    content: [
      {
        id: 2,
        type: 'OFFICIAL',
        owner: '백이요',
        title: 'test title',
        memo: 'test memo',
        startAt: '2023-04-10T10:48:12',
        endAt: '2023-04-11T10:48:12',
        imageUrl: [
          'https://i.pinimg.com/236x/a2/b8/92/a2b8929a054573fafcba7ac47b3c927a.jpg',
          'https://i.pinimg.com/236x/a2/b8/92/a2b8929a054573fafcba7ac47b3c927a.jpg',
        ],
        likeCnt: 3,
        finished: false,
        isLiked: true,
        isIncluded: true,
        readCnt: 3,
      },
      {
        id: 3,
        type: 'OFFICIAL',
        owner: '백이요',
        title: 'test title',
        memo: 'test memo',
        startAt: '2023-04-10T10:48:12',
        endAt: '2023-04-11T10:48:12',
        imageUrl: [
          'https://i.pinimg.com/236x/a2/b8/92/a2b8929a054573fafcba7ac47b3c927a.jpg',
          'https://i.pinimg.com/236x/a2/b8/92/a2b8929a054573fafcba7ac47b3c927a.jpg',
        ],
        likeCnt: 3,
        finished: true,
        isLiked: false,
        isIncluded: false,
        readCnt: 3,
      },
    ],
  };

  return res.status(200).json(mockData);
}
