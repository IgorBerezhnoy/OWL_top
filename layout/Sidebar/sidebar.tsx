import React, {JSX} from 'react';
import {SidebarProps} from '@/layout/Sidebar/sidebar.props';
import {Menu} from '@/layout/Menu';
import {Logo} from '@/components';
import s from './sidebar.module.css';
import classNames from 'classnames';

export const Sidebar = ({className, ...rest}: SidebarProps): JSX.Element => {
  return <div className={classNames(className,s.sidebar)} {...rest} >
    <div><Logo/></div>
    <div>Поиск</div>
    <Menu/></div>;
};


