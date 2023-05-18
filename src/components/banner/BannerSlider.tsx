import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from '../../styles/components/banner/BannerSlider.module.scss'
function BannerSlider() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 2,
        slidesToScroll: 1,
    }
    return (
        //TODO: 최근 배너만 보여줄지 고민하기
        <div>
            <Slider {...settings}>
                <div className={styles.img}>
                    <Image
                        src={
                            'https://i.pinimg.com/originals/94/1b/1d/941b1d16f9af2f7c4752af195cca532f.jpg'
                        }
                        alt="banner"
                        fill
                        quality={100}
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className={styles.img}>
                    <Image
                        src={
                            'https://i.pinimg.com/736x/80/be/b3/80beb3f243f3fee61faedd6efc9eea23.jpg'
                        }
                        alt="banner"
                        fill
                        quality={100}
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className={styles.img}>
                    <Image
                        src={
                            'https://i.pinimg.com/564x/b3/3c/76/b33c767e867fcdadc27eca9c25b6c15a.jpg'
                        }
                        alt="banner"
                        fill
                        quality={100}
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className={styles.img}>
                    <Image
                        src={
                            'https://i.pinimg.com/564x/a5/01/1b/a5011b97f696c2e6df49411b1f93065c.jpg'
                        }
                        alt="banner"
                        fill
                        quality={100}
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </Slider>
        </div>
    )
}

export default BannerSlider
