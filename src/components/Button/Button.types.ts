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

export type ButtonStatus = 'idle' | 'loading' | 'success' | 'error';

export type NeonColor = 'blue' | 'purple' | 'green' | 'pink';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  status?: ButtonStatus;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  magnetic?: boolean;
  pulse?: boolean;
  count?: number;
  neonColor?: NeonColor;
  onStatusReset?: () => void;
}

export interface ButtonGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  segmented?: boolean;
  value?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}
