import React, {ForwardedRef, forwardRef, JSX} from 'react';
import s from './Card.module.css';
import classNames from 'classnames';
import {CardProps} from '@/components/Card/Card.props';

export const Card = forwardRef(({
                                  children,
                                  color = 'white',
                                  className,
                                  ...rest
                                }: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  return <div {...rest} className={classNames(s[color], s.card, className)} ref={ref}>{children}</div>;
});


