import React, {JSX} from 'react';
import {PtagProps} from '@/components/Ptag/Ptag.props';
import s from './Ptag.module.css';
import classNames from 'classnames';

export const Ptag = ({children, className, size = 'middle', ...rest}: PtagProps): JSX.Element => {
  return <p {...rest} className={classNames(s[size], className)}>{children}</p>;
};


