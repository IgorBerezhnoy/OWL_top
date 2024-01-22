import React, {JSX} from 'react';
import s from './Card.module.css';
import classNames from 'classnames';
import {CardProps} from '@/components/Card/Card.props';

export const Card = ({children, color = 'white', className, ...rest}: CardProps): JSX.Element => {
  return <div {...rest} className={classNames(s[color], className)}>{children}</div>;
};


