import { getBannerList } from '@/apis/getBannerList';
import BannerList from '@/components/banner/BannerList';
import Header from '@/components/common/Header';
import styles from '@/styles/pages/BannerListPage.module.scss';
import BannerFilter from '@/components/banner/BannerFilter';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  PreviewData,
} from 'next';
import { ParsedUrlQuery } from 'querystring';
import { BannerPageableType } from '@/types/banner';
import BannerPaginate from '@/components/banner/BannerPaginate';

function BannerListPage({ data }: { data: BannerPageableType }) {
  const { totalElements, totalPages, page, size, content } = data;

  return (
    <section className={styles.page}>
      <BannerFilter totalElements={totalElements}></BannerFilter>
      <BannerList bannerList={content}></BannerList>
      <BannerPaginate totalPages={totalPages} page={page}></BannerPaginate>
    </section>
  );
}

export default BannerListPage;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  let pageable;

  if (context.query) {
    const { page, size, filter } = context.query;
    pageable = await getBannerList('test1', page, size, filter);
    console.log(pageable);
    return { props: { data: pageable } };
  } else return { props: {} };
};
