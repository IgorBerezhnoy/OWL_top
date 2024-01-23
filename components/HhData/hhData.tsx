import React, {JSX} from 'react';
import s from './hhData.module.css';
import {HhDataProps} from '@/components/HhData/hhData.props';
import {Card} from '@/components';
import HhStar from '@/components/assets/icons/hhStar';

export const HhData = ({count, juniorSalary}: HhDataProps): JSX.Element => {

  return <div className={s.hh}>
    <Card className={s.count}>
      <div className={s.title}>Всего вакансий</div>
      <div className={s.countValue}>{count}</div>
    </Card>
    <Card className={s.salary}>
      <SalaryInfo title={'Начальный'} salaryValue={juniorSalary} rating={1}/>
      <SalaryInfo title={'Средний'} salaryValue={juniorSalary} rating={2}/>
      <SalaryInfo title={'Профессионал'} salaryValue={juniorSalary} rating={3}/>
    </Card>
  </div>;
};


const SalaryInfo = ({salaryValue, rating, title}: Props) => {
  return <div className={s.salaryCard}>
    <div className={s.title}>{title}</div>
    <div className={s.salaryValue}>{salaryValue + ' ₽'}</div>
    <div className={s.rate}>
      <HhStar fill={rating >= 1 ? '#FC836D' : '#BBBBBB'}/>
      <HhStar fill={rating >= 2 ? '#FC836D' : '#BBBBBB'}/>
      <HhStar fill={rating >= 3 ? '#FC836D' : '#BBBBBB'}/>
    </div>
  </div>;
};

interface Props {
  title: string;
  salaryValue: number;
  rating: number;
}