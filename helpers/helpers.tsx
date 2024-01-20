import {TopLevelCategory} from '@/interfaces/page.interface';
import {FirstLevelMenuItem} from '@/interfaces/menu.interface';
import {Book, Box, Cloud, Courses} from '@/components';

export const firstLevelMenu: FirstLevelMenuItem[] = [
  {router: 'courses', name: 'Курсы', icon: <Courses/>, id: TopLevelCategory.Courses},
  {router: 'services', name: 'Сервисы', icon: <Cloud/>, id: TopLevelCategory.Services},
  {router: 'books', name: 'Книги', icon: <Book/>, id: TopLevelCategory.Books},
  {router: 'products', name: 'Товары', icon: <Box/>, id: TopLevelCategory.Products}
];