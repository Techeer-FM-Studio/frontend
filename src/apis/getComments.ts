import { axiosCustom } from './createAxios'

export async function getComments(id: number, page: number, size: number) {
    return await axiosCustom
        .get(`banners/custom/${id}/comments/page`, { params: { page, size } })
        .then((res) => res.data)
}
