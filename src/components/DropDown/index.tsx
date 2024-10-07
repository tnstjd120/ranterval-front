'use client';

import { AnimatePresence } from 'framer-motion';
import { ReactNode, forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import useScrollLock from '@/hooks/useScrollLock';
import useDebouncedPosition from '@/hooks/useDebouncedPosition';
import { createPortal } from 'react-dom';
import * as S from './style';

interface Props {
  anchorElement: HTMLElement | null;
  onClose: () => void;
  children: ReactNode;
}

export default forwardRef<HTMLDivElement, Props>(function DropDown(
  { anchorElement, onClose, children },
  ref,
) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { handleLock, handleUnLock } = useScrollLock();
  const position = useDebouncedPosition(anchorElement);

  useImperativeHandle(ref, () => dropdownRef.current as HTMLDivElement);

  const closeDropdown = () => {
    onClose();
    handleUnLock();
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    if (!anchorElement) {
      handleUnLock();
      return undefined;
    }

    document.addEventListener('mousedown', handleClickOutside);
    handleLock();

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [anchorElement]);

  const animationProps = {
    initial: { opacity: 0, scale: 0.95, y: -10 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: -10 },
    transition: { duration: 0.2 },
  };

  if (!anchorElement) return null;

  return createPortal(
    <S.TransparentBackdrop>
      <AnimatePresence>
        <S.Content ref={dropdownRef} style={position} {...animationProps}>
          {children}
        </S.Content>
      </AnimatePresence>
    </S.TransparentBackdrop>,
    document.body,
  );
});
