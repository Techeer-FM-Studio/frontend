import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import styles from './styles.module.scss';
import SignIn from '@/components/Sign/SignIn';
import SignUp from '@/components/Sign/SignUp';

function SignPage() {
  const [isSignUp, setIsSginUp] = useState<boolean>(false);
  return (
    <section className={styles.signinContainer}>
      <section className={styles.signinContainer__box}>
        <article className={styles.signinContainer__left}>
          <h1>HQ Rutine</h1>
          {isSignUp ? (
            <SignUp setIsSginUp={setIsSginUp} />
          ) : (
            <SignIn setIsSginUp={setIsSginUp} />
          )}
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
