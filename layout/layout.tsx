import React, {FunctionComponent, JSX} from 'react';
import {LayoutProps} from '@/layout/layout.props';
import {Footer} from '@/layout/Footer';
import {Header} from '@/layout/Header';
import {Sidebar} from '@/layout/Sidebar';

const Layout = ({children,}: LayoutProps): JSX.Element => {
  return <>
    <Header/>
    <div>
      <Sidebar/>
      <div>{children}</div>
    </div>
    <Footer/>
  </>;
};


export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T) {
    return <Layout>
      <Component {...props}/>
    </Layout>;
  };
};