import { getBannerItem } from '@/apis/getBannerItem';
import CommentList from '@/components/banner/detail/CommentList';
import DetailButtons from '@/components/banner/detail/DetailButtons';
import DetailTitle from '@/components/banner/detail/DetailTitle';
import { BannerItemType } from '@/types/banner';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  PreviewData,
} from 'next';
import Image from 'next/image';
import { ParsedUrlQuery } from 'querystring';

function InfoPage({ data }: { data: BannerItemType }) {
  const {
    type,
    id,
    owner,
    title,
    memo,
    startAt,
    endAt,
    imageUrl,
    likeCnt,
    finished,
    isLiked,
    isIncluded,
    readCnt,
    commentList,
  } = data;
  return (
    <div>
      <DetailTitle
        type={type}
        owner={owner}
        readCnt={readCnt}
        title={title}
      ></DetailTitle>

      <div style={{ width: 300, height: 300, position: 'relative' }}>
        <Image src={imageUrl[0]} alt="이미지" fill></Image>
      </div>
      <article>
        <div>{memo}</div>
        <div>
          일정 : {startAt} ~ {endAt}
        </div>
      </article>

      <DetailButtons
        id={id}
        likeCnt={likeCnt}
        isLiked={isLiked}
        isIncluded={isIncluded}
      />

      <CommentList id={id} commentList={commentList} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  let { id } = context.query;
  const data = await getBannerItem('test1', id);
  return { props: { data } };
};
export default InfoPage;
