import React, {JSX} from 'react';
import classNames from 'classnames';
import {SortEnum, SortProps} from '@/components/Sort/Sort.props';
import {SortIcon} from '@/components';
import s from './Sort.module.css';

export const Sort = ({sort, setSort, className, ...rest}: SortProps): JSX.Element => {
  return <div {...rest} className={classNames(className, s.sort)}>
    <button
      onClick={() => setSort(SortEnum.Rating)}
      className={classNames({[s.active]: sort === SortEnum.Rating}, s.button)}>
      <SortIcon className={s.sortIcon}/>По рейтингу
    </button>
    <button
      onClick={() => setSort(SortEnum.Price)}
      className={classNames({[s.active]: sort == SortEnum.Price}, s.button)}>
      <SortIcon className={s.sortIcon}/>По цене
    </button>
  </div>;
};


