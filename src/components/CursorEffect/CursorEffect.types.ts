import * as React from 'react';

export type CursorEffectVariant = 'default' | 'magnetic' | 'trail' | 'spotlight' | 'crosshair' | 'blob';

export interface CursorEffectProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CursorEffectVariant;
  color?: string;
  size?: number;
  disabled?: boolean;
  trailLength?: number;
  magneticSelector?: string;
}

export interface CursorPoint {
  id: number;
  x: number;
  y: number;
}
