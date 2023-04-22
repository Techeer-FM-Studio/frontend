import React, { useState } from 'react';
import styles from '../../styles/components/common/Header.module.scss';
import Logo from '../../../public/Logo.png';

import { FiMenu, FiBell, FiSearch } from 'react-icons/fi';
import { VscBellDot } from 'react-icons/vsc';
import { MdOutlineCancel } from 'react-icons/md';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
  const [menuView, setMenuView] = useState(false);
  const router = useRouter();
  const toggleMenuView = () => {
    setMenuView((pre) => !pre);
  };

  return (
    <section className={styles.container}>
      <section className={styles.header}>
        <div
          className={styles.logo}
          onClick={() => {
            router.push('/');
          }}
        >
          <Image
            src={Logo}
            fill
            placeholder="blur"
            alt="logo"
            sizes="(max-width: 100%)"
          />
        </div>
        <section className={styles.nav}>
          <VscBellDot
            className={styles.icon}
            onClick={() => {
              alert('개발중입니다!');
            }}
          />
          {menuView ? (
            <MdOutlineCancel className={styles.icon} onClick={toggleMenuView} />
          ) : (
            <FiMenu className={styles.icon} onClick={toggleMenuView} />
          )}
        </section>
        {menuView ? (
          <div
            className={styles.linkList}
            onClick={() => {
              toggleMenuView();
            }}
          >
            <Link href={`/banner/list/1?size=6`}>배너 페이지</Link>
            <Link href={`/banner/list/1?size=6`}>마이 페이지</Link>
            <Link href={`/banner/list/1?size=6`}>로그아웃</Link>
          </div>
        ) : null}
      </section>
    </section>
  );
}

export default Header;
