import React, {JSX} from 'react';
import {SidebarProps} from '@/layout/Sidebar/sidebar.props';

export const Sidebar = ({...rest}: SidebarProps): JSX.Element => {
  return <div {...rest} >Sidebar</div>;
};


