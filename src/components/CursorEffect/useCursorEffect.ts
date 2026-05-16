import * as React from 'react';
import type { CursorEffectProps, CursorPoint } from './CursorEffect.types';
import { getMagneticPoint, injectCursorEffectStyles } from './CursorEffect.utils';

export const useCursorEffect = ({
  disabled = false,
  trailLength = 12,
  magneticSelector = '[data-cursor-magnetic],button,a,[role="button"]',
  variant = 'default',
}: Pick<CursorEffectProps, 'disabled' | 'trailLength' | 'magneticSelector' | 'variant'>) => {
  const [point, setPoint] = React.useState({ x: -100, y: -100, scale: 1, rotate: 0 });
  const [trail, setTrail] = React.useState<CursorPoint[]>([]);
  const idRef = React.useRef(0);

  React.useEffect(() => {
    injectCursorEffectStyles();
  }, []);

  React.useEffect(() => {
    if (disabled || typeof window === 'undefined') {
      return undefined;
    }

    const handlePointerMove = (event: PointerEvent) => {
      const magneticPoint =
        variant === 'magnetic' ? getMagneticPoint(event.target as Element | null, magneticSelector) : null;
      const x = magneticPoint?.x ?? event.clientX;
      const y = magneticPoint?.y ?? event.clientY;

      setPoint((current) => ({
        x,
        y,
        scale: magneticPoint ? 1.45 : event.buttons ? 0.82 : 1,
        rotate: current.rotate + 8,
      }));

      if (variant === 'trail') {
        const nextPoint = { id: idRef.current, x: event.clientX, y: event.clientY };
        idRef.current += 1;
        setTrail((current) => [nextPoint, ...current].slice(0, trailLength));
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [disabled, magneticSelector, trailLength, variant]);

  return { point, trail };
};

export type UseCursorEffectReturn = ReturnType<typeof useCursorEffect>;
