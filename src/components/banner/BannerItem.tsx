import Image from 'next/image';
import React from 'react';
import styles from '../../styles/components/banner/BannerItem.module.scss';
import { AiFillHeart } from 'react-icons/ai';
import { GrView } from 'react-icons/gr';

type PropsType = {
  item: {
    url: string;
    writer: string;
    veiws: number;
    like: number;
  };
};

function BannerItem({ item: { url, like, veiws, writer } }: PropsType) {
  return (
    <section className={styles.container}>
      <div className={styles.img}>
        <Image
          alt="photo"
          fill
          src={url}
          style={{ objectFit: 'cover' }}
        ></Image>
      </div>
      <div className={styles.info}>
        <div>작성자 : {writer}</div>
        <section>
          <div>
            <GrView />
            {veiws}
          </div>
          <div>
            <AiFillHeart style={{ color: 'red' }} />
            {like}
          </div>
        </section>
      </div>
    </section>
  );
}

export default BannerItem;
