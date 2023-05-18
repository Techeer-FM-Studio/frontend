import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Object>
) {
    const mockData = {
        totalPages: 5,
        totalElements: 10,
        size: 2,
        page: 3,
        content: [
            {
                id: 1,
                writer: 'test1',
                comments: 'test memo',
                createdAt: '2023-04-07T02:53:10.682818',
                updatedAt: '2023-04-07T02:53:10.682818',
            },
            {
                id: 2,
                writer: 'test2',
                comments: '<p>dsafdsafd</p>',
                createdAt: '2023-04-07T02:53:10.682818',
                updatedAt: '2023-04-07T02:53:10.682818',
            },
        ],
    }

    return res.status(200).json(mockData)
}
