import React, {JSX} from 'react';
import s from './Product.module.css';
import classNames from 'classnames';
import {ProductProps} from '@/components/Product/Product.props';
import {Arrow, Button, Card, Rating, Tag} from '@/components';
import Image from 'next/image';

export const Product = ({className, product}: ProductProps): JSX.Element => {
  return (
    <Card className={classNames(s.product, className)}>
      <div className={s.logo}>
        <Image src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} width={70} height={70}/></div>
      <div className={s.title}>{product.title}</div>
      <div className={s.price}>{product.price}</div>
      <div className={s.credit}>{product.credit}</div>
      <div className={s.rating}><Rating rating={product.reviewAvg ?? product.initialRating}/></div>
      <div className={s.tags}>{product.categories.map(el => <Tag key={el} color={'ghost'}>{el}</Tag>)}</div>
      <div className={s.priceTitle}>цена</div>
      <div className={s.creditTitle}>кредит</div>
      <div className={s.rateTitle}>{product.reviewCount}отзывов</div>
      <hr className={s.hr}/>
      <div className={s.description}>{product.description}</div>
      <div className={s.feature}>фичи</div>
      <div className={s.advBlock}>
        <div className={s.advantages}>
          <div>Преимущества</div>
          {product.advantages}
        </div>
        <div className={s.disadvantages}>
          <div>Недостатки</div>
          {product.disadvantages}
        </div>
      </div>
      <hr className={s.hr}/>
      <div className={s.actions}>
        <Button appearance={'primary'}>Узнать подробнее</Button>
        <Button appearance={'ghost'}>Читать отзывы<Arrow/></Button>
      </div>
    </Card>
  );
};


