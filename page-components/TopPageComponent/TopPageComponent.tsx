import React from 'react';
import {TopPageComponentProps} from '@/page-components/TopPageComponent/TopPageComponent.props';
import s from './TopPageComponent.module.css';
import {HhData, Htag, Tag} from '@/components';

function TopPageComponent({page, products, firstCategory}: TopPageComponentProps) {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && <Tag color={'grey'} size={'middle'}>{products.length}</Tag>}
        <span>Сортировка</span>
      </div>
      <div>{products && products.map(el => <div key={el._id}>{el.title}</div>)}</div>
      <div className={s.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        <Tag color={'red'} size={'middle'}>hh.ru</Tag>
        <div className={s.hh}>
          <HhData {...page.hh!}/>
        </div>
      </div>
    </div>
  );
}

export default TopPageComponent;