export * from './components/Button';
export * from './components/CursorEffect';

// Styles (consumers import this once in their app)
export const initStyles = () => {
  if (typeof document !== 'undefined') {
    import('./styles/tokens.css');
  }
};
