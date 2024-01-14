import React, {JSX} from 'react';
import {RatingProps} from '@/components/Rating/RatingProps';
import s from './rating.module.css';
import classNames from 'classnames';
import {Star} from '@/components';

export const Rating = ({className, rating, setRating, isEditable = true, ...rest}: RatingProps): JSX.Element => {
  const arr = [];
  for (let i = 1; i <= 5; i++) {
    if (isEditable) {
      arr.push(<Star className={`${i <= rating ? s.field : s.noField}`} onClick={() => setRating(i)}/>);
    } else {
      arr.push(<Star className={`${1 <= rating ? s.field : s.noField}`}/>);

    }

  }

  return <div {...rest} className={classNames(className)}>
    {arr}
  </div>;
};


