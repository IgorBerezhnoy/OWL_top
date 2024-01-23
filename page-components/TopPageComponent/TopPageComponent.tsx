import React, {useReducer} from 'react';
import {TopPageComponentProps} from '@/page-components/TopPageComponent/TopPageComponent.props';
import s from './TopPageComponent.module.css';
import {HhData, Htag, Tag} from '@/components';
import {TopLevelCategory} from '@/interfaces/page.interface';
import {Advantages} from '@/components/Advantages';
import {Sort} from '@/components/Sort';
import {SortEnum} from '@/components/Sort/Sort.props';
import {sortReducer} from '@/page-components/TopPageComponent/sort.reducer';

function TopPageComponent({page, products, firstCategory}: TopPageComponentProps) {
  const [{products: sortedProducts,sort}, dispatchSort] = useReducer(sortReducer, {products, sort: SortEnum.Rating});
  const setSort = (sort: SortEnum) => {
    dispatchSort({type: sort});
  };
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && <Tag color={'grey'} size={'middle'}>{products.length}</Tag>}
        <Sort sort={sort} setSort={setSort}/>
      </div>
      <div>{sortedProducts && sortedProducts.map(el => <div key={el._id}>{el.title}</div>)}</div>
      <div className={s.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        <Tag color={'red'} size={'middle'}>hh.ru</Tag>
        <div className={s.hh}>
          {firstCategory === TopLevelCategory.Courses && page.hh && <HhData {...page.hh!}/>}
          {page.advantages && page.advantages.length > 0 && <>
            <Htag tag={'h2'} className={s.advantagesTitle}>Преимущества</Htag>
            <Advantages advantages={page.advantages}/>
          </>}
          {page.seoText && <div className={s.seoText} dangerouslySetInnerHTML={{__html: page.seoText}}/>}
          <Htag tag="h2" className={s.skillsTitle}>Получаемые навыки</Htag>
          <div className={s.tags}>{page.tags.map(el => <Tag color={'primary'} className={s.tag}>{el}</Tag>
          )}</div>
        </div>
      </div>
    </div>
  );
}

export default TopPageComponent;