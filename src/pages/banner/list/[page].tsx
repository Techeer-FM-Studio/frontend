import { getBannerList } from '@/apis/getBannerList'
import BannerList from '@/components/banner/BannerList'
import styles from '@/styles/pages/BannerListPage.module.scss'
import BannerFilter from '@/components/banner/BannerFilter'
import {
    GetServerSideProps,
    GetServerSidePropsContext,
    PreviewData,
} from 'next'
import { ParsedUrlQuery } from 'querystring'
import { BannerPageableType } from '@/types/banner'
import BannerPaginate from '@/components/banner/BannerPaginate'
import BannerSlider from '@/components/banner/BannerSlider'

function BannerListPage({ data }: { data: BannerPageableType }) {
    const { totalElements, totalPages, page, size, content } = data

    return (
        <section className={styles.page}>
            <BannerSlider />
            <article>
                <BannerFilter totalElements={totalElements}></BannerFilter>
                <BannerList bannerList={content}></BannerList>
                <BannerPaginate
                    totalPages={totalPages}
                    page={page}
                ></BannerPaginate>
            </article>
        </section>
    )
}

export default BannerListPage

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
    let pageable
    const nickname = 'test1' // 임시 사용

    if (context.query) {
        const { page, size, filter } = context.query
        pageable = await getBannerList(nickname, page, size, filter)
        console.log(pageable)
        return { props: { data: pageable } }
    } else return { props: {} }
}
