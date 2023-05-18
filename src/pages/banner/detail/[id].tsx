import { getBannerItem } from '@/apis/getBannerItem'
import CommentList from '@/components/banner/detail/CommentList'
import DetailButtons from '@/components/banner/detail/DetailButtons'
import DetailTitle from '@/components/banner/detail/DetailTitle'
import { BannerItemType } from '@/types/banner'
import {
    GetServerSideProps,
    GetServerSidePropsContext,
    PreviewData,
} from 'next'
import Image from 'next/image'
import { ParsedUrlQuery } from 'querystring'
import styles from '../../../styles/pages/BannerDetailPage.module.scss'

function InfoPage({ data }: { data: BannerItemType }) {
    const {
        type,
        id,
        writer,
        title,
        memo,
        startAt,
        endAt,
        imageUrl,
        likeCnt,
        isFinished,
        isLiked,
        isIncluded,
        readCnt,
    } = data
    return (
        <section className={styles.container}>
            <DetailTitle
                type={type}
                writer={writer}
                readCnt={readCnt}
                title={title}
            ></DetailTitle>

            <div className={styles.img}>
                <Image
                    src={imageUrl[0]}
                    alt="이미지"
                    fill
                    unoptimized={true}
                ></Image>
            </div>
            <article className={styles.memo}>
                <div dangerouslySetInnerHTML={{ __html: memo }}></div>
                <p>
                    진행 일정 : {new Date(startAt).toLocaleDateString()} ~{' '}
                    {new Date(endAt).toLocaleDateString()}
                </p>
            </article>

            <DetailButtons
                id={id}
                likeCnt={likeCnt}
                isLiked={isLiked}
                isIncluded={isIncluded}
            />

            <CommentList id={id} />
        </section>
    )
}

export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
    let { id } = context.query

    const data = await getBannerItem('test3', id)
    return { props: { data } }
}
export default InfoPage
