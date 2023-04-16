import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Object>
) {
  const mockData = {
    type: 'CUSTOM',
    bannerId: 1,
    owner: '백이요',
    title: 'test title',
    memo: 'test memo',
    startAt: '2023-04-10T10:48:12',
    endAt: '2023-04-11T10:48:12',
    commentList: [
      {
        commentId: 1,
        writer: 'member nickname',
        content: 'test content',
        startAt: '2023-04-10T10:48:12',
        updateAt: '2023-04-10T10:48:12',
      },
      {
        commentId: 2,
        writer: 'member nickname',
        content: 'test content',
        startAt: '2023-04-10T10:48:12',
        updateAt: '2023-04-10T10:48:12',
      },
    ],
    imageUrl: [
      'https://i.pinimg.com/564x/92/6a/44/926a44c38c195bdabb29bea6bbdc1724.jpg',
      'https://i.pinimg.com/564x/92/6a/44/926a44c38c195bdabb29bea6bbdc1724.jpg',
    ],
    likeCnt: 209,
    finished: false,
    isLiked: true,
    isIncluded: true,
    readCnt: 3,
  };

  return res.status(200).json(mockData);
}
