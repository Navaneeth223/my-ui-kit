import * as React from 'react';
import type { CursorEffectProps } from './CursorEffect.types';
import { useCursorEffect } from './useCursorEffect';

export const CursorEffect = React.forwardRef<HTMLDivElement, CursorEffectProps>(
  (
    {
      variant = 'default',
      color = 'var(--color-primary)',
      size = 34,
      disabled = false,
      trailLength,
      magneticSelector,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    const { point, trail } = useCursorEffect({ disabled, trailLength, magneticSelector, variant });

    if (disabled) {
      return null;
    }

    const rootStyle = {
      '--cursor-x': `${point.x}px`,
      '--cursor-y': `${point.y}px`,
      '--cursor-color': color,
      '--cursor-size': `${size}px`,
      '--cursor-scale': point.scale,
      '--cursor-rotate': `${point.rotate}deg`,
      ...style,
    } as React.CSSProperties;

    return (
      <div
        {...props}
        ref={ref}
        className={['nav-ui-cursor-root', className].filter(Boolean).join(' ')}
        data-variant={variant}
        style={rootStyle}
        aria-hidden="true"
      >
        {variant === 'spotlight' ? <span className="nav-ui-cursor-spotlight" /> : null}
        {variant === 'crosshair' ? (
          <>
            <span className="nav-ui-cursor-crosshair-x" />
            <span className="nav-ui-cursor-crosshair-y" />
          </>
        ) : null}
        {variant === 'blob' ? <span className="nav-ui-cursor-blob" /> : null}
        {variant === 'trail'
          ? trail.map((trailPoint, index) => (
              <span
                key={trailPoint.id}
                className="nav-ui-cursor-trail"
                style={
                  {
                    '--trail-x': `${trailPoint.x}px`,
                    '--trail-y': `${trailPoint.y}px`,
                    '--trail-opacity': Math.max(0.12, 1 - index / Math.max(trail.length, 1)),
                    '--trail-scale': Math.max(0.24, 1 - index / Math.max(trail.length, 1)),
                  } as React.CSSProperties
                }
              />
            ))
          : null}
        {variant === 'default' || variant === 'magnetic' || variant === 'trail' ? (
          <>
            <span className="nav-ui-cursor-ring" />
            <span className="nav-ui-cursor-dot" />
          </>
        ) : null}
      </div>
    );
  },
);

CursorEffect.displayName = 'CursorEffect';
