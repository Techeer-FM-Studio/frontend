import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Header from '@/components/common/Header';
import React, { useEffect } from 'react';
import router from 'next/router';
import Auth from '@/components/Auth';

const AuthContext = React.createContext<any>('');

export default function App({ Component, pageProps }: AppProps) {
  const isLoginPage = Component.name === 'LoginPage';
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    //TODO: 토큰을 가지고 유효성 검사하는 api 호출

    // if (token) {
    //   if (decoded.exp > currentTime) {
    //     setIsLoggedIn(true);
    //   } else {
    //     setIsLoggedIn(false);
    //     localStorage.removeItem('token');
    //   }
    // } else {
    //   setIsLoggedIn(false);
    // }
  }, []);

  // if (!isLoggedIn) {
  //   router.push('/login');
  // }

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {!isLoginPage && <Header />}
      <Auth>
        <Component {...pageProps} />;
      </Auth>
    </AuthContext.Provider>
  );
}

export { AuthContext };
