import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Object>
) {
    const mockData = { isLiked: false }

    return res.status(200).json(mockData)
}
