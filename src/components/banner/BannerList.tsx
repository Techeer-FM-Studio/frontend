import React from 'react'
import BannerItem from './BannerItem'
import styles from '../../styles/components/banner/BannerList.module.scss'
import { BannerItemType } from '@/types/banner'

function BannerList({ bannerList }: { bannerList: BannerItemType[] }) {
    return (
        <div className={styles.container}>
            {bannerList?.map((item: BannerItemType) => (
                <BannerItem key={item.id} item={item}></BannerItem>
            ))}
        </div>
    )
}

export default BannerList
