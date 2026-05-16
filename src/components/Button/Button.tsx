import * as React from 'react';
import type { ButtonProps } from './Button.types';
import { hasEffect } from './Button.utils';
import { useButton } from './useButton';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      animation = 'subtle',
      status = 'idle',
      loading = false,
      skeleton = false,
      fullWidth = false,
      effects = ['ripple'],
      magneticStrength,
      sound = false,
      loadingLabel = 'Loading',
      successLabel,
      errorLabel,
      leftIcon,
      rightIcon,
      children,
      disabled,
      className,
      style,
      type = 'button',
      'aria-label': ariaLabel,
      ...props
    },
    ref,
  ) => {
    const { ripples, magneticStyle, handleClick, handlePointerMove, handlePointerLeave } = useButton({
      disabled,
      loading,
      effects,
      magneticStrength,
      sound,
      onClick: props.onClick,
    });

    const isDisabled = disabled || loading || skeleton;
    const visibleLabel =
      loading ? loadingLabel : status === 'success' && successLabel ? successLabel : status === 'error' && errorLabel ? errorLabel : children;
    const accessibleLabel =
      ariaLabel || (typeof visibleLabel === 'string' ? visibleLabel : loading ? loadingLabel : undefined);

    return (
      <button
        {...props}
        ref={ref}
        type={type}
        className={['nav-ui-button', className].filter(Boolean).join(' ')}
        data-variant={variant}
        data-size={size}
        data-animation={animation}
        data-status={status}
        data-skeleton={skeleton ? 'true' : undefined}
        data-shimmer={hasEffect(effects, 'shimmer') ? 'true' : undefined}
        data-glow-pulse={hasEffect(effects, 'glowPulse') ? 'true' : undefined}
        data-gradient-border={hasEffect(effects, 'gradientBorder') ? 'true' : undefined}
        aria-busy={loading ? 'true' : undefined}
        aria-disabled={isDisabled ? 'true' : undefined}
        aria-label={accessibleLabel}
        disabled={isDisabled}
        onClick={handleClick}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={{
          '--button-width': fullWidth ? '100%' : 'auto',
          ...magneticStyle,
          ...style,
        } as React.CSSProperties}
      >
        <span className="nav-ui-button__shimmer" aria-hidden="true" />
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="nav-ui-button__ripple"
            aria-hidden="true"
            style={
              {
                '--ripple-x': `${ripple.x}px`,
                '--ripple-y': `${ripple.y}px`,
                '--ripple-size': `${ripple.size}px`,
              } as React.CSSProperties
            }
          />
        ))}
        {loading ? <span className="nav-ui-button__spinner" aria-hidden="true" /> : null}
        {!loading && leftIcon ? (
          <span className="nav-ui-button__icon" aria-hidden="true">
            {leftIcon}
          </span>
        ) : null}
        <span className="nav-ui-button__content">{visibleLabel}</span>
        {!loading && rightIcon ? (
          <span className="nav-ui-button__icon" aria-hidden="true">
            {rightIcon}
          </span>
        ) : null}
      </button>
    );
  },
);

Button.displayName = 'Button';
