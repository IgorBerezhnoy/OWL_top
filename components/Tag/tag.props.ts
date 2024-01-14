import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  size?: 'small' | 'middle' | 'large';
  color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
  isLink?: boolean,
  href?: string
}