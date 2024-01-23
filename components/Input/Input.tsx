import React, {JSX} from 'react';
import s from './Input.module.css';
import classNames from 'classnames';
import {InputProps} from '@/components/Input/Input.props';

export const Input = ({className, ...rest}: InputProps): JSX.Element => {
  return <input {...rest} className={classNames(className, s.input)}/>;
};


