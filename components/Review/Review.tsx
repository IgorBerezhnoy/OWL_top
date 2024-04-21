import React, {JSX} from 'react';
import s from './Review.module.css';
import classNames from 'classnames';
import {Rating, UserIcon} from '@/components';
import {ReviewProps} from '@/components/Review/Review.props';

import {format} from 'date-fns';
import {ru} from 'date-fns/locale';

export const Review = ({className, review, ...rest}: ReviewProps): JSX.Element => {
  const {name, title, description, createdAt, rating} = review;
  return (<div {...rest} className={classNames(s.review, className)}>
    <UserIcon className={s.userIcon}/>
    <div className={s.title}>
      <span className={s.name}>{name}:</span>&nbsp;&nbsp;
      <span>{title}</span>
    </div>
    <div className={s.date}>
      {format(new Date(createdAt), 'dd MMMM yyyy', {locale: ru})}
    </div>
    <div className={s.rating}>
      <Rating rating={rating}/>
    </div>
    <div className={s.description}>
      {description}
    </div>
  </div>);
};


