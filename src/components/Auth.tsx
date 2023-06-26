import { AuthContext } from '@/pages/_app';
import { useRouter } from 'next/router';
import React from 'react';

type AuthPropsType = {
  children: React.ReactNode;
};

function Auth({ children }: AuthPropsType) {
  const { isLoggedIn } = React.useContext(AuthContext);
  const router = useRouter();

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      return;
    }

    if (!isLoggedIn) {
      router.push('/signin');
    }
  }, [isLoggedIn, router]);

  return <div>{children}</div>;
}

export default Auth;
