import Image from 'next/image';
import React from 'react';
import styles from '../../styles/components/banner/BannerItem.module.scss';
import { AiFillHeart } from 'react-icons/ai';
import { GrView } from 'react-icons/gr';
import { BannerItemType } from '@/types/banner';
import { useRouter } from 'next/router';

function BannerItem({ item }: { item: BannerItemType }) {
  const router = useRouter();

  return (
    <section
      className={styles.container}
      onClick={() => {
        router.push(`/banner/detail/${item.id}`);
      }}
    >
      <div className={styles.img}>
        <Image
          alt="photo"
          fill
          src={item.imageUrl[0]}
          style={{ objectFit: 'cover' }}
        ></Image>
      </div>
      <div className={styles.info}>
        <div>작성자 : {item.owner}</div>
        <section>
          <div>
            <GrView />
            {item.readCnt}
          </div>
          <div>
            <AiFillHeart style={{ color: 'red' }} />
            {item.likeCnt}
          </div>
          <div>type : {item.type}</div>
        </section>
      </div>
    </section>
  );
}

export default BannerItem;
