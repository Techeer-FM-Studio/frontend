import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Object>
) {
    const mockData = {
        id: 1,
        type: 'CUSTOM',
        writer: '백이요',
        title: 'test title',
        memo: 'test memo',
        startAt: '2023-04-10T10:48:12',
        endAt: '2023-04-11T10:48:12',
        imageUrl: [
            'https://i.pinimg.com/236x/a2/b8/92/a2b8929a054573fafcba7ac47b3c927a.jpg',
            'https://i.pinimg.com/236x/a2/b8/92/a2b8929a054573fafcba7ac47b3c927a.jpg',
        ],
        likeCnt: 3,
        isFinished: false,
        isLiked: true,
        isIncluded: true,
        readCnt: 3,
    }

    return res.status(200).json(mockData)
}
