import { useRouter } from 'next/router';
import React, { Dispatch, SetStateAction, useState } from 'react';
import styles from '@/styles/components/banner/BannerFilter.module.scss';

function BannerFilter({ totalElements }: { totalElements: number }) {
  const filterName = ['공식', '커스텀', '모두'];
  const router = useRouter();
  const handleFilterBannerList = (e: React.MouseEvent<HTMLLIElement>) => {
    const text = e.currentTarget.innerText;
    const { page, size } = router.query;
    switch (text) {
      case '모두':
        router.push(`/banner/list/${page}?size=${size}`);
        break;
      case '커스텀':
        router.push(`/banner/list/${page}?size=${size}&filter=custom`);
        break;
      case '공식':
        router.push(`/banner/list/${page}?size=${size}&filter=official`);
        break;

      default:
        break;
    }
  };

  return (
    <section className={styles.container}>
      <div>검색어 에 대한 결과 : {totalElements} 건</div>
      <ul className={styles.filter}>
        {filterName.map((title) => (
          <li key={title} onClick={handleFilterBannerList}>
            {title}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BannerFilter;
