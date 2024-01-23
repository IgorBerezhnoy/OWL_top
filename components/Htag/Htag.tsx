import React, {JSX} from 'react';
import {HtagProps} from '@/components/Htag/Htag.props';
import s from './Htag.module.css';
import classNames from 'classnames';

export const Htag = ({children, tag, className}: HtagProps): JSX.Element => {
  switch (tag) {
    case 'h1':
      return <h1 className={classNames(s.h1, className)}>{children}</h1>;
    case 'h2':
      return <h2 className={classNames(s.h2, className)}>{children}</h2>;
    case 'h3':
      return <h3 className={classNames(s.h3, className)}>{children}</h3>;
    default:
      return <>{children}</>;
  }
};

