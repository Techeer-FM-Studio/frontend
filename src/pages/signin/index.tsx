import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { useForm } from 'react-hook-form';
import styles from './styles.module.scss';
import { AuthContext } from '../_app';
import { useRouter } from 'next/router';
import axios from 'axios';

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setIsLoggedIn } = React.useContext(AuthContext);
  const router = useRouter();

  const handleLogin = async () => {
    // 이 부분에서 실제 로그인 로직을 수행하고, 서버로부터 JWT 토큰을 받아와야 합니다.
    const response = await axios.request({
      method: 'POST',
      url: 'member/login',
      data: {
        id: 'test',
        password: 'test',
      },
    });

    const { accessToken } = await response.data;

    localStorage.setItem('token', accessToken);
    setIsLoggedIn(true);
    router.push('/');
  };

  return (
    <section className={styles.signinContainer}>
      <section className={styles.signinContainer__box}>
        <article className={styles.signinContainer__left}>
          <h1>HQ Rutine</h1>
          <form
            className={styles.signinContainer__form}
            onSubmit={handleSubmit(handleLogin)}
          >
            <label htmlFor="id">아이디</label>
            <input
              id="id"
              type="text"
              placeholder="아이디를 입력하세요"
              {...register('id', { required: true })}
            ></input>

            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              type="password"
              placeholder="비밀번호를 입력하세요"
              {...register('password', { required: true })}
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
