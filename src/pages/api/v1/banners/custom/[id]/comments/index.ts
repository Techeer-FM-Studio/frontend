import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Object>
) {
  const mockData = {
    id: 1,
    writer: '요기요',
    comment: '댓글 멋지게 다는법',
    createAt: '2023-04-07T02:53:10.682818',
    updateAt: '2023-04-07T02:53:10.682818',
  };

  return res.status(200).json(mockData);
}
