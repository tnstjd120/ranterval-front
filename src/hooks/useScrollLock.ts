import { useRef } from 'react';

const useScrollLock = () => {
  const scrollPositionRef = useRef(0);

  const handleLock = () => {
    scrollPositionRef.current = window.scrollY;

    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    const scrollBarHeight = window.innerHeight - document.documentElement.clientHeight;

    document.body.style.position = 'fixed';
    document.body.style.overflowY = scrollBarWidth ? 'scroll' : 'hidden';
    document.body.style.overflowX = scrollBarHeight ? 'scroll' : 'hidden';
  };

  const handleUnLock = () => {
    document.body.style.removeProperty('position');
    document.body.style.removeProperty('overflow');
    window.scrollTo(0, scrollPositionRef.current);
  };

  return {
    handleLock,
    handleUnLock,
  };
};

export default useScrollLock;
