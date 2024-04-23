import React, {JSX, useEffect} from 'react';
import s from './Up.module.css';
import ArrowUp from '@/components/assets/icons/arrowUp';
import {useScrollY} from '@/hooks/useScrollY';
import {useAnimation} from 'framer-motion';
import {motion} from 'framer-motion';
import {ButtonIcon} from '@/components/ButtonIcon';

export const Up = (): JSX.Element => {
  const controls = useAnimation();
  const y = useScrollY();
  useEffect(() => {
    controls.start({opacity: y / document.body.scrollHeight});
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return <motion.div
    animate={controls}
    onClick={scrollToTop}
    initial={{opacity: 0}}
    className={s.up}><ButtonIcon appearance={'primary'} icon={'arrow'}/></motion.div>;
};


