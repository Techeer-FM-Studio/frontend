import LoginCheckComponent from '@/components/Auth';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import React from 'react';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <LoginCheckComponent />
      <Component {...pageProps} />;
    </RecoilRoot>
  );
}
