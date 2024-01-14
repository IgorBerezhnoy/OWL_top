import React, {JSX} from 'react';
import s from './tag.module.css';
import classNames from 'classnames';
import {TagProps} from '@/components/Tag/tag.props';

export const Tag = ({
                      children,
                      className,
                      color = 'ghost',
                      isLink = false,
                      href,
                      size = 'middle',
                      ...rest
                    }: TagProps): JSX.Element => {
  return <p {...rest} className={classNames(s.tag, s[size], s[color], className)}>{isLink ?
    <a href={href}>{children}</a> :
    <span>{children}</span>
  }</p>;
};


