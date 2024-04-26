import React, {JSX} from 'react';
import {Card, Htag} from '@/components';
import Link from 'next/link';
import s from './404.module.css';
import Image from 'next/image';
import img from '../../public/error-404.jpg';

export const Page404 = (): JSX.Element => {
  return <Card color={'white'} className={s.wrapper}>
    <Image width={726}
           height={486}
           src={img}
           alt={'Страница не найдена'}/>
    <Htag tag="h1"> Что пошло не так</Htag>
    <p>Страница не найдена</p>
    <Link href="/" className={s.link}>Вернуться на главную</Link>
  </Card>
    ;
};


