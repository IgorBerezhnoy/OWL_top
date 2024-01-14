import React, {JSX} from 'react';
import {FooterProps} from '@/layout/Footer/footer.props';

export const Footer = ({ ...rest}: FooterProps): JSX.Element => {
  return <p {...rest} >
    Footer
  </p>;
};


