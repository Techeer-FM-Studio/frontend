import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Object>
) {
    const mockData = {
        imageUrl:
            'https://i.pinimg.com/564x/92/6a/44/926a44c38c195bdabb29bea6bbdc1724.jpg',
    }

    return res.status(200).json(mockData)
}
