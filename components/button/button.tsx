import React, {JSX} from 'react';
import {ButtonType} from '@/components/button/button.props';
import s from './button.module.css';
import classNames from 'classnames';
import {Vector} from '@/components/button/index';

export const Button = ({arrow = 'none', children, appearance, className, ...rest}: ButtonType): JSX.Element => {

  return <button {...rest} className={classNames(s.button, className, {
    [s.primary]: appearance == 'primary',
    [s.ghost]: appearance == 'ghost'
  })}>{children}{arrow !== 'none' &&
    <span className={classNames(s.arrow, {[s.down]: arrow === 'down'})}>

     <Vector/>

    </span>}</button>;
};

