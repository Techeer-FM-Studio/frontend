import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Object>
) {
  const { title, memo, startAt, endAt, nickname } = req.body;
  const mockData = {
    type: 'CUSTOM',
    bannerId: 1,
    nickname,
    title,
    memo,
    startAt,
    endAt,
    commentList: [],
    imageUrl: [
      'https://i.pinimg.com/564x/92/6a/44/926a44c38c195bdabb29bea6bbdc1724.jpg',
      'https://i.pinimg.com/564x/92/6a/44/926a44c38c195bdabb29bea6bbdc1724.jpg',
    ],
    likeCnt: 0,
    finished: false,
    isLiked: false,
    isIncluded: true,
    readCnt: 0,
  };

  return res.status(200).json(mockData);
}
