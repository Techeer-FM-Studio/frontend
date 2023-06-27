import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { isLoggedInState } from '@/store/store';
import { useRouter } from 'next/router';

function LoginCheckComponent() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

  useEffect(() => {
    const checkLoginStatus = localStorage.getItem('token') ? true : false;
    setIsLoggedIn(checkLoginStatus);

    if (!isLoggedIn && router.pathname !== '/sign') {
      router.push('/sign');
    }
  }, [router, isLoggedIn]);

  return null; // 이 컴포넌트는 UI를 렌더링하지 않습니다.
}

export default LoginCheckComponent;
