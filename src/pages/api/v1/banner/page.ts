import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Object>
) {
  const mockData = [
    {
      url: 'https://i.pinimg.com/564x/62/cd/fa/62cdfaba81ec4a1035af0476bb3d57b5.jpg',
      like: 29,
      veiws: 40,
      writer: '전종훈',
    },
    {
      url: 'https://i.pinimg.com/564x/62/cd/fa/62cdfaba81ec4a1035af0476bb3d57b5.jpg',
      like: 29,
      veiws: 40,
      writer: '전종훈',
    },
    {
      url: 'https://i.pinimg.com/564x/62/cd/fa/62cdfaba81ec4a1035af0476bb3d57b5.jpg',
      like: 29,
      veiws: 40,
      writer: '전종훈',
    },
  ];
  return res.status(200).json(mockData);
}
