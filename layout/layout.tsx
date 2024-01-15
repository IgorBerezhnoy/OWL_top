import React, {FunctionComponent, JSX} from 'react';
import {LayoutProps} from '@/layout/layout.props';
import {Footer} from '@/layout/Footer';
import {Header} from '@/layout/Header';
import {Sidebar} from '@/layout/Sidebar';
import s from './layout.module.css';

const Layout = ({children,}: LayoutProps): JSX.Element => {
  return <div className={s.wrapper}>
    <Header className={s.header}/>
    <Sidebar className={s.sidebar}/>
    <div className={s.body}>{children}</div>
    <Footer className={s.footer}/>
  </div>;
};


export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T) {
    return <Layout>
      <Component {...props}/>
    </Layout>;
  };
};