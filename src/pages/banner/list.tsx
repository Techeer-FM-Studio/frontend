import BannerList from '@/components/banner/BannerList';
import Header from '@/components/common/Header';
import styles from '../../styles/pages/BannerListPage.module.scss';
import React, { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import { getBannerList } from '@/apis/getBannerList';
import { BannerItemType } from '@/types/banner';

function BannerListPage() {
  const [bannerType, setBannerType] = useState('모두');
  const [page, setPage] = useState(1);
  const [bannerList, setBannerList] = useState<BannerItemType[] | undefined>();

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handleBannerType = (type: string) => {
    setBannerType(type);
    setPage(1);
  };

  useEffect(() => {
    (async () => {
      const data = await getBannerList(page, bannerType);
      setBannerList([...data]);
    })();
  }, [bannerType, page]);

  return (
    <section className={styles.page}>
      <Header />
      <section className={styles.title}>
        <div>검색어 에 대한 결과 : 총 땡땡 건</div>
        <ul className={styles.list}>
          {['공식', '커스텀', '모두'].map((title) => (
            <li
              key={title}
              onClick={() => {
                handleBannerType(title);
              }}
            >
              {title}
            </li>
          ))}
        </ul>
      </section>

      <BannerList bannerList={bannerList}></BannerList>

      <section className={styles.pagination}>
        <Pagination
          activePage={page}
          itemsCountPerPage={5}
          totalItemsCount={50}
          pageRangeDisplayed={5}
          prevPageText="‹"
          nextPageText="›"
          onChange={handlePageChange}
        />
      </section>
    </section>
  );
}

export default BannerListPage;
