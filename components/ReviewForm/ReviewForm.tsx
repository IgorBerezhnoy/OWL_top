import React, {JSX, useState} from 'react';
import s from './ReviewForm.module.css';
import classNames from 'classnames';
import {ReviewFormProps} from '@/components/ReviewForm/ReviewForm.props';
import {Button, Input, Rating, Textarea} from '@/components';
import CloseIcon from '@/components/assets/icons/closeIcon';
import {Controller, useForm} from 'react-hook-form';
import {ReviewFormInterface, ReviewSendResponse} from '@/components/ReviewForm/ReviewForm.inteface';
import {API} from '@/helpers/api';
import axios from 'axios';

export const ReviewForm = ({className, productId, ...rest}: ReviewFormProps): JSX.Element => {
  const {register, reset, clearErrors, handleSubmit, control, formState: {errors}} = useForm<ReviewFormInterface>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const options = {
    required: {value: true, message: 'Заполните поле'},
    minLength: {value: 3, message: 'Минимальная длина 3'}
  };
  const onSubmit = async (formData: ReviewFormInterface) => {

    try {
      if (error) setError('');
      if (isSuccess) setIsSuccess(false);

      const {data} = await axios.post<ReviewSendResponse>(API.review.createDemo, {...formData, productId});
      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setError('Что-то пошло не так');
      }
    } catch (e) {
      const err = e as Error;
      setError(err.message || 'Что-то пошло не так');
    }
  };
  return (<form onSubmit={handleSubmit(onSubmit)}>
    <div {...rest} className={classNames(s.reviewForm, className)}>
      <Input {...register('name', options)} placeholder={'Имя'}
             aria-invalid={!!errors?.name}
             errorMessage={errors?.name?.message}/>
      <Input placeholder={'Заголовок отзыва'} className={s.titleInput}
             errorMessage={errors?.title?.message}
             aria-invalid={!!errors?.title}
             {...register('title', options)}/>
      <div className={s.rating}>
        <span>Оценка:</span>
        <Controller
          render={(field) => (
            <Rating ref={field.field.ref}
                    aria-invalid={!!errors?.rating}
                    rating={field.field.value} isEditable
                    errorMessage={errors?.rating?.message}
                    setRating={field.field.onChange}/>)}
          name={'rating'}
          control={control}
          rules={{required: {value: true, message: 'Поставьте оценку'}}}/>

      </div>
      <Textarea placeholder={'Текст отзыва'} className={s.textArea}
                aria-invalid={!!errors?.description}
                aria-label={'Текст отзыва. Напишите свой отзыв'}
                {...register('description', options)}
                errorMessage={errors?.description?.message}/>
      <div className={s.submit}>
        <Button appearance={'primary'}
                onClick={() => clearErrors(['name', 'title', 'rating', 'description'])}>Отправить</Button>
        <span className={s.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
      </div>
    </div>
    {isSuccess && <div role={'alert'} className={s.success}>
      <button aria-label={'Закрыть'} className={s.closeButton} onClick={() => setIsSuccess(false)}><CloseIcon
        className={s.closeIcon}/>
      </button>
      <div className={s.successTitle}>Ваш отзыв отправлен</div>
      <div className={s.successText}>Спасибо, ваш отзыв будет опубликован после проверки</div>
    </div>}
    {error && <div role={'alert'} className={s.error}>
      <button aria-label={'Закрыть'} className={s.closeButton} onClick={() => setError('')}><CloseIcon
        className={classNames(s.closeIcon, s.errorCloseIcon)}/></button>
      <div className={s.successTitle}>Произошла ошибка</div>
      <div className={s.successText}>{error}</div>
    </div>
    }
  </form>);
};


