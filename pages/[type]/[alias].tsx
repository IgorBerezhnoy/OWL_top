import {JSX} from 'react';
import {withLayout} from '@/layout';
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from 'next';
import axios from 'axios';
import {MenuItem} from '@/interfaces/menu.interface';
import {TopPageModel} from '@/interfaces/page.interface';
import {ParsedUrlQuery} from 'node:querystring';
import {ProductModel} from '@/interfaces/product.interface';
import {firstLevelMenu} from '@/helpers';
import {TopPageComponentProps} from '@/page-components/TopPageComponent';
import TopPageComponent from '@/page-components/TopPageComponent/TopPageComponent';


export default withLayout(function TopPage({menu, firstCategory, page, products}: TopPageComponentProps): JSX.Element {
  console.log(menu, firstCategory, page, products);
  return (
    <>
      <TopPageComponent firstCategory={firstCategory} page={page} products={products}/>
    </>
  );
});

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];
  for (const m of firstLevelMenu) {
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
      firstCategory: m.id
    });
    paths = paths.concat(menu.flatMap(s => s.pages.map(p => '/courses/' + p.alias)));
  }

  return {
    paths,
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true
    };
  }
  const firstCategoryItem = firstLevelMenu.find(el => el.router === params.type);

  if (!firstCategoryItem) {
    return {notFound: true};
  }

  try {
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
      firstCategory: firstCategoryItem.id
    });
    if (menu.length === 0) {
      return {notFound: true};
    }
    const {data: page} = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias,);
    const {data: products} = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
      category: page.category,
      limit: 10
    });
    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        products
      }
    };
  } catch (e) {
    return {notFound: true};
  }
};

