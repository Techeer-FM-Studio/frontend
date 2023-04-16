import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Object>
) {
  const mockData = { id: 1 };

  return res.status(200).json(mockData);
}
