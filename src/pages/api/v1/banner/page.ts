import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Object>
) {
  const mockData = [
    {
      id: 1,
      url: 'https://i.pinimg.com/564x/7f/aa/b3/7faab39193f67ff2d201a8b794d06ecd.jpg',
      like: 29,
      veiws: 40,
      writer: '전종훈',
    },
    {
      id: 2,
      url: 'https://i.pinimg.com/564x/8f/f9/bb/8ff9bbf46865a9ece25d1d2a60d486cf.jpg',
      like: 21,
      veiws: 140,
      writer: '백동열',
    },
    {
      id: 3,
      url: 'https://i.pinimg.com/564x/e0/ae/48/e0ae483b348c4296614e1dc68ab9c315.jpg',
      like: 29,
      veiws: 40,
      writer: '최우석',
    },
    {
      id: 4,
      url: 'https://i.pinimg.com/564x/8f/f9/bb/8ff9bbf46865a9ece25d1d2a60d486cf.jpg',
      like: 29,
      veiws: 40,
      writer: '배준일',
    },
    {
      id: 5,
      url: 'https://i.pinimg.com/564x/62/cd/fa/62cdfaba81ec4a1035af0476bb3d57b5.jpg',
      like: 29,
      veiws: 40,
      writer: '용감한남자',
    },
    {
      id: 6,
      url: 'https://i.pinimg.com/564x/8f/f9/bb/8ff9bbf46865a9ece25d1d2a60d486cf.jpg',
      like: 29,
      veiws: 401,
      writer: '니가있어좋다',
    },
    {
      id: 7,
      url: 'https://i.pinimg.com/564x/62/cd/fa/62cdfaba81ec4a1035af0476bb3d57b5.jpg',
      like: 229,
      veiws: 40,
      writer: '어린왕자',
    },
    {
      id: 8,
      url: 'https://i.pinimg.com/564x/8f/f9/bb/8ff9bbf46865a9ece25d1d2a60d486cf.jpg',
      like: 293,
      veiws: 440,
      writer: '수익창출남',
    },
  ];
  return res.status(200).json(mockData);
}
