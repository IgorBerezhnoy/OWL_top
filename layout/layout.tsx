import React, {JSX} from 'react';
import {LayoutProps} from '@/layout/layout.props';
import {Footer} from '@/layout/Footer';
import {Header} from '@/layout/Header';
import {Sidebar} from '@/layout/Sidebar';

export const Layout = ({children,}: LayoutProps): JSX.Element => {
  return <>
    <Header/>
    <div>
      <Sidebar/>
      <div>{children}</div>
    </div>
    <Footer/>
  </>;
};


