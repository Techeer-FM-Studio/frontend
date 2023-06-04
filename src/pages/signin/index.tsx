import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import styles from './styles.module.scss';
function LoginPage() {
  return (
    <section className={styles.signinContainer}>
      <section className={styles.signinContainer__box}>
        <article className={styles.signinContainer__left}>
          <h1>HQ Rutine</h1>
          <form className={styles.signinContainer__form}>
            <label htmlFor="id">아이디</label>
            <input
              id="id"
              type="text"
              placeholder="아이디를 입력하세요"
            ></input>

            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              type="password"
              placeholder="비밀번호를 입력하세요"
            ></input>

            <button type="submit">로그인</button>
            <p>
              아직 회원이 아니신가요? <span>회원가입</span>
            </p>
          </form>
        </article>
        <article className={styles.signinContainer__right}>
          <Player
            src="https://assets6.lottiefiles.com/packages/lf20_vyL7gxqRAH.json"
            className="players"
            loop
            autoplay
          />
        </article>
      </section>
    </section>
  );
}

export default LoginPage;
