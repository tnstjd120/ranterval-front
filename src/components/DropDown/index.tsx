import { ReactNode, forwardRef } from 'react';

interface Props {
  children: ReactNode;
}

export default forwardRef<HTMLDivElement, Props>(function DropDown({ children }, ref) {
  return <div ref={ref}>{children}</div>;
});
