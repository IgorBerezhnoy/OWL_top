import React, {JSX, useContext} from 'react';
import {AppContext} from '@/context/app.context';
import {FirstLevelMenuItem, PageItem} from '@/interfaces/menu.interface';
import {Book, Box, Courses, Cloud} from '@/components';
import {TopLevelCategory} from '@/interfaces/page.interface';
import s from './menu.module.css';
import classNames from 'classnames';

const firstLevelMenu: FirstLevelMenuItem[] = [
  {router: 'courses', name: 'Курсы', icon: <Courses/>, id: TopLevelCategory.Courses},
  {router: 'services', name: 'Сервисы', icon: <Cloud/>, id: TopLevelCategory.Services},
  {router: 'books', name: 'Книги', icon: <Book/>, id: TopLevelCategory.Books},
  {router: 'products', name: 'Товары', icon: <Box/>, id: TopLevelCategory.Products}
];

export const Menu = (): JSX.Element => {

  const {menu, setMenu, firstCategory} = useContext(AppContext);
  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map(el => (
          <div key={el.router}>
            <a href={`/${el.router}`}>
              <div className={classNames(s.firstLevel, {
                [s.firstLevelActive]: el.id == firstCategory
              })}>
                {el.icon}
                <span>{el.name}</span>
              </div>
            </a>
            {el.id == firstCategory && buildSecondLevel(el.router)}
          </div>
        ))}
      </>
    );
  };
  const buildSecondLevel = (route: string) => {
    return <div>
      {menu.map(el => <div key={el._id.secondCategory}>
        <div className={s.secondLevel}>{el._id.secondCategory}</div>
        <div className={classNames(s.secondLevelBlock, {
          [s.secondLevelBlockOpen]: el.isOpened
        })}>
          {buildThirdLevel(el.pages, route)}

        </div>
      </div>)}
    </div>;
  };
  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return <>{pages.map(el =>
      (<a href={`/${route}/${el.alias}`} className={classNames(s.thirdLevel, {
        [s.thirdLevelActive]: true
      })}>{el.category}</a>)
    )}</>;
  };

  return <div className={s.menu}>
    {buildFirstLevel()}
    {/*<ul>{menu.map(el => <li key={el._id.secondCategory}>{el._id.secondCategory}</li>)}</ul>*/}
  </div>;
};


