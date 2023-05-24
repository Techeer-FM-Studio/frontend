import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styles from './styles.module.scss';

function BannerFilter({ totalElements }: { totalElements: number }) {
  const [select, setSelect] = useState('모두');
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
    setSelect(text);
  };

  return (
    <section className={styles.container}>
      <ul className={styles.filter}>
        {filterName.map((title) => (
          <li
            className={select === title ? styles.select : styles.unselect}
            key={title}
            onClick={handleFilterBannerList}
          >
            {title}
          </li>
        ))}
      </ul>
      <div>결과 : {totalElements} 건</div>
    </section>
  );
}

export default BannerFilter;
