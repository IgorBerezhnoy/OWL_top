import {ReactNode} from 'react';

export type HtagProps  = {
  children: ReactNode;
  tag: 'h1' | 'h2' | 'h3'
};