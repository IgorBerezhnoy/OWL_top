import React, {ForwardedRef, forwardRef, JSX, KeyboardEvent, useRef, useState} from 'react';
import {RatingProps} from '@/components/Rating/ratingProps';
import s from './rating.module.css';
import classNames from 'classnames';
import {Star} from '@/components';

export const Rating = forwardRef(({
                                    className,
                                    rating, errorMessage,
                                    setRating = () => {
                                    },
                                    isEditable = true,
                                    ...rest
                                  }: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [hoverRating, setHoverRating] = useState(rating);
    const refRating = useRef<SVGSVGElement[]>([]);
    const arr = [];
    console.log(refRating);

    for (let i = 1; i <= 5; i++) {
      if (isEditable) {
        const onKeyDown = (e: KeyboardEvent<SVGElement>) => {

          if (e.code === 'Space' || e.code === 'Enter') {
            e.preventDefault();
            setRating(i);
            setHoverRating(i);
          }
          if ((e.code === 'ArrowRight' || e.code === 'ArrowUp') && rating < 5) {
            setRating(rating + 1);
            setHoverRating(rating + 1);
            refRating.current[i]?.focus();
          }
          if ((e.code === 'ArrowLeft' || e.code === 'ArrowDown') && rating > 1) {
            e.preventDefault();
            setRating(rating - 1);
            setHoverRating(rating - 1);
            refRating.current[i - 2]?.focus();

          }
        };
        arr.push(<Star key={i}
                       className={classNames(s.star, i <= hoverRating ? s.field : s.noField, errorMessage && s.errorStars, s.pointer)}
                       onClick={() => setRating(i)}
                       onMouseEnter={() => setHoverRating(i)} onMouseLeave={() => setHoverRating(rating)}
                       onKeyDown={onKeyDown}
                       ref={r => {
                         if (refRating.current.length < 6) {
                           refRating.current[i - 1] = r as SVGSVGElement;
                         }
                       }}
                       tabIndex={0}/>);
      } else {
        arr.push(<Star tabIndex={-1} key={i} className={`${s.star} ${i <= rating ? s.field : s.noField}`}/>);

      }
    }
    return <div {...rest} className={classNames(className, s.ratingWrapper)} ref={ref}>
      {arr}
      {errorMessage && <span className={s.errorMessage}>{errorMessage}</span>}
    </div>;
  }
);


