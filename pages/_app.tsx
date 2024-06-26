import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import {Router} from 'next/router';
import {YMInitializer} from 'react-yandex-metrika';
import ym from 'react-yandex-metrika';

Router.events.on('routeChangeComplete', (url: string) => {
  if (typeof window !== 'undefined') {
    ym('hit', url);
  }
});

export default function App({Component, pageProps, router}: AppProps) {
  return <>
    <title>My-top is best top</title>
    <link rel="icon" href="/favicon.ico"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link rel="preconnect" href="https://mc.yandex.ru"/>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap"
          rel="stylesheet"/>
    <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}/>
    <meta property="og:locale" content="ru_RU"/>
    <YMInitializer
      accounts={[]}
      options={{webvisor: true, defer: true}}
      version="2"
    />
    <Component {...pageProps} /></>;

}


