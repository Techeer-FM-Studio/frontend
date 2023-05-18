import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Header from '@/components/common/Header';

export default function App({ Component, pageProps }: AppProps) {
  console.log('hello');
  return (
    <>
      <Header />
      <Component {...pageProps} />;
    </>
  );
}
