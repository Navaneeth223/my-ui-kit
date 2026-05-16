export const BUTTON_STYLE_ID = 'nav-ui-button-styles';

export const buttonStyles = `
@keyframes nav-ui-button-ripple {
  from { opacity: 0.32; transform: scale(0); }
  to { opacity: 0; transform: scale(2.8); }
}

@keyframes nav-ui-button-spin {
  to { transform: rotate(360deg); }
}

@keyframes nav-ui-button-shimmer {
  0% { transform: translateX(-140%) skewX(-18deg); }
  100% { transform: translateX(140%) skewX(-18deg); }
}

@keyframes nav-ui-button-glow {
  0%, 100% { box-shadow: var(--button-shadow); }
  50% { box-shadow: var(--button-shadow), 0 0 28px var(--button-glow); }
}

@keyframes nav-ui-button-skeleton {
  0% { background-position: 180% 0; }
  100% { background-position: -180% 0; }
}

.nav-ui-button {
  --button-bg: var(--color-primary);
  --button-fg: var(--color-bg);
  --button-border: var(--color-primary);
  --button-shadow: var(--shadow-sm);
  --button-glow: var(--color-primary);
  --button-height: 44px;
  --button-px: var(--space-4);
  --button-font-size: 15px;
  --button-gap: var(--space-2);
  --button-scale-active: 0.98;
  --button-transition: var(--transition-base) var(--transition-spring);
  position: relative;
  isolation: isolate;
  display: inline-flex;
  min-height: var(--button-height);
  align-items: center;
  justify-content: center;
  gap: var(--button-gap);
  overflow: hidden;
  border: 1px solid var(--button-border);
  border-radius: var(--radius-md);
  background: var(--button-bg);
  color: var(--button-fg);
  box-shadow: var(--button-shadow);
  cursor: pointer;
  font: inherit;
  font-size: var(--button-font-size);
  font-weight: 650;
  line-height: 1;
  padding: 0 var(--button-px);
  text-decoration: none;
  touch-action: manipulation;
  transform: translate3d(var(--button-magnetic-x, 0), var(--button-magnetic-y, 0), 0) scale(1);
  transition:
    background var(--button-transition),
    border-color var(--button-transition),
    box-shadow var(--button-transition),
    color var(--button-transition),
    opacity var(--transition-fast) ease,
    transform var(--button-transition),
    filter var(--button-transition);
  user-select: none;
  vertical-align: middle;
  width: var(--button-width, auto);
}

.nav-ui-button:hover:not(:disabled):not([aria-busy='true']) {
  box-shadow: var(--button-shadow), 0 0 20px color-mix(in srgb, var(--button-glow) 26%, transparent);
  filter: saturate(1.08);
  transform: translate3d(var(--button-magnetic-x, 0), var(--button-magnetic-y, 0), 0) translateY(-1px) scale(1.01);
}

.nav-ui-button:active:not(:disabled):not([aria-busy='true']) {
  transform: translate3d(var(--button-magnetic-x, 0), var(--button-magnetic-y, 0), 0) translateY(0) scale(var(--button-scale-active));
}

.nav-ui-button:focus-visible {
  outline: 2px solid var(--button-glow);
  outline-offset: 3px;
}

.nav-ui-button:disabled,
.nav-ui-button[aria-disabled='true'] {
  cursor: not-allowed;
  filter: grayscale(0.15);
  opacity: 0.58;
}

.nav-ui-button[data-size='sm'] {
  --button-height: 36px;
  --button-px: var(--space-3);
  --button-font-size: 13px;
  --button-gap: var(--space-1);
  border-radius: var(--radius-sm);
}

.nav-ui-button[data-size='md'] {
  --button-height: 44px;
}

.nav-ui-button[data-size='lg'] {
  --button-height: 52px;
  --button-px: var(--space-6);
  --button-font-size: 16px;
  border-radius: var(--radius-lg);
}

.nav-ui-button[data-size='xl'] {
  --button-height: 60px;
  --button-px: var(--space-8);
  --button-font-size: 17px;
  --button-gap: var(--space-3);
  border-radius: var(--radius-xl);
}

.nav-ui-button[data-variant='primary'] {
  --button-bg: var(--color-primary);
  --button-fg: var(--color-bg);
  --button-border: var(--color-primary);
  --button-glow: var(--color-primary);
}

.nav-ui-button[data-variant='secondary'] {
  --button-bg: var(--color-surface);
  --button-fg: var(--color-text);
  --button-border: var(--color-border);
  --button-glow: var(--color-secondary);
}

.nav-ui-button[data-variant='ghost'] {
  --button-bg: transparent;
  --button-fg: var(--color-primary);
  --button-border: transparent;
  --button-shadow: none;
  --button-glow: var(--color-primary);
}

.nav-ui-button[data-variant='ghost']:hover:not(:disabled) {
  --button-bg: color-mix(in srgb, var(--color-primary) 10%, transparent);
}

.nav-ui-button[data-variant='danger'] {
  --button-bg: var(--color-danger);
  --button-fg: var(--color-bg);
  --button-border: var(--color-danger);
  --button-glow: var(--color-danger);
}

.nav-ui-button[data-variant='gradient'] {
  --button-bg: linear-gradient(135deg, var(--color-primary), var(--color-neon-purple));
  --button-fg: var(--color-bg);
  --button-border: transparent;
  --button-shadow: var(--shadow-md);
  --button-glow: var(--color-neon-purple);
}

.nav-ui-button[data-variant='neon'] {
  --button-bg: color-mix(in srgb, var(--color-neon-blue) 12%, var(--color-bg));
  --button-fg: var(--color-neon-blue);
  --button-border: var(--color-neon-blue);
  --button-shadow: 0 0 0 1px color-mix(in srgb, var(--color-neon-blue) 26%, transparent), var(--shadow-glow);
  --button-glow: var(--color-neon-blue);
}

.nav-ui-button[data-variant='glass'] {
  --button-bg: var(--glass-bg);
  --button-fg: var(--color-text);
  --button-border: var(--glass-border);
  --button-shadow: var(--shadow-lg);
  --button-glow: var(--color-primary);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
}

.nav-ui-button[data-status='success'] {
  --button-bg: var(--color-success);
  --button-fg: var(--color-bg);
  --button-border: var(--color-success);
  --button-glow: var(--color-success);
}

.nav-ui-button[data-status='error'] {
  --button-bg: var(--color-danger);
  --button-fg: var(--color-bg);
  --button-border: var(--color-danger);
  --button-glow: var(--color-danger);
  animation: nav-ui-button-error-shake var(--transition-slow) var(--transition-spring);
}

@keyframes nav-ui-button-error-shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-3px); }
  50% { transform: translateX(3px); }
  75% { transform: translateX(-2px); }
}

.nav-ui-button[data-animation='subtle'] {
  --button-scale-active: 0.985;
}

.nav-ui-button[data-animation='playful'] {
  --button-transition: var(--transition-slow) var(--transition-spring);
  --button-scale-active: 0.94;
}

.nav-ui-button[data-animation='playful']:hover:not(:disabled):not([aria-busy='true']) {
  transform: translate3d(var(--button-magnetic-x, 0), var(--button-magnetic-y, 0), 0) translateY(-2px) scale(1.035);
}

.nav-ui-button[data-animation='dramatic'] {
  --button-scale-active: 0.91;
}

.nav-ui-button[data-animation='dramatic']:hover:not(:disabled):not([aria-busy='true']) {
  box-shadow: var(--button-shadow), 0 0 34px color-mix(in srgb, var(--button-glow) 45%, transparent);
  transform: translate3d(var(--button-magnetic-x, 0), var(--button-magnetic-y, 0), 0) translateY(-3px) scale(1.045);
}

.nav-ui-button[data-gradient-border='true']::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -2;
  border-radius: inherit;
  background: linear-gradient(135deg, var(--color-primary), var(--color-neon-blue), var(--color-neon-purple));
}

.nav-ui-button[data-gradient-border='true']::after {
  content: '';
  position: absolute;
  inset: 1px;
  z-index: -1;
  border-radius: calc(var(--radius-md) - 1px);
  background: var(--button-bg);
}

.nav-ui-button[data-glow-pulse='true']:not(:disabled) {
  animation: nav-ui-button-glow 1.8s var(--transition-spring) infinite;
}

.nav-ui-button[data-shimmer='true'] .nav-ui-button__shimmer,
.nav-ui-button[aria-busy='true'] .nav-ui-button__shimmer {
  opacity: 1;
}

.nav-ui-button__shimmer {
  position: absolute;
  inset: -35%;
  z-index: 0;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--color-bg) 28%, transparent), transparent);
  opacity: 0;
  pointer-events: none;
  transform: translateX(-140%) skewX(-18deg);
}

.nav-ui-button:hover:not(:disabled) .nav-ui-button__shimmer,
.nav-ui-button[aria-busy='true'] .nav-ui-button__shimmer {
  animation: nav-ui-button-shimmer 1.4s linear infinite;
}

.nav-ui-button__content,
.nav-ui-button__icon,
.nav-ui-button__spinner {
  position: relative;
  z-index: 1;
}

.nav-ui-button__content {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  white-space: nowrap;
}

.nav-ui-button__icon {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
}

.nav-ui-button__spinner {
  width: 1em;
  height: 1em;
  border: 2px solid color-mix(in srgb, currentColor 28%, transparent);
  border-top-color: currentColor;
  border-radius: var(--radius-full);
  animation: nav-ui-button-spin 0.75s linear infinite;
}

.nav-ui-button__ripple {
  position: absolute;
  z-index: 0;
  width: var(--ripple-size);
  height: var(--ripple-size);
  left: var(--ripple-x);
  top: var(--ripple-y);
  border-radius: var(--radius-full);
  background: currentColor;
  opacity: 0;
  pointer-events: none;
  transform: scale(0);
  animation: nav-ui-button-ripple 620ms ease-out forwards;
}

.nav-ui-button[data-skeleton='true'] {
  --button-bg: linear-gradient(90deg, var(--color-surface), var(--color-border), var(--color-surface));
  --button-fg: transparent;
  --button-border: var(--color-border);
  background-size: 220% 100%;
  animation: nav-ui-button-skeleton 1.2s ease-in-out infinite;
  color: transparent;
  pointer-events: none;
}

.nav-ui-button[data-skeleton='true'] > * {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .nav-ui-button,
  .nav-ui-button *,
  .nav-ui-button::before,
  .nav-ui-button::after {
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 1ms !important;
  }
}
`;
