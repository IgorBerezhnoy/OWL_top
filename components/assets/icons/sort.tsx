import {Ref, SVGProps, forwardRef, memo} from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg width="20" height="13" viewBox="0 0 20 13" ref={ref} {...props} fill="currentColor"
       xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="3" rx="1.5"/>
    <rect y="5" width="14" height="3" rx="1.5"/>
    <rect y="10" width="8" height="3" rx="1.5"/>
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);

export default memo(ForwardRef);