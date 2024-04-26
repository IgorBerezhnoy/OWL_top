import {JSX, useEffect} from 'react';
import {withLayout} from '@/layout';
import {GetStaticProps} from 'next';
import axios from 'axios';
import {MenuItem} from '@/interfaces/menu.interface';
import {API} from '@/helpers/api';
import {useRouter} from 'next/router';
import {Loader} from '@/components';


export default withLayout(function Home({menu}: HomeProps): JSX.Element {
  const {push} = useRouter();

  useEffect(() => {
    push('courses/' + menu[0].pages[0].alias);
  }, [menu, push]);
  return (
    <>
      <Loader/>
    </>
  );
});

export const getStaticProps: GetStaticProps = async () => {
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
  menu: MenuItem[],
  firstCategory: number
}