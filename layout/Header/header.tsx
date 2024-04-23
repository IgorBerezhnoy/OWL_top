import React, {JSX, useEffect} from 'react';
import s from './header.module.css';
import classNames from 'classnames';
import {HeaderProps} from '@/layout/Header/header.props';
import {Logo} from '@/components';
import {ButtonIcon} from '@/components/ButtonIcon';
import {motion, useReducedMotion} from 'framer-motion';
import {Sidebar} from '@/layout/Sidebar';
import {useRouter} from 'next/router';

export const Header = ({className, ...rest}: HeaderProps): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false);

  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  useEffect(() => {
    setIsOpen(false);
  }, [router]);
  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20
      }
    },
    closed: {
      opacity: shouldReduceMotion ? 1 : 0,
      x: '100%',
    }
  };

  return (
    <header {...rest} className={classNames(className, s.header,)}>
      <Logo/>
      <ButtonIcon onClick={() => setIsOpen(true)} appearance={'white'} icon={'menu'}/>
      <motion.div className={s.motionMenu}
                  variants={variants}
                  initial={'closed'}
                  animate={isOpen ? 'opened' : 'closed'}
      >
        <Sidebar/>
        <ButtonIcon className={s.close} onClick={() => setIsOpen(false)} appearance={'white'} icon={'cross'}/>
      </motion.div>
    </header>);
};


