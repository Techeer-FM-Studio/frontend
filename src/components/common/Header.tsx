import React, { useState } from 'react';
import styles from '../../styles/components/common/Header.module.scss';
import Logo from '../../../public/Logo.png';

import { FiMenu, FiBell, FiSearch } from 'react-icons/fi';

import Image from 'next/image';
import Link from 'next/link';

function Header() {
  const [search, setSearch] = useState<string | undefined>('');
  const [menuView, setMenuView] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const toggleMenuView = () => {
    setMenuView((pre) => !pre);
  };

  return (
    <section className={styles.header}>
      <div className={styles.logo}>
        <Image
          src={Logo}
          style={{ objectFit: 'contain' }}
          fill
          placeholder="blur"
          alt="logo"
          sizes="(max-width: 100%)"
        />
      </div>
      <section className={styles.section}>
        <input
          className={styles.input}
          type="text"
          value={search}
          placeholder="검색어를 입력해주세요"
          onChange={handleSearch}
        />
        <FiSearch className={styles.icon} />
        <FiBell className={styles.icon} />
        <FiMenu className={styles.icon} onClick={toggleMenuView} />
      </section>
      {menuView ? (
        <ul className={styles.menuList}>
          <Link className={styles.link} href={`/banner/list/1?size=6`}>
            배너 페이지
          </Link>
          <Link className={styles.link} href={`/banner/list/1?size=6`}>
            마이 페이지
          </Link>
          <Link className={styles.link} href={`/banner/list/1?size=6`}>
            등등 페이지
          </Link>
        </ul>
      ) : null}
    </section>
  );
}

export default Header;
