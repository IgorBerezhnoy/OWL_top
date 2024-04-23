import {TopLevelCategory, TopPageModel} from '@/interfaces/page.interface';
import {ProductModel} from '@/interfaces/product.interface';
import {MenuItem} from '@/interfaces/menu.interface';

export interface TopPageProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}

export interface TopPageComponentProps {
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}