import React, {JSX} from 'react';
import {FooterProps} from '@/layout/Footer/footer.props';
import classNames from 'classnames';
import s from './footer.module.css';

export const Footer = ({className, ...rest}: FooterProps): JSX.Element => {
  return <footer className={classNames(className, s.wrapper)} {...rest} >
    <div className={s.owlTop}>OwlTop © 2020 - {new Date().getFullYear()} Все права защищены</div>
    <div className={s.right}>
      <a href={''} target={'_blank'} className={s.mr_40}>Пользовательское соглашение</a>
      <a href={''} target={'_blank'}>Политика конфиденциальности</a>
    </div>

  </footer>;
};


