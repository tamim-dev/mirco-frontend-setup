import { SVGAttributes } from 'react';

export const SearchIcon = (props: SVGAttributes<SVGElement>) => {
  const { width = 16, height = 16, fill = 'none' } = props;
  return (
    <svg width={width} height={height} fill={fill} viewBox="0 0 16 16" {...props}>
      <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#374254" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.0001 14L11.1001 11.1" stroke="#374254" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
