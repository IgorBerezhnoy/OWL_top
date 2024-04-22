import React, {JSX} from 'react';
import s from './ReviewForm.module.css';
import classNames from 'classnames';
import {ReviewFormProps} from '@/components/ReviewForm/ReviewForm.props';
import {Button, Input, Rating, Textarea} from '@/components';
import CloseIcon from '@/components/assets/icons/closeIcon';
import {Controller, useForm} from 'react-hook-form';
import {ReviewFormInterface} from '@/components/ReviewForm/ReviewForm.inteface';

export const ReviewForm = ({className, productId, ...rest}: ReviewFormProps): JSX.Element => {
  const {register, handleSubmit, control} = useForm<ReviewFormInterface>();
  const onSubmit = (data: ReviewFormInterface) => {
    console.log(data);
  };

  return (<form onSubmit={handleSubmit(onSubmit)}>
    <div {...rest} className={classNames(s.reviewForm, className)}>
      <Input {...register('name')} placeholder={'Имя'}/>
      <Input placeholder={'Заголовок отзыва'} className={s.titleInput} {...register('title')}/>
      <div className={s.rating}>
        <span>Оценка:</span>
        <Controller
          render={(field) => <Rating ref={field.field.ref} rating={field.field.value} isEditable
                                     setRating={field.field.onChange}/>}
          name={'rating'}
          control={control}/>

      </div>
      <Textarea placeholder={'Текст отзыва'} className={s.textArea} {...register('description')}/>
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
  </form>);
};


