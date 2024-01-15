import {createContext, PropsWithChildren, useState} from 'react';
import {MenuItem} from '@/interfaces/menu.interface';
import {TopLevelCategory} from '@/interfaces/page.interface';


export const AppContext = createContext<IAppContext>({
  menu: [],
  firstCategory: TopLevelCategory.Courses
});

export const AppContextProvider = ({children, menu, firstCategory}: PropsWithChildren<IAppContext>): JSX.Element => {
  const [menuState, setMenuState] = useState(menu);
  return <AppContext.Provider value={{menu: menuState, firstCategory, setMenu: setMenuState}}>
    {children}
  </AppContext.Provider>;
};

export interface IAppContext {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  setMenu?: (newMenu: MenuItem[]) => void;
}
