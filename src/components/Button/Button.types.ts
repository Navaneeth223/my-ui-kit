import * as React from 'react';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'danger'
  | 'gradient'
  | 'neon'
  | 'glass';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export type ButtonAnimation = 'subtle' | 'playful' | 'dramatic';

export type ButtonStatus = 'idle' | 'success' | 'error';

export type ButtonEffect =
  | 'ripple'
  | 'magnetic'
  | 'shimmer'
  | 'glowPulse'
  | 'gradientBorder';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  animation?: ButtonAnimation;
  status?: ButtonStatus;
  loading?: boolean;
  skeleton?: boolean;
  fullWidth?: boolean;
  effects?: ButtonEffect[];
  magneticStrength?: number;
  sound?: boolean;
  loadingLabel?: string;
  successLabel?: string;
  errorLabel?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}
