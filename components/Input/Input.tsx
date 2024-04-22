import React, {ForwardedRef, forwardRef, JSX} from 'react';
import s from './Input.module.css';
import classNames from 'classnames';
import {InputProps} from '@/components/Input/Input.props';

export const Input = forwardRef(({
                                   className,
                                   ...rest
                                 }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  return <input className={classNames(className, s.input)} ref={ref}  {...rest} />;
});


