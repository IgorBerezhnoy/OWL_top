import React, {JSX, useState, KeyboardEvent} from 'react';
import s from './Search.module.css';
import classNames from 'classnames';
import {SearchProps} from '@/components/Search/Search.props';
import {Button, Input, SearchIcon} from '@/components';
import {useRouter} from 'next/router';

export const Search = ({className, ...rest}: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();
  const goToSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        q: search
      }
    });
  };
  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      goToSearch();
    }
  };
  return <div {...rest} className={classNames(s.search, className)}>
    <Input
      onKeyDown={onKeyDownHandler}
      value={search}
      aria-label={'Поиск'}
      onChange={(e) => setSearch(e.target.value)}
      placeholder={'Поиск...'} className={s.input}/>
    <Button appearance={'primary'} className={s.button}
            aria-label={'Искать по сайту'}
            onClick={() => goToSearch()}><SearchIcon/></Button>
  </div>;
};


