import * as React from 'react';
import type { ButtonGroupProps, ButtonProps } from './Button.types';
import { hasEffect, injectButtonStyles } from './Button.utils';
import { useButton } from './useButton';

const SuccessIcon = () => (
  <svg className="uik-button__status-icon uik-button__status-icon--success" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M3.5 8.2 6.7 11.2 12.8 4.8" />
  </svg>
);

const ErrorIcon = () => (
  <svg className="uik-button__status-icon uik-button__status-icon--error" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M4.5 4.5 11.5 11.5M11.5 4.5 4.5 11.5" />
  </svg>
);

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      status = 'idle',
      loading = false,
      skeleton = false,
      fullWidth = false,
      effects = ['ripple', 'magnetic'],
      magneticStrength,
      sound = false,
      loadingLabel = 'Loading',
      successLabel,
      errorLabel,
      leftIcon,
      rightIcon,
      badge,
      badgeLabel,
      children,
      disabled,
      className,
      style,
      type = 'button',
      role,
      id,
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedBy,
      ...props
    },
    ref,
  ) => {
    const reactId = React.useId();
    const buttonId = id ?? `uik-button-${reactId}`;
    const liveId = `${buttonId}-live`;
    const { ripples, magneticStyle, handleClick, handlePointerMove, handlePointerLeave } = useButton({
      disabled,
      loading,
      skeleton,
      effects,
      magneticStrength,
      sound,
      onClick: props.onClick,
    });

    const isDisabled = disabled || loading || skeleton;
    const label = React.useMemo(() => {
      if (loading) {
        return loadingLabel;
      }
      if (status === 'success' && successLabel) {
        return successLabel;
      }
      if (status === 'error' && errorLabel) {
        return errorLabel;
      }
      return children;
    }, [children, errorLabel, loading, loadingLabel, status, successLabel]);

    const accessibleLabel = ariaLabel || (typeof label === 'string' ? label : loading ? loadingLabel : undefined);
    const mergedClassName = React.useMemo(() => ['uik-button', className].filter(Boolean).join(' '), [className]);
    const mergedStyle = React.useMemo(
      () =>
        ({
          '--uik-button-width': fullWidth ? '100%' : 'auto',
          ...magneticStyle,
          ...style,
        }) as React.CSSProperties,
      [fullWidth, magneticStyle, style],
    );

    return (
      <button
        {...props}
        ref={ref}
        id={buttonId}
        type={type}
        role={role ?? 'button'}
        className={mergedClassName}
        data-variant={variant}
        data-size={size}
        data-status={status}
        data-skeleton={skeleton ? 'true' : undefined}
        data-shimmer={hasEffect(effects, 'shimmer') ? 'true' : undefined}
        data-pulse={hasEffect(effects, 'pulse') ? 'true' : undefined}
        data-gradient-border={hasEffect(effects, 'gradientBorder') ? 'true' : undefined}
        aria-busy={loading ? 'true' : undefined}
        aria-disabled={isDisabled ? 'true' : undefined}
        aria-describedby={[ariaDescribedBy, liveId].filter(Boolean).join(' ') || undefined}
        aria-label={accessibleLabel}
        disabled={isDisabled}
        onClick={handleClick}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={mergedStyle}
      >
        <span className="uik-button__shimmer" aria-hidden="true" />
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="uik-button__ripple"
            aria-hidden="true"
            style={
              {
                '--uik-ripple-x': `${ripple.x}px`,
                '--uik-ripple-y': `${ripple.y}px`,
                '--uik-ripple-size': `${ripple.size}px`,
              } as React.CSSProperties
            }
          />
        ))}
        {loading ? <span className="uik-button__spinner" aria-hidden="true" /> : null}
        {!loading && status === 'success' ? <SuccessIcon /> : null}
        {!loading && status === 'error' ? <ErrorIcon /> : null}
        {!loading && status === 'idle' && leftIcon ? (
          <span className="uik-button__icon uik-button__icon--left" aria-hidden="true">
            {leftIcon}
          </span>
        ) : null}
        <span className="uik-button__content">{label}</span>
        {!loading && status === 'idle' && rightIcon ? (
          <span className="uik-button__icon uik-button__icon--right" aria-hidden="true">
            {rightIcon}
          </span>
        ) : null}
        {badge !== undefined && badge !== null ? (
          <span className="uik-button__badge" aria-label={badgeLabel}>
            {badge}
          </span>
        ) : null}
        <span id={liveId} aria-live="polite" hidden>
          {loading ? loadingLabel : status === 'success' ? successLabel ?? 'Success' : status === 'error' ? errorLabel ?? 'Error' : ''}
        </span>
      </button>
    );
  },
);

Button.displayName = 'Button';

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    {
      orientation = 'horizontal',
      variant = 'default',
      size,
      disabled = false,
      children,
      className,
      role,
      'aria-label': ariaLabel,
      ...props
    },
    ref,
  ) => {
    React.useEffect(() => {
      injectButtonStyles();
    }, []);

    const groupClassName = React.useMemo(() => ['uik-button-group', className].filter(Boolean).join(' '), [className]);
    const enhancedChildren = React.useMemo(
      () =>
        React.Children.map(children, (child) => {
          if (!React.isValidElement<ButtonProps>(child)) {
            return child;
          }

          return React.cloneElement(child, {
            size: child.props.size ?? size,
            disabled: child.props.disabled ?? disabled,
          });
        }),
      [children, disabled, size],
    );

    return (
      <div
        {...props}
        ref={ref}
        className={groupClassName}
        data-orientation={orientation}
        data-variant={variant}
        role={role ?? (variant === 'segmented' ? 'radiogroup' : 'group')}
        aria-label={ariaLabel}
        aria-disabled={disabled ? 'true' : undefined}
      >
        {enhancedChildren}
      </div>
    );
  },
);

ButtonGroup.displayName = 'ButtonGroup';
