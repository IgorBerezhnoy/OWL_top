import {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';

export interface ButtonIconType extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  appearance: 'primary' | 'white';
  icon: 'arrow' | 'cross' | 'menu';
}