'use client';

import useScrollLock from '@/hooks/useScrollLock';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode, forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) onClose();
    };

    if (anchorElement) {
      document.addEventListener('mousedown', handleClickOutside);
      handleLock();
    } else {
      handleUnLock();
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      handleUnLock();
    };
  }, [anchorElement, onClose]);

  useImperativeHandle(ref, () => dropdownRef.current as HTMLDivElement);

  if (!anchorElement) return null;

  const getPosition = () => {
    const rect = anchorElement.getBoundingClientRect();
    return {
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
    };
  };

  return createPortal(
    <S.TransparentBackdrop>
      <AnimatePresence>
        <motion.div
          ref={dropdownRef}
          style={{ position: 'fixed', top: getPosition().top, left: getPosition().left }}
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </S.TransparentBackdrop>,
    document.body,
  );
});
