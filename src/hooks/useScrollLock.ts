import { useEffect } from 'react';

const useScrollLock = () => {
  let originalOverflow = '';
  let originalPaddingRight = '';

  const handleLock = () => {
    originalOverflow = document.documentElement.style.overflow;
    originalPaddingRight = document.body.style.paddingRight;

    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      document.body.style.boxSizing = 'unset';
    }

    document.documentElement.style.overflow = 'hidden';
  };

  const handleUnLock = () => {
    document.documentElement.style.overflow = originalOverflow || 'unset';
    document.body.style.paddingRight = originalPaddingRight || '0px';
    document.body.style.boxSizing = 'border-box';
  };

  useEffect(() => {
    return () => handleUnLock();
  }, []);

  return {
    handleLock,
    handleUnLock,
  };
};

export default useScrollLock;
