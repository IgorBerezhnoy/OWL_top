import React, {ForwardedRef, forwardRef, JSX} from 'react';
import s from './Textarea.module.css';
import classNames from 'classnames';
import {TextareaProps} from '@/components/Textarea/Textarea.props';

export const Textarea = forwardRef(({
                                      className,
                                      ...rest
                                    }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
  return <textarea{...rest} className={classNames(className, s.textarea)} ref={ref}/>;
});


