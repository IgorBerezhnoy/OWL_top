import React, {JSX} from 'react';
import {SidebarProps} from '@/layout/Sidebar/sidebar.props';

export const Sidebar = ({className, ...rest}: SidebarProps): JSX.Element => {
  return <div className={className} {...rest} >Sidebar</div>;
};


