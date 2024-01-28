import React, {JSX} from 'react';
import {DividerProps} from '@/components/Divider/Divider.props';
import classNames from 'classnames';
import s from './Divider.module.css';

export const Divider = ({className, ...rest}: DividerProps): JSX.Element => {
  return <hr className={classNames(s.hr, className)} {...rest} />;
};


