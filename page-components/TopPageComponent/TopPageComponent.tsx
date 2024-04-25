import React, {useEffect, useReducer} from 'react';
import {TopPageComponentProps} from '@/page-components/TopPageComponent/TopPageComponent.props';
import s from './TopPageComponent.module.css';
import {HhData, Htag, Product, Tag} from '@/components';
import {TopLevelCategory} from '@/interfaces/page.interface';
import {Advantages} from '@/components/Advantages';
import {Sort} from '@/components/Sort';
import {SortEnum} from '@/components/Sort/Sort.props';
import {SortActions, sortReducer} from '@/page-components/TopPageComponent/sort.reducer';

function TopPageComponent({page, products, firstCategory}: TopPageComponentProps) {
  const [{products: sortedProducts, sort}, dispatchSort] = useReducer(sortReducer, {products, sort: SortEnum.Rating});

  const setSort = (sort: SortEnum) => {
    dispatchSort({type: sort} as SortActions);
  };
  useEffect(() => {
    dispatchSort({type: SortEnum.Reset, initialState: products});
  }, [products]);

  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && <Tag color={'grey'} size={'middle'}
                          aria-label={`Всего ${products.length} продуктов`}>
          {products.length}</Tag>}
        <Sort sort={sort} setSort={setSort}/>
      </div>
      <div>{sortedProducts && sortedProducts.map(el => <Product layout key={el._id} product={el}/>)}</div>
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
          <div className={s.tags}>{page.tags.map(el => <Tag color={'primary'} key={el} className={s.tag}>{el}</Tag>
          )}</div>
        </div>
      </div>
    </div>
  );
}

export default TopPageComponent;