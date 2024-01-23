import React, {JSX} from 'react';
import {SidebarProps} from '@/layout/Sidebar/sidebar.props';
import {Menu} from '@/layout/Menu';
import {Logo} from '@/components';
import s from './sidebar.module.css';
import classNames from 'classnames';
import Link from 'next/link';

export const Sidebar = ({className, ...rest}: SidebarProps): JSX.Element => {
  return <div className={classNames(className, s.sidebar)} {...rest} >
    <div><Link href={'/'}><Logo/></Link></div>
    <div>Поиск</div>
    <Menu/></div>;
};


