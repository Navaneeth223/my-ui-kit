import * as React from 'react';
import type { ButtonProps, ButtonSize, Ripple } from './Button.types';
import { injectStyle, clamp } from './Button.utils';
import { BUTTON_CSS } from './Button.styles';

interface UseButtonOptions {
  disabled: boolean;
  status: ButtonProps['status'];
  magnetic: boolean;
  size: ButtonSize;
}

export const useButton = ({ disabled, status, magnetic, size }: UseButtonOptions) => {
  const [ripples, setRipples] = React.useState<Ripple[]>([]);
  const [magneticStyle, setMagneticStyle] = React.useState<React.CSSProperties>({});
  const timeoutRef = React.useRef<number[]>([]);
  const isInteractive = !disabled && status !== 'loading';

  React.useEffect(() => {
    injectStyle('uik-button', BUTTON_CSS);
    return () => {
      timeoutRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
      timeoutRef.current = [];
    };
  }, []);

  const createRipple = React.useCallback(
    (x: number, y: number, size: number) => {
      const id = Date.now() + Math.random();
      setRipples((current) => [...current, { id, x, y, size }]);
      const timeoutId = window.setTimeout(() => {
        setRipples((current) => current.filter((ripple) => ripple.id !== id));
      }, 600);
      timeoutRef.current.push(timeoutId);
    },
    [],
  );

  const handleMouseDown = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!isInteractive || event.button !== 0) {
        return;
      }

      const target = event.currentTarget;
      const rect = target.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;
      createRipple(x, y, size);
    },
    [createRipple, isInteractive],
  );

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (!isInteractive) {
        return;
      }

      if (event.key === 'Enter' || event.key === ' ') {
        const target = event.currentTarget;
        const rect = target.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = rect.width / 2 - size / 2;
        const y = rect.height / 2 - size / 2;
        createRipple(x, y, size);
      }
    },
    [createRipple, isInteractive],
  );

  const handlePointerMove = React.useCallback(
    (event: React.PointerEvent<HTMLButtonElement>) => {
      if (!isInteractive || !magnetic || event.pointerType === 'touch') {
        return;
      }

      if (!['md', 'lg', 'xl'].includes(size)) {
        return;
      }

      const rect = event.currentTarget.getBoundingClientRect();
      const dx = (event.clientX - rect.left - rect.width / 2) * 0.35;
      const dy = (event.clientY - rect.top - rect.height / 2) * 0.35;
      const x = clamp(dx, -8, 8);
      const y = clamp(dy, -8, 8);

      setMagneticStyle({
        '--uik-button-magnetic-x': `${x.toFixed(2)}px`,
        '--uik-button-magnetic-y': `${y.toFixed(2)}px`,
      } as React.CSSProperties);
    },
    [disabled, isInteractive, magnetic, size],
  );

  const handlePointerLeave = React.useCallback(() => {
    if (!magnetic) {
      return;
    }

    setMagneticStyle({
      '--uik-button-magnetic-x': '0px',
      '--uik-button-magnetic-y': '0px',
      transition: 'transform var(--transition-spring)',
    } as React.CSSProperties);
  }, [magnetic]);

  return {
    ripples,
    magneticStyle,
    handleMouseDown,
    handleKeyDown,
    handlePointerMove,
    handlePointerLeave,
  };
};

export type UseButtonReturn = ReturnType<typeof useButton>;
