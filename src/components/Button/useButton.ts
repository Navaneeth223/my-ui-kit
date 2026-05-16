import * as React from 'react';
import type { ButtonEffect, ButtonProps, Ripple } from './Button.types';
import { hasEffect, injectButtonStyles, playButtonSound } from './Button.utils';

type UseButtonOptions = Pick<ButtonProps, 'disabled' | 'loading' | 'effects' | 'magneticStrength' | 'sound' | 'onClick'>;

export const useButton = ({
  disabled,
  loading,
  effects,
  magneticStrength = 0.22,
  sound = false,
  onClick,
}: UseButtonOptions) => {
  const [ripples, setRipples] = React.useState<Ripple[]>([]);
  const [magneticStyle, setMagneticStyle] = React.useState<React.CSSProperties>({});
  const rippleId = React.useRef(0);
  const isInteractive = !disabled && !loading;

  React.useEffect(() => {
    injectButtonStyles();
  }, []);

  const createRipple = React.useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const nextRipple: Ripple = {
      id: rippleId.current,
      x: event.clientX - rect.left - size / 2,
      y: event.clientY - rect.top - size / 2,
      size,
    };

    rippleId.current += 1;
    setRipples((current) => [...current, nextRipple]);
    window.setTimeout(() => {
      setRipples((current) => current.filter((ripple) => ripple.id !== nextRipple.id));
    }, 650);
  }, []);

  const handleClick = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!isInteractive) {
        event.preventDefault();
        return;
      }

      if (hasEffect(effects, 'ripple')) {
        createRipple(event);
      }

      if (sound) {
        playButtonSound();
      }

      onClick?.(event);
    },
    [createRipple, effects, isInteractive, onClick, sound],
  );

  const handlePointerMove = React.useCallback(
    (event: React.PointerEvent<HTMLButtonElement>) => {
      if (!isInteractive || !hasEffect(effects, 'magnetic') || event.pointerType === 'touch') {
        return;
      }

      const rect = event.currentTarget.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * magneticStrength;
      const y = (event.clientY - rect.top - rect.height / 2) * magneticStrength;
      setMagneticStyle({
        '--button-magnetic-x': `${x.toFixed(2)}px`,
        '--button-magnetic-y': `${y.toFixed(2)}px`,
      } as React.CSSProperties);
    },
    [effects, isInteractive, magneticStrength],
  );

  const resetMagnetic = React.useCallback(() => {
    if (hasEffect(effects, 'magnetic')) {
      setMagneticStyle({
        '--button-magnetic-x': '0px',
        '--button-magnetic-y': '0px',
      } as React.CSSProperties);
    }
  }, [effects]);

  return {
    ripples,
    magneticStyle,
    handleClick,
    handlePointerMove,
    handlePointerLeave: resetMagnetic,
  };
};

export type UseButtonReturn = ReturnType<typeof useButton>;
