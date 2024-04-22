import React, {ForwardedRef, forwardRef, JSX} from 'react';
import s from './Input.module.css';
import classNames from 'classnames';
import {InputProps} from '@/components/Input/Input.props';

export const Input = forwardRef(({
                                   className, errorMessage,
                                   ...rest
                                 }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  console.log(errorMessage);
  return <div className={s.inputWrapper}>
    <input className={classNames(className, s.input, errorMessage && s.error)} ref={ref}  {...rest} />
    {errorMessage && <span className={s.errorMessage}>{errorMessage}</span>}
  </div>;
});


