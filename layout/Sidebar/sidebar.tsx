import React, {JSX} from 'react';
import {SidebarProps} from '@/layout/Sidebar/sidebar.props';
import {Menu} from '@/layout/Menu';

export const Sidebar = ({className, ...rest}: SidebarProps): JSX.Element => {
  return <div className={className} {...rest} ><Menu/></div>;
};


