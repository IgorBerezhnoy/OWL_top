import {GetStaticProps} from 'next';
import React from 'react';
import axios from 'axios';
import {withLayout} from '@/layout';
import {MenuItem} from '@/interfaces/menu.interface';
import {API} from '@/helpers/api';
import {useRouter} from 'next/router';
import Link from 'next/link';
import {SearchPage} from '@/page-components/searchPage';

function Search(): JSX.Element {
  const router = useRouter();

  const param = router.query.q;
  return (
    <SearchPage param={param as string}/>
  );
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const {data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}