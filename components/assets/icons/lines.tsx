import {Ref, SVGProps, forwardRef, memo} from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg width="20" height="17" viewBox="0 0 20 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
       ref={ref} {...props}>
    <rect width="20" height="3" rx="1.5"/>
    <rect y="7" width="20" height="3" rx="1.5"/>
    <rect y="14" width="20" height="3" rx="1.5"/>
  </svg>

);
const ForwardRef = forwardRef(SvgComponent);

export default memo(ForwardRef);