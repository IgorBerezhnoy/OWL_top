import React, {JSX} from 'react';
import s from './Textarea.module.css';
import classNames from 'classnames';
import {TextareaProps} from '@/components/Textarea/Textarea.props';

export const Textarea = ({className, ...rest}: TextareaProps): JSX.Element => {
  return <textarea {...rest} className={classNames(className, s.textarea)}/>;
};


