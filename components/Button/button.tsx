import React, {JSX} from 'react';
import {ButtonType} from '@/components/Button/button.props';
import s from './button.module.css';
import classNames from 'classnames';
import {Arrow} from '@/components/assets/icons';
import {motion} from 'framer-motion';

export const Button = ({arrow = 'none', children, appearance, className, ...rest}: ButtonType): JSX.Element => {

  return <motion.button {...rest}
                        whileHover={{scale: 1.05}}
                        className={classNames(s.button, className, {
                          [s.primary]: appearance == 'primary',
                          [s.ghost]: appearance == 'ghost'
                        })}>{children}{arrow !== 'none' &&
    <span className={classNames(s.arrow, {[s.down]: arrow === 'down'})}>

     <Arrow/>

    </span>}</motion.button>;
};

