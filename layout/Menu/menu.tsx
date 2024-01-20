import React, {JSX, useContext} from 'react';
import {AppContext} from '@/context/app.context';
import {PageItem} from '@/interfaces/menu.interface';
import s from './menu.module.css';
import classNames from 'classnames';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {firstLevelMenu} from '@/helpers';


export const Menu = (): JSX.Element => {

  const {menu, setMenu, firstCategory} = useContext(AppContext);


  const openSecondLevel = (secondCategory: string) => {
    setMenu && setMenu(menu.map(el => {
      if (el._id.secondCategory === secondCategory) {
        el.isOpened = !el.isOpened;
      }
      return el;
    }));
  };

  const router = useRouter();
  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map(el => (
          <div key={el.router}>
            <Link href={`/${el.router}`}>
              <div className={classNames(s.firstLevel, {
                [s.firstLevelActive]: el.id === firstCategory
              })}>
                {el.icon}
                <span>{el.name}</span>
              </div>
            </Link>
            {el.id == firstCategory && buildSecondLevel(el.router)}
          </div>
        ))}
      </>
    );
  };
  const buildSecondLevel = (route: string) => {
    return <div className={s.secondBlock}>
      {menu.map(el => {
        if (el.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
          el.isOpened = true;
        }

        return (<div key={el._id.secondCategory}>
          <div className={s.secondLevel}
               onClick={() => openSecondLevel(el._id.secondCategory)}>{el._id.secondCategory}</div>
          <div className={classNames(s.secondLevelBlock, {
            [s.secondLevelBlockOpen]: el.isOpened
          })}>
            {buildThirdLevel(el.pages, route)}

          </div>
        </div>);

      })}
    </div>;
  };
  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return <>{pages.map(el =>
      (<Link href={`/${route}/${el.alias}`} className={classNames(s.thirdLevel, {
        [s.thirdLevelActive]: `/${route}/${el.alias}` == router.asPath
      })}>{el.category}</Link>)
    )}</>;
  };

  return <div className={s.menu}>
    {buildFirstLevel()}
    {/*<ul>{menu.map(el => <li key={el._id.secondCategory}>{el._id.secondCategory}</li>)}</ul>*/}
  </div>;
};


