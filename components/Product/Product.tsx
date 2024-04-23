import React, {ForwardedRef, forwardRef, Fragment, JSX, useState} from 'react';
import s from './Product.module.css';
import classNames from 'classnames';
import {ProductProps} from '@/components/Product/Product.props';
import {Arrow, Button, Card, Rating, Review, ReviewForm, Tag} from '@/components';
import Image from 'next/image';
import {conversionRub} from '@/utils/conversionRub';
import {Divider} from '@/components/Divider';
import {devOfNum} from '@/utils/devOfNum';
import {motion} from 'framer-motion';

export const Product = motion(forwardRef(({
                                            className,
                                            product,
                                            ...rest
                                          }: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
  const reviewRef = React.useRef<HTMLDivElement>(null);

  const variants = {
    visible: {
      opacity: 1,
      height: 'auto'
    },
    hidden: {
      opacity: 0,
      height: 0

    }
  };
  const scrollToReview = () => {
    setIsReviewOpened(true);
    reviewRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  return (
    <div className={className}{...rest} ref={ref}>
      <Card className={classNames(s.product)}>
        <div className={s.logo}>
          <Image src={product.image} alt={product.title} width={70} height={70}/></div>
        <div className={s.title}>{product.title}</div>
        <div className={s.price}>
          {conversionRub(product.price)}
          {product.oldPrice &&
            <Tag className={s.oldPrice} color={'green'}>{conversionRub(product.price - product.oldPrice)}</Tag>}
        </div>
        <div className={s.credit}>{conversionRub(product.credit)}<span>/мес</span></div>
        <div className={s.rating}><Rating rating={product.reviewAvg ?? product.initialRating}/></div>
        <div className={s.tags}>{product.categories.map(el => <Tag className={s.tab} key={el}
                                                                   color={'ghost'}>{el}</Tag>)}</div>
        <div className={s.priceTitle}>цена</div>
        <div className={s.creditTitle}>кредит</div>
        <div
          className={s.rateTitle}>
          <a href={'#ref'} className={s.rewScroll}
             onClick={scrollToReview}> {product.reviewCount} {devOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</a>
        </div>
        <Divider className={s.hr}/>
        <div className={s.description}>{product.description}</div>
        <div className={s.feature}>
          {product.characteristics.map(el => (
            <div key={el.name} className={s.characteristics}>
              <span className={s.characteristicName}>{el.name}</span>
              <span className={s.dots}></span>
              <span className={s.characteristicValue}>{el.value}</span>
            </div>
          ))}
        </div>
        <div className={s.advBlock}>
          {product.advantages && <div className={s.advantages}>
            <div className={s.advantagesTitle}>Преимущества</div>
            {product.advantages}
          </div>}
          {product.disadvantages && <div className={s.disadvantages}>
            <div className={s.divadvantagesTitle}>Недостатки</div>

            {product.disadvantages}
          </div>}
        </div>
        <Divider className={classNames(s.hr, s.hr2)}/>
        <div className={s.actions}>
          <Button appearance={'primary'}>Узнать подробнее</Button>
          <Button appearance={'ghost'} className={s.reviewBottom
          } onClick={() => setIsReviewOpened(!isReviewOpened)}>Читать
            отзывы <Arrow className={classNames(s.arrow, {[s.down]: isReviewOpened})}/></Button>
        </div>
      </Card>
      {<motion.div
        animate={isReviewOpened ? 'visible' : 'hidden'}
        variants={variants}
        initial={'hidden'}
      ><Card color={'blue'}
             className={classNames(s.reviews)}
             ref={reviewRef}>
        {isReviewOpened && <>{product.reviews.map(el => <Fragment key={el._id}>
          <Review review={el}/>
          <Divider/>
        </Fragment>)}</>}
        <ReviewForm productId={product._id}/>
      </Card></motion.div>}
    </div>
  )
    ;
}));


