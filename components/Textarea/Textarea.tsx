import React, {ForwardedRef, forwardRef, JSX} from 'react';
import s from './Textarea.module.css';
import classNames from 'classnames';
import {TextareaProps} from '@/components/Textarea/Textarea.props';

export const Textarea = forwardRef(({
                                      className,
                                      errorMessage,
                                      ...rest
                                    }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
  return <div className={classNames(s.textareaWrapper, className)}>
    <textarea{...rest} className={classNames(s.textarea, errorMessage && s.error)} ref={ref}/>
    {errorMessage && <span role={'alert'} className={s.errorMessage}>{errorMessage}</span>}
  </div>;
});


