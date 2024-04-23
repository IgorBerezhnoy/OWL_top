import React, {JSX} from 'react';
import s from './header.module.css';
import classNames from 'classnames';
import {HeaderProps} from '@/layout/Header/header.props';

export const Header = ({className, ...rest}: HeaderProps): JSX.Element => {
  return (
    <header {...rest} className={classNames(s.header, className)}>
      Header
    </header>);
};


