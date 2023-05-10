import { useRouter } from 'next/router';
import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from '@/styles/components/banner/BannerPaginate.module.scss';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
function BannerPaginate({
  totalPages,
  page,
}: {
  totalPages: number;
  page: number;
}) {
  const router = useRouter();

  const handlePageChange = (e: { selected: number }) => {
    const selectPage = e.selected;
    const { size, filter } = router.query;
    const str = filter ? `&filter=${filter}` : '';
    router.push(`/banner/list/${selectPage}?size=${size}${str}`);
  };

  return (
    <ReactPaginate
      className={styles.container}
      breakLabel="..."
      onPageChange={handlePageChange}
      pageRangeDisplayed={5} // 표시되는 페이지 범위
      pageCount={totalPages} //총 페이지 수
      nextLabel={<AiOutlineArrowRight />}
      previousLabel={<AiOutlineArrowLeft />}
      renderOnZeroPageCount={null}
    ></ReactPaginate>
  );
}

export default BannerPaginate;
