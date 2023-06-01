import BannerList from '@/components/Banner/List';
import styles from './styles.module.scss';
import BannerFilter from '@/components/Banner/Filter';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  PreviewData,
} from 'next';
import { ParsedUrlQuery } from 'querystring';
import { BannerPageableType } from '@/types/banner';
import BannerPaginate from '@/components/Banner/Paginate';
import BannerSlider from '@/components/Banner/Slider';
import { getBannerList } from '@/apis/banner';

function BannerListPage({ data }: { data: BannerPageableType }) {
  const { totalElements, totalPages, page, content } = data;

  return (
    <section className={styles.page}>
      <BannerSlider />
      <article>
        <BannerFilter totalElements={totalElements}></BannerFilter>
        <BannerList bannerList={content}></BannerList>
        <BannerPaginate totalPages={totalPages} page={page}></BannerPaginate>
      </article>
    </section>
  );
}

export default BannerListPage;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
) => {
  let pageable;
  // TODO: 로그인 기능 구현 후, 로그인한 유저의 닉네임을 가져와서 사용
  const nickname = 'test1';

  if (context.query) {
    const { page, size, filter } = context.query;
    pageable = await getBannerList(nickname, page, size, filter);
    return { props: { data: pageable } };
  } else return { props: {} };
};
