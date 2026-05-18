import * as React from 'react';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'danger'
  | 'success'
  | 'gradient'
  | 'glass'
  | 'neon';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ButtonStatus = 'idle' | 'success' | 'error';

export type ButtonEffect =
  | 'ripple'
  | 'magnetic'
  | 'shimmer'
  | 'pulse'
  | 'gradientBorder';

export type ButtonGroupOrientation = 'horizontal' | 'vertical';

export type ButtonGroupVariant = 'default' | 'segmented';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
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
  badge?: React.ReactNode;
  badgeLabel?: string;
}

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: ButtonGroupOrientation;
  variant?: ButtonGroupVariant;
  size?: ButtonSize;
  disabled?: boolean;
}

export interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}
