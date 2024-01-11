import React, {JSX} from 'react';
import {ButtonType} from '@/components/button/button.props';
import s from './button.module.css';
import classNames from 'classnames';

export const Button = ({children, appearance, className, ...rest}: ButtonType): JSX.Element => {

  return <button {...rest} className={classNames(s.button, className, {
    [s.primary]: appearance == 'primary',
    [s.ghost]: appearance == 'ghost'
  })}>{children}</button>;
};

