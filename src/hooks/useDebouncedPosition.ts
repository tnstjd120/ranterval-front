import { useEffect, useState } from 'react';

const useDebouncedPosition = (anchorElement: HTMLElement | null, delay?: number) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (!anchorElement) return undefined;

    let timeoutId: NodeJS.Timeout;

    const updatePosition = () => {
      const rect = anchorElement.getBoundingClientRect();
      setPosition({
        top: rect.bottom,
        left: rect.left,
      });
    };

    const handleDebouncedUpdate = () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => updatePosition(), delay ?? 100);
    };

    window.addEventListener('resize', handleDebouncedUpdate);

    updatePosition();

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleDebouncedUpdate);
    };
  }, [anchorElement, delay]);

  return position;
};

export default useDebouncedPosition;
