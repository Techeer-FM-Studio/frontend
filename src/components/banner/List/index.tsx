import React from 'react';
import BannerItem from '../Item';
import { BannerItemType } from '@/types/banner';
import styles from './styles.module.scss';
function BannerList({ bannerList }: { bannerList: BannerItemType[] }) {
  return (
    <div className={styles.container}>
      {bannerList?.map((item: BannerItemType) => (
        <BannerItem key={item.id} item={item}></BannerItem>
      ))}
    </div>
  );
}

export default BannerList;
