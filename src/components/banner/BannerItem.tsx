import Image from 'next/image'
import React from 'react'
import styles from '../../styles/components/banner/BannerItem.module.scss'
import { AiFillHeart } from 'react-icons/ai'
import { GrView } from 'react-icons/gr'
import { RxPerson } from 'react-icons/rx'
import { BannerItemType } from '@/types/banner'
import { useRouter } from 'next/router'

function BannerItem({ item }: { item: BannerItemType }) {
    const router = useRouter()
    const type: { [key: string]: string } = {
        CUSTOM: '커스텀',
        OFFICIAL: '공식',
    }
    console.log(item.imageUrl)
    return (
        <section
            className={styles.container}
            onClick={() => {
                router.push(`/banner/detail/${item.id}`)
            }}
        >
            <div className={styles.img}>
                <Image
                    alt="photo"
                    fill
                    src={item.imageUrl[0]}
                    style={{ objectFit: 'cover' }}
                    unoptimized={true}
                ></Image>
            </div>
            <div className={styles.info}>
                <div>
                    <RxPerson />
                    <div>{item.writer}</div>
                </div>
                <div>
                    <GrView />
                    <div>{item.readCnt}</div>
                </div>
                <div>
                    <AiFillHeart style={{ color: 'red' }} />
                    <div>{item.likeCnt}</div>
                </div>
            </div>
            <div className={styles[item.type]}>{type[item.type]}</div>
        </section>
    )
}

export default BannerItem
