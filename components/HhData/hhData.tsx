import React, {JSX} from 'react';
import s from './hhData.module.css';
import {HhDataProps} from '@/components/HhData/hhData.props';
import {Card} from '@/components';

export const HhData = ({count}: HhDataProps): JSX.Element => {
  return <Card className={s.count}>
    <div className={s.title}>Всего вакансий</div>
    <div className={s.count}>{count}</div>
  </Card>;
};


