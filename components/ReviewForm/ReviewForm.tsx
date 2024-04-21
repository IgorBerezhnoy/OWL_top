import React, {JSX} from 'react';
import s from './ReviewForm.module.css';
import classNames from 'classnames';
import {ReviewFormProps} from '@/components/ReviewForm/ReviewForm.props';
import {Button, Input, Rating, Textarea} from '@/components';
import CloseIcon from '@/components/assets/icons/closeIcon';

export const ReviewForm = ({className, productId, ...rest}: ReviewFormProps): JSX.Element => {
  const [rating, setRating] = React.useState(0);
  return (<>
    <div {...rest} className={classNames(s.reviewForm, className)}>
      <Input placeholder={'Имя'}/>
      <Input placeholder={'Заголовок отзыва'} className={s.titleInput}/>
      <div className={s.rating}>
        <span>Оценка:</span>
        <Rating rating={rating} setRating={setRating}/>
      </div>
      <Textarea placeholder={'Текст отзыва'} className={s.textArea}/>
      <div className={s.submit}>
        <Button appearance={'primary'}>Отправить</Button>
        <span className={s.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
      </div>
    </div>
    <div className={s.success}>
      <CloseIcon className={s.closeIcon}/>
      <div className={s.successTitle}>Ваш отзыв отправлен</div>
      <div className={s.successText}>Спасибо, ваш отзыв будет опубликован после проверки</div>
    </div>
  </>);
};


