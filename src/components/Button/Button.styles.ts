export const BUTTON_CSS = `
@keyframes uik-btn-ripple {
  0% {
    opacity: 0.35;
    transform: scale(0);
  }
  100% {
    opacity: 0;
    transform: scale(4);
  }
}

@keyframes uik-btn-spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes uik-btn-shimmer {
  0% {
    transform: translateX(-200%) skewX(-16deg);
  }
  100% {
    transform: translateX(200%) skewX(-16deg);
  }
}

@keyframes uik-btn-gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes uik-btn-pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 var(--color-primary-glow);
  }
  50% {
    box-shadow: 0 0 0 12px transparent;
  }
}

@keyframes uik-btn-check {
  from {
    stroke-dashoffset: 18;
  }
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes uik-btn-shake {
  0%, 100% {
    transform: translate3d(var(--uik-button-magnetic-x, 0), var(--uik-button-magnetic-y, 0), 0);
  }
  15% {
    transform: translate3d(calc(var(--uik-button-magnetic-x, 0) - 6px), var(--uik-button-magnetic-y, 0), 0);
  }
  30% {
    transform: translate3d(calc(var(--uik-button-magnetic-x, 0) + 5px), var(--uik-button-magnetic-y, 0), 0);
  }
  45% {
    transform: translate3d(calc(var(--uik-button-magnetic-x, 0) - 4px), var(--uik-button-magnetic-y, 0), 0);
  }
  60% {
    transform: translate3d(calc(var(--uik-button-magnetic-x, 0) + 3px), var(--uik-button-magnetic-y, 0), 0);
  }
  75% {
    transform: translate3d(calc(var(--uik-button-magnetic-x, 0) - 2px), var(--uik-button-magnetic-y, 0), 0);
  }
}

@keyframes uik-btn-badge-pop {
  0% {
    opacity: 0;
    transform: translate(35%, -35%) scale(0.75);
  }
  70% {
    opacity: 1;
    transform: translate(35%, -35%) scale(1.08);
  }
  100% {
    opacity: 1;
    transform: translate(35%, -35%) scale(1);
  }
}

@keyframes uik-btn-skeleton {
  0% {
    background-position: 180% 0;
  }
  100% {
    background-position: -180% 0;
  }
}

.uik-button {
  --uik-btn-bg: var(--color-primary);
  --uik-btn-bg-hover: var(--color-primary-hover);
  --uik-btn-bg-active: var(--color-primary-hover);
  --uik-btn-fg: var(--color-bg);
  --uik-btn-border: var(--color-primary);
  --uik-btn-shadow: var(--shadow-md);
  --uik-btn-gap: 10px;
  --uik-btn-padding-vertical: 10px;
  --uik-btn-padding-horizontal: 20px;
  --uik-btn-font-size: var(--font-size-md);
  --uik-btn-radius: var(--radius-md);
  --uik-ripple-color: color-mix(in srgb, var(--color-primary) 35%, transparent 65%);
  position: relative;
  isolation: isolate;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--uik-btn-gap);
  width: auto;
  min-height: 42px;
  padding: var(--uik-btn-padding-vertical) var(--uik-btn-padding-horizontal);
  border: 1px solid var(--uik-btn-border);
  border-radius: var(--uik-btn-radius);
  background: var(--uik-btn-bg);
  color: var(--uik-btn-fg);
  box-shadow: var(--uik-btn-shadow);
  font-family: var(--font-sans);
  font-size: var(--uik-btn-font-size);
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.01em;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  transition:
    background var(--transition-base),
    border-color var(--transition-base),
    color var(--transition-base),
    box-shadow var(--transition-base),
    transform var(--transition-spring),
    opacity var(--transition-fast);
  transform: translate3d(var(--uik-button-magnetic-x, 0), var(--uik-button-magnetic-y, 0), 0) scale(1);
  overflow: hidden;
}

.uik-button:hover:not(:disabled):not([aria-busy='true']) {
  background: var(--uik-btn-bg-hover);
  box-shadow: var(--uik-btn-shadow), var(--shadow-glow);
  transform: translate3d(var(--uik-button-magnetic-x, 0), var(--uik-button-magnetic-y, 0), 0) translateY(-2px) scale(1.01);
}

.uik-button:active:not(:disabled):not([aria-busy='true']) {
  background: var(--uik-btn-bg-active);
  transform: translate3d(var(--uik-button-magnetic-x, 0), var(--uik-button-magnetic-y, 0), 0) scale(0.97);
}

.uik-button:focus-visible {
  outline: none;
  box-shadow: var(--shadow-focus), var(--uik-btn-shadow);
}

.uik-button:disabled,
.uik-button[aria-disabled='true'] {
  cursor: not-allowed;
  opacity: 0.5;
  filter: grayscale(0.2);
}

.uik-button[data-size='xs'] {
  --uik-btn-padding-vertical: 4px;
  --uik-btn-padding-horizontal: 10px;
  --uik-btn-gap: 6px;
  --uik-btn-font-size: 11px;
  --uik-btn-radius: var(--radius-sm);
  min-height: 28px;
}

.uik-button[data-size='sm'] {
  --uik-btn-padding-vertical: 7px;
  --uik-btn-padding-horizontal: 14px;
  --uik-btn-gap: 8px;
  --uik-btn-font-size: var(--font-size-sm);
  min-height: 34px;
}

.uik-button[data-size='md'] {
  --uik-btn-padding-vertical: 10px;
  --uik-btn-padding-horizontal: 20px;
  --uik-btn-gap: 10px;
  --uik-btn-font-size: var(--font-size-md);
  min-height: 42px;
}

.uik-button[data-size='lg'] {
  --uik-btn-padding-vertical: 13px;
  --uik-btn-padding-horizontal: 26px;
  --uik-btn-gap: 12px;
  --uik-btn-font-size: var(--font-size-lg);
  --uik-btn-radius: var(--radius-lg);
  min-height: 50px;
}

.uik-button[data-size='xl'] {
  --uik-btn-padding-vertical: 16px;
  --uik-btn-padding-horizontal: 32px;
  --uik-btn-gap: 14px;
  --uik-btn-font-size: 19px;
  --uik-btn-radius: var(--radius-lg);
  min-height: 58px;
}

.uik-button[data-variant='primary'] {
  --uik-btn-bg: var(--color-primary);
  --uik-btn-bg-hover: var(--color-primary-hover);
  --uik-btn-bg-active: var(--color-primary-hover);
  --uik-btn-fg: var(--color-bg);
  --uik-btn-border: var(--color-primary);
  --uik-ripple-color: rgba(255, 255, 255, 0.35);
}

.uik-button[data-variant='secondary'] {
  --uik-btn-bg: var(--color-bg);
  --uik-btn-bg-hover: var(--color-primary-subtle);
  --uik-btn-bg-active: color-mix(in srgb, var(--color-text-muted) 8%, transparent 92%);
  --uik-btn-fg: var(--color-text);
  --uik-btn-border: var(--color-border);
  --uik-btn-shadow: var(--shadow-md);
  --uik-ripple-color: var(--color-primary);
}

.uik-button[data-variant='ghost'] {
  --uik-btn-bg: transparent;
  --uik-btn-bg-hover: var(--color-surface);
  --uik-btn-bg-active: color-mix(in srgb, var(--color-text-muted) 8%, transparent 92%);
  --uik-btn-fg: var(--color-text);
  --uik-btn-border: transparent;
  --uik-btn-shadow: none;
  --uik-ripple-color: var(--color-primary);
}

.uik-button[data-variant='danger'] {
  --uik-btn-bg: var(--color-danger);
  --uik-btn-bg-hover: var(--color-danger);
  --uik-btn-bg-active: var(--color-danger);
  --uik-btn-fg: var(--color-bg);
  --uik-btn-border: var(--color-danger);
  --uik-ripple-color: rgba(255, 255, 255, 0.35);
}

.uik-button[data-variant='success'] {
  --uik-btn-bg: var(--color-success);
  --uik-btn-bg-hover: var(--color-success);
  --uik-btn-bg-active: var(--color-success);
  --uik-btn-fg: var(--color-bg);
  --uik-btn-border: var(--color-success);
  --uik-ripple-color: rgba(255, 255, 255, 0.35);
}

.uik-button[data-variant='gradient'] {
  --uik-btn-bg: linear-gradient(135deg, var(--color-primary), var(--color-neon-purple), var(--color-neon-pink));
  --uik-btn-bg-hover: linear-gradient(135deg, var(--color-neon-pink), var(--color-primary), var(--color-neon-purple));
  --uik-btn-bg-active: linear-gradient(135deg, var(--color-primary), var(--color-neon-purple), var(--color-neon-pink));
  --uik-btn-fg: var(--color-bg);
  --uik-btn-border: transparent;
  --uik-btn-shadow: var(--shadow-lg);
  background-image: var(--uik-btn-bg);
  background-size: 200% 200%;
  animation: uik-btn-gradient 3s linear infinite;
}

.uik-button[data-variant='gradient']:hover:not(:disabled) {
  animation-duration: 1s;
}

.uik-button[data-variant='glass'] {
  --uik-btn-bg: var(--glass-bg);
  --uik-btn-bg-hover: var(--glass-bg);
  --uik-btn-bg-active: color-mix(in srgb, var(--glass-bg) 95%, var(--color-bg) 5%);
  --uik-btn-fg: var(--color-text);
  --uik-btn-border: var(--glass-border);
  --uik-btn-shadow: none;
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
}

.uik-button[data-variant='neon'] {
  --uik-btn-bg: color-mix(in srgb, var(--color-text) 16%, transparent 84%);
  --uik-btn-bg-hover: color-mix(in srgb, var(--color-text) 12%, transparent 88%);
  --uik-btn-bg-active: color-mix(in srgb, var(--color-text) 20%, transparent 80%);
  --uik-btn-fg: var(--color-neon-blue);
  --uik-btn-border: var(--color-neon-blue);
  --uik-btn-shadow: 0 0 18px color-mix(in srgb, var(--color-neon-blue) 35%, transparent 65%);
}

.uik-button[data-variant='neon'][data-neon-color='purple'] {
  --uik-btn-fg: var(--color-neon-purple);
  --uik-btn-border: var(--color-neon-purple);
  --uik-btn-shadow: 0 0 18px color-mix(in srgb, var(--color-neon-purple) 35%, transparent 65%);
}

.uik-button[data-variant='neon'][data-neon-color='green'] {
  --uik-btn-fg: var(--color-neon-green);
  --uik-btn-border: var(--color-neon-green);
  --uik-btn-shadow: 0 0 18px color-mix(in srgb, var(--color-neon-green) 35%, transparent 65%);
}

.uik-button[data-variant='neon'][data-neon-color='pink'] {
  --uik-btn-fg: var(--color-neon-pink);
  --uik-btn-border: var(--color-neon-pink);
  --uik-btn-shadow: 0 0 18px color-mix(in srgb, var(--color-neon-pink) 35%, transparent 65%);
}

.uik-button[data-status='success'] {
  --uik-btn-bg: var(--color-success);
  --uik-btn-bg-hover: var(--color-success);
  --uik-btn-bg-active: var(--color-success);
  --uik-btn-border: var(--color-success);
}

.uik-button[data-status='error'] {
  --uik-btn-bg: var(--color-danger);
  --uik-btn-bg-hover: var(--color-danger);
  --uik-btn-bg-active: var(--color-danger);
  --uik-btn-border: var(--color-danger);
  animation: uik-btn-shake var(--transition-spring);
}

.uik-button[data-pulse='true']:not(:disabled):not([aria-busy='true']) {
  animation: uik-btn-pulse 2s ease-in-out infinite;
}

.uik-button__shine {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0;
  background: linear-gradient(
    120deg,
    color-mix(in srgb, var(--color-bg) 12%, transparent 88%),
    color-mix(in srgb, var(--color-bg) 18%, transparent 82%),
    color-mix(in srgb, var(--color-bg) 12%, transparent 88%)
  );
  transform: translateX(-200%) skewX(-16deg);
}

.uik-button[data-status='loading'] .uik-button__shine {
  opacity: 1;
  animation: uik-btn-shimmer 1.4s linear infinite;
}

.uik-button:hover:not(:disabled) .uik-button__shine {
  opacity: 0.08;
  animation: uik-btn-shimmer 1.4s linear infinite;
}

.uik-button__content,
.uik-button__icon,
.uik-button__spinner,
.uik-button__status-icon,
.uik-button__badge {
  position: relative;
  z-index: 1;
}

.uik-button__content {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  white-space: nowrap;
}

.uik-button__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform var(--transition-spring), opacity var(--transition-base);
  color: inherit;
}

.uik-button:hover:not(:disabled) .uik-button__icon--left {
  transform: translateX(-2px);
}

.uik-button:hover:not(:disabled) .uik-button__icon--right {
  transform: translateX(2px);
}

.uik-button__spinner {
  width: 1.2em;
  height: 1.2em;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: var(--radius-full);
  animation: uik-btn-spin 0.8s linear infinite;
}

.uik-button__status-icon {
  width: 1.2em;
  height: 1.2em;
}

.uik-button__status-icon--success path {
  stroke-dasharray: 18;
  stroke-dashoffset: 18;
  animation: uik-btn-check 320ms ease-out forwards;
}

.uik-button__status-icon--error path {
  stroke-linecap: round;
  stroke-linejoin: round;
}

.uik-button__badge {
  position: absolute;
  top: 8px;
  right: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 0 8px;
  border-radius: var(--radius-full);
  background: var(--color-danger);
  color: var(--color-bg);
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
  animation: uik-btn-badge-pop 320ms var(--transition-bounce);
}

.uik-button__ripple {
  position: absolute;
  inset: auto;
  z-index: 0;
  width: var(--uik-ripple-size);
  height: var(--uik-ripple-size);
  top: var(--uik-ripple-y);
  left: var(--uik-ripple-x);
  border-radius: var(--radius-full);
  background: var(--uik-ripple-color);
  opacity: 0;
  pointer-events: none;
  transform: scale(0);
  animation: uik-btn-ripple 600ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.uik-button[data-variant='secondary'] .uik-button__ripple,
.uik-button[data-variant='ghost'] .uik-button__ripple,
.uik-button[data-variant='glass'] .uik-button__ripple,
.uik-button[data-variant='gradient'] .uik-button__ripple,
.uik-button[data-variant='neon'] .uik-button__ripple {
  --uik-ripple-color: var(--color-primary);
}

.uik-button[data-status='loading'] {
  pointer-events: none;
}

.uik-button[data-status='loading'] .uik-button__content,
.uik-button[data-status='loading'] .uik-button__icon,
.uik-button[data-status='loading'] .uik-button__status-icon {
  opacity: 0;
}

.uik-button[data-status='loading'] .uik-button__spinner {
  opacity: 1;
}

.uik-button[data-status='success'] .uik-button__content,
.uik-button[data-status='error'] .uik-button__content {
  opacity: 1;
}

.uik-button[data-pulse='true'] {
  animation: uik-btn-pulse 2s ease-in-out infinite;
}

.uik-button-group {
  display: inline-flex;
  align-items: stretch;
  gap: 0;
}

.uik-button-group[data-segmented='true'] {
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.uik-button-group[data-segmented='true'] > .uik-button {
  border-radius: 0;
  margin: 0;
}

.uik-button-group[data-segmented='true'] > .uik-button:first-child {
  border-top-left-radius: var(--radius-md);
  border-bottom-left-radius: var(--radius-md);
}

.uik-button-group[data-segmented='true'] > .uik-button:last-child {
  border-top-right-radius: var(--radius-md);
  border-bottom-right-radius: var(--radius-md);
}

.uik-button-group[data-segmented='true'] > .uik-button + .uik-button {
  margin-left: -1px;
}

.uik-button-group[data-segmented='true'] > .uik-button[data-selected='true'] {
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--color-bg) 15%, transparent 85%), var(--shadow-glow);
}

@media (prefers-reduced-motion: reduce) {
  .uik-button,
  .uik-button__shine,
  .uik-button__ripple,
  .uik-button__spinner,
  .uik-button__status-icon,
  .uik-button__badge,
  .uik-button,
  .uik-button__shine,
  .uik-button__ripple,
  .uik-button__spinner,
  .uik-button__status-icon,
  .uik-button__badge,
  .uik-button-group {
    animation: none !important;
    transition: none !important;
  }
}
`;
