export const CURSOR_EFFECT_STYLE_ID = 'nav-ui-cursor-effect-styles';

export const cursorEffectStyles = `
.nav-ui-cursor-root {
  --cursor-color: var(--color-primary);
  --cursor-size: 34px;
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 2147483647;
}

.nav-ui-cursor-root,
.nav-ui-cursor-root * {
  box-sizing: border-box;
}

.nav-ui-cursor-dot,
.nav-ui-cursor-ring,
.nav-ui-cursor-blob,
.nav-ui-cursor-crosshair-x,
.nav-ui-cursor-crosshair-y,
.nav-ui-cursor-spotlight,
.nav-ui-cursor-trail {
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  will-change: transform, opacity;
}

.nav-ui-cursor-dot {
  width: 6px;
  height: 6px;
  border-radius: var(--radius-full);
  background: var(--cursor-color);
  transform: translate3d(calc(var(--cursor-x) - 3px), calc(var(--cursor-y) - 3px), 0);
  transition: transform var(--transition-fast) linear;
}

.nav-ui-cursor-ring {
  width: var(--cursor-size);
  height: var(--cursor-size);
  border: 1px solid color-mix(in srgb, var(--cursor-color) 70%, transparent);
  border-radius: var(--radius-full);
  box-shadow: 0 0 18px color-mix(in srgb, var(--cursor-color) 22%, transparent);
  transform: translate3d(calc(var(--cursor-x) - (var(--cursor-size) / 2)), calc(var(--cursor-y) - (var(--cursor-size) / 2)), 0) scale(var(--cursor-scale, 1));
  transition: transform var(--transition-slow) var(--transition-spring), border-color var(--transition-base) ease;
}

.nav-ui-cursor-root[data-variant='magnetic'] .nav-ui-cursor-ring {
  border-color: var(--color-neon-blue);
  box-shadow: var(--shadow-glow);
}

.nav-ui-cursor-trail {
  width: 9px;
  height: 9px;
  border-radius: var(--radius-full);
  background: var(--cursor-color);
  opacity: var(--trail-opacity);
  transform: translate3d(calc(var(--trail-x) - 4px), calc(var(--trail-y) - 4px), 0) scale(var(--trail-scale));
  transition: opacity var(--transition-slow) ease;
}

.nav-ui-cursor-spotlight {
  inset: 0;
  background: radial-gradient(circle at var(--cursor-x) var(--cursor-y), color-mix(in srgb, var(--cursor-color) 22%, transparent), transparent 220px);
  mix-blend-mode: screen;
}

.nav-ui-cursor-crosshair-x {
  width: 100vw;
  height: 1px;
  background: color-mix(in srgb, var(--cursor-color) 52%, transparent);
  transform: translate3d(0, var(--cursor-y), 0);
}

.nav-ui-cursor-crosshair-y {
  width: 1px;
  height: 100vh;
  background: color-mix(in srgb, var(--cursor-color) 52%, transparent);
  transform: translate3d(var(--cursor-x), 0, 0);
}

.nav-ui-cursor-blob {
  width: var(--cursor-size);
  height: var(--cursor-size);
  border-radius: 44% 56% 62% 38% / 46% 42% 58% 54%;
  background: color-mix(in srgb, var(--cursor-color) 34%, transparent);
  filter: blur(1px);
  transform: translate3d(calc(var(--cursor-x) - (var(--cursor-size) / 2)), calc(var(--cursor-y) - (var(--cursor-size) / 2)), 0) rotate(var(--cursor-rotate, 0deg)) scale(var(--cursor-scale, 1));
  transition: border-radius var(--transition-slow) var(--transition-spring), transform var(--transition-slow) var(--transition-spring);
}

@media (pointer: coarse), (prefers-reduced-motion: reduce) {
  .nav-ui-cursor-root {
    display: none;
  }
}
`;
