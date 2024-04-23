import React, {JSX, KeyboardEvent, useContext} from 'react';
import {AppContext} from '@/context/app.context';
import {PageItem} from '@/interfaces/menu.interface';
import s from './menu.module.css';
import classNames from 'classnames';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {firstLevelMenu} from '@/helpers';
import {motion, useReducedMotion} from 'framer-motion';

export const Menu = (): JSX.Element => {
  const {menu, setMenu, firstCategory} = useContext(AppContext);
  const shouldReduceMotion = useReducedMotion();
  const router = useRouter();

  const variants = {
    visible: {
      marginBottom: 20,
      transition: shouldReduceMotion ? {} : {
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    },
    hidden: {marginBottom: 0}
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 29
    },
    hidden: {opacity: shouldReduceMotion ? 1 : 0, height: 0}
  };


  const openSecondLevel = (secondCategory: string) => {

    setMenu && setMenu(menu.map(el => {
      if (el._id.secondCategory === secondCategory) {
        el.isOpened = !el.isOpened;
      }
      return el;
    }));
  };
  const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
    if (key.code == 'Space' || key.code == 'Enter') {
      key.preventDefault();
      openSecondLevel(secondCategory);
    }
  };

  const buildFirstLevel = () => {
    return (
      <ul className={s.firstLevelList}>
        {firstLevelMenu.map(el => (
          <li key={el.router} aria-expanded={el.id == firstCategory}>
            <Link href={`/${el.router}`}>
              <div className={classNames(s.firstLevel, {
                [s.firstLevelActive]: el.id === firstCategory
              })}>
                {el.icon}
                <span>{el.name}</span>
              </div>
            </Link>
            {el.id == firstCategory && buildSecondLevel(el.router)}
          </li>
        ))}
      </ul>
    );
  };
  const buildSecondLevel = (route: string) => {
    return <ul className={s.secondBlock}>
      {menu.map(el => {
        if (el.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
          el.isOpened = true;
        }

        return (<li key={el._id.secondCategory}>
          <button className={s.secondLevel}
                  onKeyDown={(event: KeyboardEvent<HTMLButtonElement>) => openSecondLevelKey(event, el._id.secondCategory)}
                  onClick={() => openSecondLevel(el._id.secondCategory)}
                  aria-expanded={el.isOpened}
          >{el._id.secondCategory}</button>
          <motion.ul layout
                     variants={variants}
                     initial={el.isOpened ? 'visible' : 'hidden'}
                     animate={el.isOpened ? 'visible' : 'hidden'}
                     className={s.secondLevelBlock}>
            {buildThirdLevel(el.pages, route, el.isOpened ?? false)}

          </motion.ul>
        </li>);

      })}
    </ul>;
  };
  const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
    return <>{pages.map(el => {
        const className = classNames(s.thirdLevel, {
          [s.thirdLevelActive]: `/${route}/${el.alias}` == router.asPath
        });
        return (<motion.li key={el._id} variants={variantsChildren}>
          <Link href={`/${route}/${el.alias}`} className={className}>
            <span tabIndex={isOpened ? 0 : -1}
                  className={classNames(s.thirdLevel, {
                    [s.thirdLevelActive]: `/${route}/${el.alias}` == router.asPath
                  })}
                  aria-current={`/${route}/${el.alias}` == router.asPath ? 'page' : false}>{el.category.length > 25 ? el.category.slice(0, 20) + '...' : el.category}</span></Link>
        </motion.li>);
      }
    )}</>;
  };

  return <nav className={classNames(s.menu)} role="navigation">
    {buildFirstLevel()}
    {/*<ul>{menu.map(el => <li key={el._id.secondCategory}>{el._id.secondCategory}</li>)}</ul>*/}
  </nav>;
};


