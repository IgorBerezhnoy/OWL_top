import React, {JSX} from 'react';
import s from './Advantages.module.css';
import {AdvantagesProps} from '@/components/Advantages/Advantages.props';
import {Check, Htag} from '@/components';

export const Advantages = ({advantages}: AdvantagesProps): JSX.Element => {
  return <div>
    {advantages.map(el => (
      <div key={el._id} className={s.advantage}>
        <Check/>
        <Htag tag={'h3'}>{el.title}</Htag>
        <div className={s.line}></div>
        <div className={s.desckr}>{el.description}</div>
      </div>
    ))}
  </div>;
};


