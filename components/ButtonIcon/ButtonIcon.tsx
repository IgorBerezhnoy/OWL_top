import React, {JSX} from 'react';
import s from './ButtonIcon.module.css';
import {ButtonIconType} from '@/components/ButtonIcon/ButtonIcon.props';
import ArrowUp from '@/components/assets/icons/arrowUp';
import {CrossIcon, LinesIcon} from '@/components';
import classNames from 'classnames';

export const ButtonIcon = ({icon, appearance, className, ...rest}: ButtonIconType): JSX.Element => {
  const iconFoo = () => {
    switch (icon) {
      case 'arrow': {
        return <ArrowUp className={s.icon}/>;
      }
      case 'cross': {
        return <CrossIcon className={s.icon}/>;
      }
      case 'lines': {
        return <LinesIcon className={s.icon}/>;
      }
      default: {
        return null;
      }
    }
  };
  return <button
    className={classNames(s.buttonIcon, className, s[appearance])} {...rest}>
    {iconFoo()}
  </button>;
};

