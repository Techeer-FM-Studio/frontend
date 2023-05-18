import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Object>
) {
    const mockData = {
        type: 'CUSTOM',
        id: 1,
        nickname: '백이요',
        title: 'test title',
        memo: 'test memo',
        startAt: '2023-04-10T10:48:12',
        endAt: '2023-04-11T10:48:12',
        commentList: [],
        imageUrl: [
            'https://i.pinimg.com/564x/92/6a/44/926a44c38c195bdabb29bea6bbdc1724.jpg',
        ],
        likeCnt: 0,
        isFinished: false,
        isLiked: false,
        isIncluded: true,
        readCnt: 0,
    }

    return res.status(200).json(mockData)
}
