import * as React from 'react';
import type { ButtonGroupProps, ButtonProps } from './Button.types';
import { useButton } from './useButton';
import { injectStyle } from './Button.utils';
import { BUTTON_CSS } from './Button.styles';

const SuccessIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="uik-button__status-icon uik-button__status-icon--success">
    <path d="M5 13l4 4L19 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ErrorIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="uik-button__status-icon uik-button__status-icon--error">
    <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      status = 'idle',
      iconLeft,
      iconRight,
      fullWidth = false,
      magnetic = true,
      pulse = false,
      count,
      neonColor = 'blue',
      onStatusReset,
      disabled = false,
      className,
      style,
      type = 'button',
      children,
      onClick,
      onKeyDown,
      onMouseDown,
      onPointerMove,
      onPointerLeave,
      ...props
    },
    ref,
  ) => {
    React.useEffect(() => {
      injectStyle('uik-button', BUTTON_CSS);
    }, []);

    const isLoading = status === 'loading';
    const isSuccess = status === 'success';
    const isError = status === 'error';
    const isDisabled = disabled || isLoading;

    const {
      ripples,
      magneticStyle,
      handleMouseDown,
      handleKeyDown,
      handlePointerMove,
      handlePointerLeave,
    } = useButton({
      disabled: Boolean(disabled),
      status,
      magnetic,
      size,
    });

    const handleMouseDownWrapped = React.useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        handleMouseDown(event);
        onMouseDown?.(event);
      },
      [handleMouseDown, onMouseDown],
    );

    const handleKeyDownWrapped = React.useCallback(
      (event: React.KeyboardEvent<HTMLButtonElement>) => {
        handleKeyDown(event);
        onKeyDown?.(event);
      },
      [handleKeyDown, onKeyDown],
    );

    const handlePointerMoveWrapped = React.useCallback(
      (event: React.PointerEvent<HTMLButtonElement>) => {
        handlePointerMove(event);
        onPointerMove?.(event);
      },
      [handlePointerMove, onPointerMove],
    );

    const handlePointerLeaveWrapped = React.useCallback(
      (event: React.PointerEvent<HTMLButtonElement>) => {
        handlePointerLeave();
        onPointerLeave?.(event);
      },
      [handlePointerLeave, onPointerLeave],
    );

    React.useEffect(() => {
      if ((isSuccess || isError) && onStatusReset) {
        const timer = window.setTimeout(onStatusReset, 2000);
        return () => window.clearTimeout(timer);
      }
      return undefined;
    }, [isSuccess, isError, onStatusReset]);

    const buttonClassName = React.useMemo(
      () => ['uik-button', className].filter(Boolean).join(' '),
      [className],
    );

    const buttonStyle = React.useMemo(
      () => ({
        width: fullWidth ? '100%' : 'auto',
        ...magneticStyle,
        ...style,
      } as React.CSSProperties),
      [fullWidth, magneticStyle, style],
    );

    const hasBadge = typeof count === 'number' && count > 0;
    const badgeCount = hasBadge ? count : undefined;

    return (
      <button
        {...props}
        ref={ref}
        type={type}
        className={buttonClassName}
        data-variant={variant}
        data-size={size}
        data-status={status}
        data-pulse={pulse ? 'true' : undefined}
        data-neon-color={variant === 'neon' ? neonColor : undefined}
        data-count={badgeCount !== undefined ? String(badgeCount) : undefined}
        aria-busy={isLoading ? 'true' : undefined}
        aria-disabled={isDisabled ? 'true' : undefined}
        disabled={isDisabled}
        onClick={onClick}
        onMouseDown={handleMouseDownWrapped}
        onKeyDown={handleKeyDownWrapped}
        onPointerMove={handlePointerMoveWrapped}
        onPointerLeave={handlePointerLeaveWrapped}
        style={buttonStyle}
      >
        <span className="uik-button__shine" aria-hidden="true" />
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

        {isLoading ? (
          <span className="uik-button__spinner" aria-hidden="true" />
        ) : isSuccess ? (
          <SuccessIcon />
        ) : isError ? (
          <ErrorIcon />
        ) : null}

        {!isLoading && !isSuccess && !isError && iconLeft ? (
          <span className="uik-button__icon uik-button__icon--left" aria-hidden="true">
            {iconLeft}
          </span>
        ) : null}

        <span className="uik-button__content">{isLoading ? 'Loading' : children}</span>

        {!isLoading && !isSuccess && !isError && iconRight ? (
          <span className="uik-button__icon uik-button__icon--right" aria-hidden="true">
            {iconRight}
          </span>
        ) : null}

        {hasBadge ? (
          <span key={badgeCount} className="uik-button__badge" aria-hidden="true">
            {badgeCount}
          </span>
        ) : null}
      </button>
    );
  },
);

Button.displayName = 'Button';

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ children, variant = 'primary', size = 'md', segmented = false, value, onChange, disabled = false, className, ...props }, ref) => {
    React.useEffect(() => {
      injectStyle('uik-button', BUTTON_CSS);
    }, []);

    const groupClassName = React.useMemo(
      () => ['uik-button-group', className].filter(Boolean).join(' '),
      [className],
    );

    const enhancedChildren = React.useMemo(
      () =>
        React.Children.map(children, (child, index) => {
          if (!React.isValidElement<ButtonProps>(child)) {
            return child;
          }

          const childValue = child.props.value !== undefined ? String(child.props.value) : String(index);
          const selected = segmented && value !== undefined && String(value) === childValue;

          const previousOnClick = child.props.onClick;
          const handleChildClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            previousOnClick?.(event);
            if (segmented && onChange && !selected) {
              onChange(childValue);
            }
          };

          const cloneProps = {
            variant: child.props.variant ?? variant,
            size: child.props.size ?? size,
            disabled: child.props.disabled ?? disabled,
            'data-segmented': segmented ? 'true' : undefined,
            'data-selected': selected ? 'true' : undefined,
            onClick: handleChildClick,
          } as React.ComponentPropsWithoutRef<'button'> & Record<string, unknown>;

          return React.cloneElement(child, cloneProps);

        }),
      [children, segmented, size, variant, value, onChange],
    );

    return (
      <div ref={ref} className={groupClassName} data-segmented={segmented ? 'true' : undefined} {...props}>
        {enhancedChildren}
      </div>
    );
  },
);

ButtonGroup.displayName = 'ButtonGroup';

export { Button };
