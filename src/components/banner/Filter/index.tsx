import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from './styles.module.scss';
import { filterCategory } from '@/constants/banner';

function BannerFilter({ totalElements }: { totalElements: number }) {
  const [select, setSelect] = useState('모두');
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
    setSelect(text);
  };

  return (
    <section className={styles.container}>
      <ul className={styles.filter}>
        {filterCategory.map((category) => (
          <li
            className={
              select === category.name ? styles.select : styles.unselect
            }
            key={category.type}
            onClick={handleFilterBannerList}
          >
            {category.name}
          </li>
        ))}
      </ul>
      <div>결과 : {totalElements} 건</div>
    </section>
  );
}

export default BannerFilter;
