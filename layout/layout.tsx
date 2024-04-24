import React, {JSX} from 'react';
import {LayoutProps} from '@/layout/layout.props';
import {Footer} from '@/layout/Footer';
import {Header} from '@/layout/Header';
import {Sidebar} from '@/layout/Sidebar';
import s from './layout.module.css';
import {AppContextProvider, IAppContext} from '@/context/app.context';
import {Up} from '@/components';

const Layout = ({children,}: LayoutProps): JSX.Element => {
  return <div className={s.wrapper}>
    <Header className={s.header}/>
    <Sidebar className={s.sidebar}/>
    <div className={s.body}>{children}</div>
    <Footer className={s.footer}/>
    <Up/>
  </div>;
};


export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: ({
                                                                                          menu,
                                                                                          firstCategory
                                                                                        }: T) => React.JSX.Element) => {
  return function withLayoutComponent(props: T) {
    return <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
      <Layout>
        <Component {...props}/>
      </Layout></AppContextProvider>;
  };
};

//render to string
//