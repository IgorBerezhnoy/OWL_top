import React, {JSX} from 'react';
import s from './ReviewForm.module.css';
import classNames from 'classnames';
import {ReviewFormProps} from '@/components/ReviewForm/ReviewForm.props';
import {Button, Input, Rating, Textarea} from '@/components';
import CloseIcon from '@/components/assets/icons/closeIcon';
import {Controller, useForm} from 'react-hook-form';
import {ReviewFormInterface} from '@/components/ReviewForm/ReviewForm.inteface';

export const ReviewForm = ({className, productId, ...rest}: ReviewFormProps): JSX.Element => {
  const {register, handleSubmit, control, formState: {errors}} = useForm<ReviewFormInterface>();
  const options = {
    required: {value: true, message: 'Заполните поле'},
    minLength: {value: 3, message: 'Минимальная длина 3'}
  };
  const onSubmit = (data: ReviewFormInterface) => {
    console.log(data);
  };
  console.log(errors);
  return (<form onSubmit={handleSubmit(onSubmit)}>
    <div {...rest} className={classNames(s.reviewForm, className)}>
      <Input {...register('name', options)} placeholder={'Имя'} errorMessage={errors?.name?.message}/>
      <Input placeholder={'Заголовок отзыва'} className={s.titleInput}
             errorMessage={errors?.title?.message} {...register('title', options)}/>
      <div className={s.rating}>
        <span>Оценка:</span>
        <Controller
          render={(field) => <Rating ref={field.field.ref} rating={field.field.value} isEditable
                                     errorMessage={errors?.rating?.message}
                                     setRating={field.field.onChange}/>}
          name={'rating'}
          control={control}
          rules={{required: {value: true, message: 'Поставьте оценку'}}}/>

      </div>
      <Textarea placeholder={'Текст отзыва'} className={s.textArea} {...register('description', options)}
                errorMessage={errors?.description?.message}/>
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


