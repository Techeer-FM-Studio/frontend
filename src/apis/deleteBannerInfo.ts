import { axiosCustom } from './createAxios'

export async function deleteBannerInfo(id: number) {
    return await axiosCustom
        .delete(`banners/custom/${id}`)
        .then((res) => res.data)
}
