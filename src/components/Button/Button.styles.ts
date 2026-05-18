export const BUTTON_STYLE_ID = 'uik-button-styles';

export const buttonStyles = `
@keyframes uik-button-ripple {
  0% { opacity: 0.32; transform: scale(0); }
  100% { opacity: 0; transform: scale(4); }
}

@keyframes uik-button-spin {
  to { transform: rotate(360deg); }
}

@keyframes uik-button-shimmer {
  0% { transform: translateX(-140%) skewX(-16deg); }
  100% { transform: translateX(140%) skewX(-16deg); }
}

@keyframes uik-button-gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes uik-button-gradient-border {
  to { transform: rotate(360deg); }
}

@keyframes uik-button-pulse {
  0%, 100% { transform: translate3d(var(--uik-button-magnetic-x, 0), var(--uik-button-magnetic-y, 0), 0) scale(1); }
  50% { transform: translate3d(var(--uik-button-magnetic-x, 0), var(--uik-button-magnetic-y, 0), 0) scale(1.035); }
}

@keyframes uik-button-check {
  from { stroke-dashoffset: 18; }
  to { stroke-dashoffset: 0; }
}

@keyframes uik-button-error-shake {
  0%, 100% { transform: translate3d(var(--uik-button-magnetic-x, 0), var(--uik-button-magnetic-y, 0), 0); }
  15% { transform: translate3d(calc(var(--uik-button-magnetic-x, 0) - 6px), var(--uik-button-magnetic-y, 0), 0); }
  30% { transform: translate3d(calc(var(--uik-button-magnetic-x, 0) + 5px), var(--uik-button-magnetic-y, 0), 0); }
  45% { transform: translate3d(calc(var(--uik-button-magnetic-x, 0) - 4px), var(--uik-button-magnetic-y, 0), 0); }
  60% { transform: translate3d(calc(var(--uik-button-magnetic-x, 0) + 3px), var(--uik-button-magnetic-y, 0), 0); }
  75% { transform: translate3d(calc(var(--uik-button-magnetic-x, 0) - 2px), var(--uik-button-magnetic-y, 0), 0); }
}

@keyframes uik-button-badge-pop {
  0% { opacity: 0; transform: translate(35%, -35%) scale(0.78); }
  70% { opacity: 1; transform: translate(35%, -35%) scale(1.08); }
  100% { opacity: 1; transform: translate(35%, -35%) scale(1); }
}

@keyframes uik-button-skeleton {
  0% { background-position: 180% 0; }
  100% { background-position: -180% 0; }
}

.uik-button {
  --uik-button-bg: var(--color-primary);
  --uik-button-bg-hover: var(--color-primary-hover);
  --uik-button-bg-active: var(--color-primary-active);
  --uik-button-fg: var(--color-bg);
  --uik-button-border: var(--color-primary);
  --uik-button-ring: var(--color-border-focus);
  --uik-button-shadow: var(--shadow-sm);
  --uik-button-height: var(--space-10);
  --uik-button-px: var(--space-4);
  --uik-button-gap: var(--space-2);
  --uik-button-font-size: var(--font-size-md);
  --uik-button-radius: var(--radius-md);
  --uik-button-width: auto;
  position: relative;
  isolation: isolate;
  display: inline-flex;
  min-height: var(--uik-button-height);
  width: var(--uik-button-width);
  align-items: center;
  justify-content: center;
  gap: var(--uik-button-gap);
  overflow: hidden;
  border: 1px solid var(--uik-button-border);
  border-radius: var(--uik-button-radius);
  background: var(--uik-button-bg);
  color: var(--uik-button-fg);
  box-shadow: var(--uik-button-shadow);
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: var(--uik-button-font-size);
  font-weight: 650;
  line-height: 1;
  padding: 0 var(--uik-button-px);
  text-decoration: none;
  touch-action: manipulation;
  transform: translate3d(var(--uik-button-magnetic-x, 0), var(--uik-button-magnetic-y, 0), 0) scale(1);
  transition:
    background var(--transition-base),
    border-color var(--transition-base),
    box-shadow var(--transition-base),
    color var(--transition-base),
    filter var(--transition-base),
    opacity var(--transition-fast),
    transform var(--transition-spring);
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
}

.uik-button:hover:not(:disabled):not([aria-busy='true']) {
  background: var(--uik-button-bg-hover);
  box-shadow: var(--uik-button-shadow), var(--shadow-glow);
  filter: saturate(1.05);
  transform: translate3d(var(--uik-button-magnetic-x, 0), var(--uik-button-magnetic-y, 0), 0) translateY(-2px) scale(1.01);
}

.uik-button:active:not(:disabled):not([aria-busy='true']) {
  background: var(--uik-button-bg-active);
  transform: translate3d(var(--uik-button-magnetic-x, 0), var(--uik-button-magnetic-y, 0), 0) scale(0.97);
}

.uik-button:focus-visible {
  outline: none;
  box-shadow: var(--uik-button-shadow), var(--shadow-focus);
}

.uik-button:disabled,
.uik-button[aria-disabled='true'] {
  cursor: not-allowed;
  filter: grayscale(0.18);
  opacity: 0.58;
}

.uik-button[data-size='xs'] {
  --uik-button-height: var(--space-8);
  --uik-button-px: var(--space-3);
  --uik-button-gap: var(--space-1);
  --uik-button-font-size: var(--font-size-xs);
  --uik-button-radius: var(--radius-sm);
}

.uik-button[data-size='sm'] {
  --uik-button-height: var(--space-10);
  --uik-button-px: var(--space-3);
  --uik-button-font-size: var(--font-size-sm);
}

.uik-button[data-size='md'] {
  --uik-button-height: calc(var(--space-10) + var(--space-1));
}

.uik-button[data-size='lg'] {
  --uik-button-height: calc(var(--space-12) + var(--space-1));
  --uik-button-px: var(--space-6);
  --uik-button-font-size: var(--font-size-lg);
  --uik-button-radius: var(--radius-lg);
}

.uik-button[data-size='xl'] {
  --uik-button-height: calc(var(--space-16) - var(--space-1));
  --uik-button-px: var(--space-8);
  --uik-button-gap: var(--space-3);
  --uik-button-font-size: var(--font-size-xl);
  --uik-button-radius: var(--radius-xl);
}

.uik-button[data-variant='primary'] {
  --uik-button-bg: var(--color-primary);
  --uik-button-bg-hover: var(--color-primary-hover);
  --uik-button-bg-active: var(--color-primary-active);
  --uik-button-fg: var(--color-bg);
  --uik-button-border: var(--color-primary);
}

.uik-button[data-variant='secondary'] {
  --uik-button-bg: var(--color-surface);
  --uik-button-bg-hover: var(--color-surface-2);
  --uik-button-bg-active: var(--color-border);
  --uik-button-fg: var(--color-text);
  --uik-button-border: var(--color-border);
  --uik-button-shadow: var(--shadow-sm);
}

.uik-button[data-variant='ghost'] {
  --uik-button-bg: transparent;
  --uik-button-bg-hover: var(--color-primary-subtle);
  --uik-button-bg-active: var(--color-border);
  --uik-button-fg: var(--color-primary);
  --uik-button-border: transparent;
  --uik-button-shadow: none;
}

.uik-button[data-variant='danger'] {
  --uik-button-bg: var(--color-danger);
  --uik-button-bg-hover: var(--color-danger);
  --uik-button-bg-active: var(--color-danger);
  --uik-button-fg: var(--color-bg);
  --uik-button-border: var(--color-danger);
}

.uik-button[data-variant='success'] {
  --uik-button-bg: var(--color-success);
  --uik-button-bg-hover: var(--color-success);
  --uik-button-bg-active: var(--color-success);
  --uik-button-fg: var(--color-bg);
  --uik-button-border: var(--color-success);
}

.uik-button[data-variant='gradient'] {
  --uik-button-bg: linear-gradient(135deg, var(--color-primary), var(--color-neon-purple), var(--color-neon-cyan));
  --uik-button-bg-hover: linear-gradient(135deg, var(--color-neon-cyan), var(--color-primary), var(--color-neon-purple));
  --uik-button-bg-active: linear-gradient(135deg, var(--color-primary-active), var(--color-neon-purple));
  --uik-button-fg: var(--color-bg);
  --uik-button-border: transparent;
  --uik-button-shadow: var(--shadow-lg);
  background-size: 220% 220%;
  animation: uik-button-gradient-shift var(--transition-smooth) infinite;
}

.uik-button[data-variant='glass'] {
  --uik-button-bg: var(--glass-bg);
  --uik-button-bg-hover: var(--glass-bg);
  --uik-button-bg-active: var(--color-surface-2);
  --uik-button-fg: var(--color-text);
  --uik-button-border: var(--glass-border);
  --uik-button-shadow: var(--glass-shadow);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
}

.uik-button[data-variant='neon'] {
  --uik-button-bg: transparent;
  --uik-button-bg-hover: color-mix(in srgb, var(--color-neon-blue) 14%, transparent);
  --uik-button-bg-active: color-mix(in srgb, var(--color-neon-purple) 18%, transparent);
  --uik-button-fg: var(--color-neon-blue);
  --uik-button-border: var(--color-neon-blue);
  --uik-button-shadow: var(--shadow-glow);
}

.uik-button[data-status='success'] {
  --uik-button-bg: var(--color-success);
  --uik-button-bg-hover: var(--color-success);
  --uik-button-bg-active: var(--color-success);
  --uik-button-border: var(--color-success);
}

.uik-button[data-status='error'] {
  --uik-button-bg: var(--color-danger);
  --uik-button-bg-hover: var(--color-danger);
  --uik-button-bg-active: var(--color-danger);
  --uik-button-border: var(--color-danger);
  animation: uik-button-error-shake var(--transition-spring);
}

.uik-button[data-pulse='true']:not(:disabled):not([aria-busy='true']) {
  animation: uik-button-pulse 2s var(--transition-spring) infinite;
}

.uik-button[data-gradient-border='true'] {
  border-color: transparent;
}

.uik-button[data-gradient-border='true']::before {
  content: '';
  position: absolute;
  inset: calc(var(--space-1) * -1);
  z-index: -2;
  background: conic-gradient(from 0deg, var(--color-primary), var(--color-neon-cyan), var(--color-neon-purple), var(--color-neon-pink), var(--color-primary));
  animation: uik-button-gradient-border 2.8s var(--transition-smooth) infinite;
}

.uik-button[data-gradient-border='true']::after {
  content: '';
  position: absolute;
  inset: 1px;
  z-index: -1;
  border-radius: calc(var(--uik-button-radius) - 1px);
  background: var(--uik-button-bg);
}

.uik-button__shimmer {
  position: absolute;
  inset: -35%;
  z-index: var(--z-base);
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--color-bg) 30%, transparent), transparent);
  opacity: 0;
  pointer-events: none;
  transform: translateX(-140%) skewX(-16deg);
}

.uik-button[data-shimmer='true'] .uik-button__shimmer,
.uik-button[aria-busy='true'] .uik-button__shimmer,
.uik-button:hover:not(:disabled) .uik-button__shimmer {
  opacity: 1;
  animation: uik-button-shimmer 1.5s var(--transition-smooth) infinite;
}

.uik-button__content,
.uik-button__icon,
.uik-button__spinner,
.uik-button__status-icon,
.uik-button__badge {
  position: relative;
  z-index: var(--z-raised);
}

.uik-button__content {
  display: inline-flex;
  min-width: 0;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-overflow: ellipsis;
}

.uik-button__icon {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  transition: transform var(--transition-spring), opacity var(--transition-base);
}

.uik-button:hover:not(:disabled) .uik-button__icon--left {
  transform: translateX(calc(var(--space-1) * -1));
}

.uik-button:hover:not(:disabled) .uik-button__icon--right {
  transform: translateX(var(--space-1));
}

.uik-button__spinner {
  width: 1em;
  height: 1em;
  border: 2px solid color-mix(in srgb, currentColor 30%, transparent);
  border-top-color: currentColor;
  border-radius: var(--radius-full);
  animation: uik-button-spin 0.8s linear infinite;
}

.uik-button__status-icon {
  width: 1em;
  height: 1em;
}

.uik-button__status-icon path {
  fill: none;
  stroke: currentColor;
  stroke-width: 2.4;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.uik-button__status-icon--success path {
  stroke-dasharray: 18;
  stroke-dashoffset: 18;
  animation: uik-button-check var(--transition-spring) forwards;
}

.uik-button__status-icon--error path {
  stroke-dasharray: none;
}

.uik-button__badge {
  position: absolute;
  top: 0;
  right: 0;
  display: inline-flex;
  min-width: var(--space-5);
  height: var(--space-5);
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-bg);
  border-radius: var(--radius-full);
  background: var(--color-neon-pink);
  color: var(--color-bg);
  font-family: var(--font-sans);
  font-size: var(--font-size-xs);
  font-weight: 750;
  line-height: 1;
  padding: 0 var(--space-1);
  transform: translate(35%, -35%);
  animation: uik-button-badge-pop var(--transition-bounce);
}

.uik-button__ripple {
  position: absolute;
  z-index: var(--z-base);
  width: var(--uik-ripple-size);
  height: var(--uik-ripple-size);
  left: var(--uik-ripple-x);
  top: var(--uik-ripple-y);
  border-radius: var(--radius-full);
  background: currentColor;
  opacity: 0;
  pointer-events: none;
  transform: scale(0);
  animation: uik-button-ripple 600ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.uik-button[data-skeleton='true'] {
  --uik-button-bg: linear-gradient(110deg, var(--color-surface), var(--color-surface-2), var(--color-surface));
  --uik-button-bg-hover: var(--uik-button-bg);
  --uik-button-border: var(--color-border);
  background-size: 240% 100%;
  color: transparent;
  pointer-events: none;
  animation: uik-button-skeleton 1.5s var(--transition-smooth) infinite;
}

.uik-button[data-skeleton='true'] > * {
  opacity: 0;
}

.uik-button-group {
  display: inline-flex;
  align-items: stretch;
  width: fit-content;
  isolation: isolate;
}

.uik-button-group[data-full-width='true'] {
  width: 100%;
}

.uik-button-group[data-orientation='vertical'] {
  flex-direction: column;
}

.uik-button-group .uik-button {
  border-radius: 0;
  box-shadow: none;
}

.uik-button-group[data-orientation='horizontal'] .uik-button:first-child {
  border-top-left-radius: var(--radius-md);
  border-bottom-left-radius: var(--radius-md);
}

.uik-button-group[data-orientation='horizontal'] .uik-button:last-child {
  border-top-right-radius: var(--radius-md);
  border-bottom-right-radius: var(--radius-md);
}

.uik-button-group[data-orientation='horizontal'] .uik-button + .uik-button {
  margin-left: -1px;
}

.uik-button-group[data-orientation='vertical'] .uik-button:first-child {
  border-top-left-radius: var(--radius-md);
  border-top-right-radius: var(--radius-md);
}

.uik-button-group[data-orientation='vertical'] .uik-button:last-child {
  border-bottom-left-radius: var(--radius-md);
  border-bottom-right-radius: var(--radius-md);
}

.uik-button-group[data-orientation='vertical'] .uik-button + .uik-button {
  margin-top: -1px;
}

.uik-button-group[data-variant='segmented'] {
  gap: var(--space-1);
  padding: var(--space-1);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: var(--shadow-inner);
}

.uik-button-group[data-variant='segmented'] .uik-button {
  border-color: transparent;
  border-radius: var(--radius-md);
}

.uik-button-group[data-variant='segmented'] .uik-button[aria-pressed='true'],
.uik-button-group[data-variant='segmented'] .uik-button[data-selected='true'] {
  background: var(--color-bg);
  color: var(--color-text);
  box-shadow: var(--shadow-sm);
}

@media (prefers-reduced-motion: reduce) {
  .uik-button,
  .uik-button *,
  .uik-button::before,
  .uik-button::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
`;
