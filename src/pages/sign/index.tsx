import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import styles from './styles.module.scss';
import SignIn from '@/components/Sign/SignIn';

function SignPage() {
  return (
    <section className={styles.signinContainer}>
      <section className={styles.signinContainer__box}>
        <article className={styles.signinContainer__left}>
          <h1>HQ Rutine</h1>
          <SignIn />
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

export default SignPage;
