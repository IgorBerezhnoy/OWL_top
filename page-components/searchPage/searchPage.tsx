import React, {JSX} from 'react';
import {Card} from '@/components';
import Link from 'next/link';
import s from './searchPage.module.css';
import Image from 'next/image';
import img from '../../public/search.jpg';

export const SearchPage = ({param}: { param: string }): JSX.Element => {
  return <Card color={'white'} className={s.wrapper}>
    <Image src={img} alt={'Сервис не доступен '} width={500} height={500}/>
    <p>Вы искали: <b>{param}</b></p>
    <p>Простите, на данный момент функция поиска временно не доступна</p>
    <Link className={s.link} href={'/'}>Вернуться на главную</Link>
  </Card>;

};


